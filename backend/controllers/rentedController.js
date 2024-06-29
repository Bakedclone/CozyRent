import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js"
// Models Import
import { Users } from "../models/Users.js";
import { Rooms } from "../models/Rooms.js";
import { Tenants } from "../models/Tenants.js";
import { Payment } from "../models/Payment.js";
import { PastTenants } from "../models/PastTenants.js";
import { Stats } from "./../models/Stats.js";
import { Furniture } from "../models/Furniture.js";
import { Rentals } from "../models/Rentals.js";

export const addRentedItem = catchAsyncError(async (req, res, next) => {

    var { UserID, FurnitureID, StartingDate, EndingDate } = req.body;

    if (!UserID || !FurnitureID || !StartingDate || !EndingDate)
        return next(new ErrorHandler("Enter required fields", 400));

    const user = await Users.findById(UserID);
    if (!user)
        return next(new ErrorHandler("Invalid User-ID", 400));

    const furniture = await Furniture.findById(FurnitureID);
    if (!furniture)
        return next(new ErrorHandler("Invalid furniture-ID", 400));
    furniture.availability_status = false;
    furniture.save();

    var [year, month, day] = StartingDate.split('-');
    StartingDate = new Date(year, month - 1, day);

    [year, month, day] = EndingDate.split('-');
    StartingDate = new Date(year, month - 1, day);


    const rental = await Rentals.create({
        UserID,
        FurnitureID,
        StartingDate,
        EndingDate,
    });

    res.status(200).json({
        success: true,
        rental,
        message: "New rental added Successfully."
    });
});

export const getMyInfo = catchAsyncError(async (req, res, next) => {

    const tenant = await Tenants.find({ UserID: req.user._id });

    if (!tenant) {
        res.status(200).json({
            success: true,
            message: "Tenant Not found.",
        });
    }

    res.status(200).json({
        success: true,
        tenant: tenant[0]
    });
})

export const updateTenant = catchAsyncError(async (req, res, next) => {

    var { UserID, RoomID, MonthlyRent, PendingRent, DepositCount, Status, CheckINDate, CheckOUTDate } = req.body;

    if (!UserID)
        return next(new ErrorHandler("Enter required fields", 400));

    const tenant = await Tenants.findOne({ UserID });

    if (!tenant)
        return next(new ErrorHandler("Invalid User-ID", 400));

    if (RoomID) {
        const room = await Rooms.findById(RoomID);
        if (!room)
            return next(new ErrorHandler("Invalid Room-ID", 400));
        if (room.SharingCapacity === room.Occupied)
            return next(new ErrorHandler("Selected Room is Already full", 400));
        room.Occupied += 1;
        room.save();
        tenant.RoomID = RoomID;
    }

    if (MonthlyRent) {
        tenant.MonthlyRent = MonthlyRent;
    }

    if (PendingRent) {
        tenant.PendingRent = PendingRent;
    }
    if (DepositCount) {
        tenant.DepositCount = DepositCount;
    }
    if (CheckINDate) {
        tenant.CheckINDate = CheckINDate;
    }
    if (CheckOUTDate) {
        tenant.CheckOUTDate = CheckOUTDate;
    }
    if (Status) {
        tenant.Status = Status;
    }
    await tenant.save();

    res.status(200).json({
        success: true,
        tenant,
        message: "Tenant Updated Successfully."
    });
});

export const countDeposite = catchAsyncError(async (req, res, next) => {

    const tenant = await Tenants.findOne({ UserID: req.body._id });

    if (tenant.PendingRent > 0) {
        res.status(200).json({
            success: true,
            message: `Your Rent is pending. Please Pay your pending rent then you can apply.`,
        });
    }

    if (tenant.DepositCount === true) {
        res.status(200).json({
            success: true,
            message: `Your Deposite is Already Counted.`,
        });
    }

    tenant.DepositCount = true;

    let date = new Date();
    let nextmonth = new Date(date.getFullYear(), date.getMonth() + 2, 0);
    tenant.CheckOUTDate = nextmonth;
    await tenant.save();

    res.status(200).json({
        success: true,
        message: `Your Deposite has been counted. Your Check-out date is ${nextmonth}.`,
    });
});

export const deleteTenant = catchAsyncError(async (req, res, next) => {

    const userid = req.body.UserID;

    const tenant = await Tenants.findOne({ UserID: userid });

    if (!tenant) {
        res.status(404).json({
            success: false,
            message: "User Not Found.",
        });
    }

    await tenant.deleteOne();

    res.status(200).json({
        success: true,
        message: "Tenant Deleted Successfully.",
    });
});

export const getAllTenants = catchAsyncError(async (req, res, next) => {

    const tenants = await Tenants.find({}).sort({ CheckINDate: "desc" });

    res.status(200).json({
        success: true,
        tenants
    });
});

export const AutoUpdateRent = catchAsyncError(async (req, res, next) => {

    let tenants = await Tenants.find({ $and: [{ DepositCount: false }, { Status: "Active" }] });

    for (let i = 0; i < tenants.length; i++) {
        tenants[i].PendingRent += tenants[i].MonthlyRent;
        tenants[i].save();
    }
});


export const CheckInActiveTenant = catchAsyncError(async (req, res, next) => {

    const currentDate = new Date();
    let tenants = await Tenants.find({ CheckOUTDate: { $lt: currentDate } })

    for (let i = 0; i < tenants.length; i++) {
        tenants[i].Status = "In-Active";
        tenants[i].save();
    }
});

export const RemoveInActiveTenant = catchAsyncError(async (req, res, next) => {

    let tenants = await Tenants.find({ Status: "In-Active" });

    if (tenants) {

        for (let i = 0; i < tenants.length; i++) {
            let UserID, RoomID, CheckINDate, CheckOUTDate, MonthlyRent, TotalRentPaid;
            UserID = tenants[i].UserID;
            RoomID = tenants[i].RoomID;
            CheckINDate = tenants[i].CheckINDate;
            CheckOUTDate = tenants[i].CheckOUTDate;
            MonthlyRent = tenants[i].MonthlyRent;
            const payment = await Payment.aggregate([
                {
                    $match: {
                        Tenantid: TenantIdToSearch
                    }
                },
                {
                    $group: {
                        _id: "$TenatID",
                        totalAmountPaid: { $sum: "$Amount" }
                    }
                }
            ]);

            if (payment)
                TotalRentPaid = payment[0].totalAmountPaid;

            await PastTenants.create({
                UserID,
                RoomID,
                CheckINDate,
                CheckOUTDate,
                MonthlyRent,
                TotalRentPaid
            })
            await tenants[i].deleteOne();
        }
    }
});

Tenants.watch().on("change", async () => {

    const tenants = await Tenants.find({ Status: "Active" });
    const stats = await Stats.findOne({}).sort({ createdAt: "desc" }).limit(1);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    stats.Tenant[currentMonth] = tenants.length;
    await stats.save();
});
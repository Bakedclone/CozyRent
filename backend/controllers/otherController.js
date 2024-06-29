import { catchAsyncError } from "../middlewares/catchAsyncError.js";

// Models Import
import { Tenants } from "./../models/Tenants.js"
import { Rooms } from "./../models/Rooms.js"
import { Payment } from "./../models/Payment.js"
import { Stats } from "./../models/Stats.js"

export const dashboardData = catchAsyncError(async (req, res, next) => {

    async function getTotalRemainingCapacity() {
        const aggregationQuery = Rooms.aggregate([
            {
                $project: {
                    remainingCapacity: { $subtract: ["$SharingCapacity", "$Occupied"] }
                }
            },
            {
                $group: {
                    _id: null,
                    totalRemainingCapacity: { $sum: "$remainingCapacity" }
                }
            }
        ]);

        try {
            const result = await aggregationQuery.exec();
            const totalRemainingCapacity = result.length > 0 ? result[0].totalRemainingCapacity : 0;
            return totalRemainingCapacity;
        } catch (err) {
            console.error(err);
        }
    }

    async function getTotalAmountPaid() {
        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

        try {
            const result = await Payment.aggregate([
                {
                    $match: {
                        PaymentDate: { $gte: startOfMonth, $lte: endOfMonth }
                    }
                },
                {
                    $group: {
                        _id: null,
                        totalAmountPaid: { $sum: "$Amount" }
                    }
                }
            ]).exec();
            return (result.length > 0 ? result[0].totalAmountPaid : 0);
        } catch (err) {
            console.error(err);
        }
    }

    async function getTotalTenantsCheckedOut() {
        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

        try {
            const result = await Tenants.aggregate([
                {
                    $match: {
                        CheckOUTDate: { $gte: startOfMonth, $lte: endOfMonth }
                    }
                },
                {
                    $group: {
                        _id: null,
                        totalTenants: { $sum: 1 }
                    }
                }
            ]).exec();
            return (result.length > 0 ? result[0].totalTenants : 0);
        } catch (err) {
            console.error(err);
        }
    }

    async function getTotalPendingRent() {
        try {
            const result = await Tenants.aggregate([
                {
                    $group: {
                        _id: null,
                        totalPendingRent: { $sum: "$PendingRent" }
                    }
                }
            ]).exec();
            return (result.length > 0 ? result[0].totalPendingRent : 0);
        } catch (err) {
            console.error(err);
        }
    }

    var PendingRent = await getTotalPendingRent();

    var AvailableBeds = await getTotalRemainingCapacity();

    var DepositCounts = await getTotalTenantsCheckedOut();

    var Revenue = await getTotalAmountPaid();

    res.status(200).json({
        success: true,
        carddata: {
            PendingRent,
            AvailableBeds,
            DepositCounts,
            Revenue,
        }
    })
})

export const getDashboardStats = catchAsyncError(async (req, res, next) => {

    const stats = await Stats.find({}).sort({ createdAt: "desc" }).limit(2);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    var lineChart = [];
    var currRev = [];
    var preRev = [];
    for (var i = 0; i <= currentMonth; i++) {
        currRev.push(stats[0].Revenue[i]);
        preRev.push(stats[1].Revenue[i]);
    }
    lineChart.push(currRev);
    lineChart.push(preRev);

    var barChart = [];
    var prevTen = [];
    var currTen = [];

    for (var i = 0; i <= currentMonth; i++) {
        currTen.push(stats[0].Tenant[i]);
        prevTen.push(stats[1].Tenant[i]);
    }
    barChart.push(currTen);
    barChart.push(prevTen);
    
    res.status(200).json({
        success: true,
        lineChart,
        barChart
    })
})
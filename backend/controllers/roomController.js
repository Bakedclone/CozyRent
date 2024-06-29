import { Rooms } from "../models/Rooms.js";
import ErrorHandler from "../utils/errorHandler.js"
import { catchAsyncError } from "../middlewares/catchAsyncError.js";

// Model Import
import { Property } from "../models/Property.js";

export const getAllRooms = async (req, res, next) => {
    const rooms = await Rooms.find();
    res.status(200).json({
        success: true,
        rooms,
    });
};

export const addRooms = catchAsyncError(async(req, res, next)=> {

    const { _id, Propertyid, MonthlyRent, SharingCapacity, Occupied, facilities, description } = req.body;
    
    if(!_id || !Propertyid || !SharingCapacity || !MonthlyRent) 
        return next(new ErrorHandler("Enter all fields", 400));

    const property = await Property.findById(Propertyid);

    if(!property)
    return next(new ErrorHandler("Property-ID Not Found", 400));

    let myArray;
    if(facilities) {
        myArray = facilities.split(",");
    }

    const room = await Rooms.create({
        _id,
        Propertyid, 
        MonthlyRent,
        SharingCapacity, 
        Occupied, 
        facilities: myArray, 
        description
    });

    res.status(200).json({
    success: true,
    room,
    message: "New Room added Successfully."
    });
});

export const removeRoom = catchAsyncError(async(req, res, next)=> {

    const room = await Rooms.findById(req.body._id);

    if(!room)
        return next(new ErrorHandler("Room Not Found", 400));

    await room.deleteOne();

    res.status(200).json({
        success: true,
        message: "Room Remove Successfull."
    });
});

export const updateRoom = catchAsyncError(async (req, res, next)=> {
    
    const { Propertyid, MonthlyRent, SharingCapacity, Occupied, facilities, description } = req.body;

    const room = await Rooms.findById(req.body._id);
    if(!room)
        return next(new ErrorHandler("Room Not Found", 400));
    
    if(SharingCapacity) room.SharingCapacity = SharingCapacity;
    if(Propertyid) room.Propertyid = Propertyid;
    if(MonthlyRent) room.MonthlyRent = MonthlyRent;
    if(Occupied) room.Occupied = Occupied;
    if(facilities) {
        const myArray = facilities.split(",");
        room.facilities = myArray;
    }
    if(description) room.description = description;


    await room.save();

    res.status(200).json({
        success: true,
        message: `Update Room ${req.body._id} Successfully`
    });
});


export const getAvaiableRooms = catchAsyncError(async (req, res, next)=> {

    const propertyid = req.body.Propertyid;

    const rooms = await Rooms.find({
        Propertyid: propertyid,
        $expr: { $lt: ["$Occupied", "$SharingCapacity"] }
    });

    res.status(200).json({
        success: true,
        rooms,
    });
});

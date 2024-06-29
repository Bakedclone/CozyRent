import mongoose from "mongoose";

const schema = new mongoose.Schema({
    UserID:{
        type:String,
        required:[true, "Please enter User ID"]
    },
    RoomID:{
        type:String,
        required:[true, "Please enter Room ID"],
        ref: 'Room'
    },
    CheckINDate:{
        type: Date,
        default: Date.now
    },
    CheckOUTDate:{
        type: Date
    },
    MonthlyRent: {
        type: Number,
    },
    TotalRentPaid: {
        type: Number,
        default: 0,
    },
})

export const PastTenants = mongoose.model("PastTenants", schema, "PastTenants");
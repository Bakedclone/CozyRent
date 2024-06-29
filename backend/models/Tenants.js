import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id: {
        type:String,
    },
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
    PendingRent: {
        type: Number,
        default: 0,
    },
    DepositCount: {
        type: Boolean,
        default: false
    },
    Status:{
        type:String,
        enum: ["Active", "In-Active"],
        default: "Active",
    },
})

export const Tenants = mongoose.model("Tenants", schema, "Tenants");
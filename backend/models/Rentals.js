import mongoose from "mongoose";

const schema = new mongoose.Schema({
    UserID:{
        type:String,
        required:[true, "Please enter User ID"]
    },
    FurnitureID:{
        type:String,
        required:[true, "Please enter Funrniture ID"],
    },
    StartingDate:{
        type: Date,
        default: Date.now
    },
    EndingDate:{
        type: Date
    },
    Status:{
        type:String,
        enum: ["Active", "In-Active"],
        default: "Active",
    },
})

export const Rentals = mongoose.model("Rentals", schema, "Rentals");
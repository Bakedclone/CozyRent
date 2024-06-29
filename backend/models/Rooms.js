import mongoose from "mongoose";
import { Property } from "../models/Property.js";

const schema = new mongoose.Schema({

    
    _id:{
        type:String,
        required:[true, "Please enter your Room No."],
    },
    Propertyid: {
        type: mongoose.Schema.Types.String,
        ref: Property,
    },
    MonthlyRent: {
        type: Number,
        required: true,
    },
    SharingCapacity:{
        type:Number,
        required:[true, "Please enter your Room No."],
        maxLength:[2, "Capacity must be atmost 2 character"]
    },
    Occupied:{
        type:Number,
        required:[true, "Please enter your Room No."],
        maxLength:[2, "Occupied length must be atmost 2 character"],
        default: 0
    },
    facilities: [
        {
            type : String,
        }
    ],
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

})

export const Rooms = mongoose.model("Rooms", schema, "Rooms");
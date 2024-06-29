import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter your Furniture Name"]
    },
    description:{
        type:String,
        required:[true, "Please enter description"]
    },
    category: {
        type:String,
        required:[true, "Please enter category"]
    },
    price_per_month:{
        type:String,
        required:[true, "Please enter Price Per Month"]
    },
    availability_status:{
        type:Boolean,
        default: true,
    },
    condition: {
        type:String,
    },
    images: [
        {
                public_id : {
                    type: String,
                },
                url: {
                    type: String,
                }
        }
    ]

})

export const Furniture = mongoose.model("Furniture", schema, "Furniture");
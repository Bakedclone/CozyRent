import mongoose from "mongoose";

const schema = new mongoose.Schema({

    _id:{
        type:String,
        required:[true, "Please enter your Property_ID"]
    },
    landlord_id:{
        type:String,
        required:[true, "Please enter your Property_ID"]
    },
    name:{
        type:String,
        required:[true, "Please enter your PG Name"]
    },
    city:{
        type:String,
        required:[true, "Please enter city"]
    },
    address:{
        type:String,
        required:[true, "Please enter Pg Address"]
    },
    area:{
        type:String,
        required:[true, "Please enter your PG Area"],
        maxLength:[15, "Area must be atmost 15 character"]
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

export const Property = mongoose.model("Property", schema, "Property");
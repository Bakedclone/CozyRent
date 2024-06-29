import mongoose from "mongoose";

const schema = new mongoose.Schema({
    UserID:{
        type:String,
    },
    Amount:{
        type:Number,
    },
    PaymentDate: {
        type: Date,
        default: Date.now,
    },
    PaymentMethod: {
        type: String,
    },

    RazorPayPaymentID:{
        type:String,
    },
    RazorPaySignatureID:{
        type:String,
    },
    RazorPayOrderID:{
        type:String,
    },
});


export const Payment = mongoose.model("Payment", schema, "Payment");
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { instance } from "../server.js";
import crypto from 'crypto';

// Models Import
import { Payment } from "../models/Payment.js";
import { Users } from "../models/Users.js";
import { Tenants } from "../models/Tenants.js";
import { Stats } from "../models/Stats.js"

export const buySubscription = catchAsyncError(async (req, res, next)=>{
    const user = await Users.findById(req.user._id);

    if(user.type === "admin")
        return next(new ErrorHandler("Admin can't buy subscription", 400));

    const plan_id = process.env.PLAN_ID;

    const subscription = await instance.subscriptions.create({
        plan_id,
        customer_notify: 1,
        total_count: 6,
    });

    user.subscription.id = subscription.id;
    user.subscription.status = subscription.stauts;

    await user.save();

    res.status(201).json({
        success: true,
        subscriptionId: subscription.id,
    });
});

export const paymentVerification = catchAsyncError(async (req, res, next)=>{

    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
    
    const isAuthentic = expectedSignature === razorpay_signature;

    if(isAuthentic) {
        const tenant = await Tenants.findOne({UserID : req.user._id});
        const amount_paid = tenant.PendingRent;
        tenant.PendingRent = 0;
        tenant.save();
        
        await Payment.create({
            UserID : tenant.UserID,
            Amount : amount_paid,
            PaymentMethod : "RazorPay",
            RazorPayPaymentID : razorpay_payment_id,
            RazorPaySignatureID : razorpay_signature,
            RazorPayOrderID : razorpay_order_id
        });

        res.redirect(
            process.env.FRONTEND_URL`/paymentsuccess?reference=${razorpay_payment_id}`
        );
    }
    else {
        res.status(400).json({
            success: false,
        })
    }
});

export const PaymentSuccess = catchAsyncError(async(req, res, next)=>{

    const {RazorPayPaymentID} = req.body;
    const payment = await Payment.findOne(RazorPayPaymentID);
    const tenant = await Tenants.findById(req.user._id);
    const amount_paid = tenant.PendingRent;
    tenant.PendingRent = 0;
    tenant.save();
    payment.Amount = amount_paid;
    payment.UserID = tenant.UserID;
    payment.save();
    res.status(200).json({
        success: true,
        message: "Payment Successful",
    })
})

export const getRazorPayKey = catchAsyncError((req, res, next)=>{
    res.status(200).json({
        success: true,
        key: process.env.RAZORPAY_API_KEY,
    })
})

export const cancelSubscription = catchAsyncError(async(req, res, next)=>{

    const user = await Users.findById(req.user._id);

    const subscriptionId = user.subscription.id;

    let refund = false;

    await instance.subscriptions.cancel(subscriptionId);

    const payment = await Payment.findOne({
        razorpay_subscription_id: subscriptionId,
    });

    const gap = Date.now() - payment.createdAt;

    const refundTime = 7 * 24 * 60 * 60 * 1000;

    if(refundTime > gap) {
        refund = true;
        await instance.payments.refund(payment.razorpay_payment_id);
    }
    
    await payment.remove();
    user.subscription.id = undefined;
    user.subscription.status = undefined;
    await user.save();
    
    res.status(200).json({
        success: true,
        message: refund ? "Your Subsciption is cancelled and refund will received within 7 days." 
        : "Your Subsciption is cancelled. No refund will provided as subscription is cancelled after 7 days.",
    })
});

export const payNow = catchAsyncError(async(req, res, next)=>{

    const options = {
        amount: Number(req.body.amount)*100,
        currency: "INR",
    };

    const order = await instance.orders.create(options);

    res.status(200).json({
        success: true,
        order
    })
})

Payment.watch().on("change", async()=>{
    const stats = await Stats.findOne({}).sort({ createdAt: "desc"}).limit(1);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const newpayment = await Payment.findOne({}).sort({ PaymentDate: "desc"}).limit(1);
    stats.Revenue[currentMonth] += newpayment.Amount;
    await stats.save();
})
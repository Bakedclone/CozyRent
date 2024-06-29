import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { PaymentSuccess, buySubscription, cancelSubscription, getRazorPayKey, payNow, paymentVerification } from "../controllers/paymentController.js";

const router = express.Router();

// Buy Subscription
router.route("/subscribe").get(isAuthenticated,buySubscription);

// Paynow
router.route("/paynow").post(payNow);

// Verify Payment and save
router.route("/paymentverifiaction").post(isAuthenticated,paymentVerification);

// Get Razorpay key
router.route("/razorpaykey").get(getRazorPayKey);

// Cancel Subsripiton
router.route("/subscription/cancel").delete(isAuthenticated,cancelSubscription);

export default router;
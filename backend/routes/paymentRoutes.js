import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { getRazorPayKey, payNow, paymentVerification } from "../controllers/paymentController.js";

const router = express.Router();


// Paynow
router.route("/paynow").post(payNow);

// Verify Payment and save
router.route("/paymentverifiaction").post(isAuthenticated,paymentVerification);

// Get Razorpay key
router.route("/razorpaykey").get(getRazorPayKey);

export default router;
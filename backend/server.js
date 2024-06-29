import { app } from "./app.js";
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";
import Razorpay from "razorpay";
import nodeCron from "node-cron"    // Task schedular
import { AutoUpdateRent, CheckInActiveTenant, RemoveInActiveTenant } from "./controllers/tenantController.js";
// Model Import
import { Stats } from "./models/Stats.js";

connectDB();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

nodeCron.schedule("0 0 0 1 * *", async () => {
  // nodeCron.schedule("* * * * * *", async () => {
  try {
    AutoUpdateRent();
    CheckInActiveTenant();
    RemoveInActiveTenant();
  } catch (error) {
    console.log(error);
  }
});
nodeCron.schedule("0 0 1 1 *", async () => {
  // nodeCron.schedule("* * * * * *", async () => {
  try {
    const Revenue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const Tenant = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    await Stats.create({Revenue, Tenant});
  } catch (error) {
      console.log(error);
  }
});



app.listen(process.env.PORT, () =>
  console.log(`Server is running on ${process.env.PORT}`));
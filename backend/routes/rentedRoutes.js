import express from "express";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import { addRentedItem } from "../controllers/rentedController.js";
const router = express.Router();

// add Rented Item
router.route("/addRentedItem").post(isAuthenticated,  addRentedItem);



export default router;
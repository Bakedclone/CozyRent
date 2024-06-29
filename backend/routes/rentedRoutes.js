import express from "express";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import { addTenant, countDeposite, deleteTenant, getAllTenants, getMyInfo, updateTenant } from "../controllers/tenantController.js";
import { addRentedItem } from "../controllers/rentedController.js";
const router = express.Router();

// add Rented Item
router.route("/addRentedItem").post(isAuthenticated,  addRentedItem);



export default router;
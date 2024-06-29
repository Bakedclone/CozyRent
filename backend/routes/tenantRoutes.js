import express from "express";
// import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
// import { addTenant, countDeposite, deleteTenant, getAllTenants, getMyInfo, updateTenant } from "../controllers/tenantController.js";

// const router = express.Router();

// // add Tenant
// router.route("/admin/addtenant").post(isAuthenticated, authorizeAdmin, addTenant);

// // update Tenant
// router.route("/admin/updatetenant").post(isAuthenticated, authorizeAdmin, updateTenant);

// // Delete Tenant
// router.route("/admin/deletetenant").post(isAuthenticated, authorizeAdmin, deleteTenant);

// // Get All Tenants
// router.route("/admin/getalltenants").get(isAuthenticated, authorizeAdmin, getAllTenants);

// // Count Deposite
// router.route("/countdeposite").post(isAuthenticated, countDeposite);

// // Get Info
// router.route("/myinfo").get(isAuthenticated, getMyInfo);


export default router;
import express from "express";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import { dashboardData, getDashboardStats } from "../controllers/otherController.js";

const router = express.Router();

router.route("/dashdata").get(isAuthenticated, authorizeAdmin, dashboardData);

router.route("/dashstats").get(isAuthenticated, authorizeAdmin ,getDashboardStats);

export default router;
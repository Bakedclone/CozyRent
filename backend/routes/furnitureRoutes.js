import express from "express";
import { addProperty, getAllProperty, getProperty } from "../controllers/propertyController.js";
import { addFurniture } from "../controllers/furnitureContoller.js";
import { multipleUpload } from "../middlewares/multer.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Add New Property
router.route("/addfurniture").post(isAuthenticated, authorizeAdmin, multipleUpload, addFurniture);

// Get All Property
router.route("/getallproperty").get(getAllProperty);

// Get Property
router.route("/getproperty").post(getProperty);

export default router;
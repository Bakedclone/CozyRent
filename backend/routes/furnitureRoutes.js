import express from "express";
import { addProperty, getAllProperty, getProperty } from "../controllers/propertyController.js";
import { addFurniture, getAllFurniture, getFurniture } from "../controllers/furnitureContoller.js";
import { multipleUpload } from "../middlewares/multer.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Add New Property
router.route("/addfurniture").post(isAuthenticated, authorizeAdmin, multipleUpload, addFurniture);

// Get All Property
router.route("/getallfurniture").get(getAllFurniture);

// Get Property
router.route("/getfurniture").post(getFurniture);

export default router;
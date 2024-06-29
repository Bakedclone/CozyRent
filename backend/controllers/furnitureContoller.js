import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "cloudinary";

// Model Import
import { Furniture } from "../models/Furniture.js";

export const addFurniture = async(req, res, next) => {

    const { name, description, price_per_month, condition, category } = req.body; 

    if(!name || !description || !price_per_month || !condition || !category)
        return next(new ErrorHandler("Please add all fields", 400)); // Custom Error Handler

    const files = req.files;

    const images = [];
    // Traverse through each file and upload to Cloudinary
    for (let index = 0; index < files.length; index++) {
        const file = files[index];

        // Convert file to data URI
        const dataUri = getDataUri(file);

        // Upload to Cloudinary
        const mycloud = await cloudinary.v2.uploader.upload(dataUri.content);

        // Store image details in the array
        const img = {
            public_id: mycloud.public_id,
            url: mycloud.secure_url,
        };

        // Push img into images array
        images.push(img);
    }
    try {
        await Furniture.create({
            name, description, price_per_month, condition, images, category
        })
        res.status(201).json({
            success: true,
            message: "Furniture added Successfully. You can add rooms of this Furniture",
        });
    }
    catch(error) {
        if(error.code == 11000)
            next(new ErrorHandler("Enter Unique ID", 400));
    }
};

export const getAllFurniture = catchAsyncError(async (req, res, next)=> {
    
    const furniture = await Furniture.find({});

    res.status(200).json({
        success: true,
        furniture,
    });
})

export const getFurniture = catchAsyncError(async (req, res, next)=> {
    
    const furniture = await Furniture.findOne({_id : req.body._id});

    res.status(200).json({
        success: true,
        furniture,
    });
})
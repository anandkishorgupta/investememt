import express from "express";
import upload from "../config/press.multer.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { uploadLimiter } from "../middlewares/rateLimit.middleware.js";
import {
    createPress,
    getAllPress,
    getPressById,
    updatePress,
    deletePress,
} from "../controllers/press.controller.js";

const router = express.Router();

// Create a new press document
router.post("/", authMiddleware, uploadLimiter, upload.array("images", 10), createPress);

// Get all press documents
router.get("/", getAllPress);

// Get a single press by ID
router.get("/:id", getPressById);

// Update a press document by ID
router.put("/:id", authMiddleware, uploadLimiter, upload.array("images", 10), updatePress);

// Delete a press document by ID
router.delete("/:id", authMiddleware, deletePress);

export default router;

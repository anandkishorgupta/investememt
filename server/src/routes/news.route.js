import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
    createNews,
    getAllNews,
    getNewsById,
    updateNews,
    deleteNews,
} from "../controllers/news.controller.js";

const router = express.Router();

// Create a new news document
router.post("/", authMiddleware, createNews);

// Get all news
router.get("/", getAllNews);

// Get a single news by ID
router.get("/:id", getNewsById);

// Update a news document by ID
router.put("/:id", authMiddleware, updateNews);

// Delete a news document by ID
router.delete("/:id", authMiddleware, deleteNews);

export default router;

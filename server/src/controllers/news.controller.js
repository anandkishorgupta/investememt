import News from "../models/news.model.js";

// Create a new news document
export const createNews = async (req, res) => {
    try {
        const { Title, Link, Date } = req.body;

        if (!Title || !Date) {
            return res.status(400).json({ message: "Title and Date are required" });
        }

        const news = new News({ Title, Link, Date });
        await news.save();
        res.status(201).json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all news with pagination
export const getAllNews = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        
        const totalNews = await News.countDocuments();
        const newsList = await News.find().skip(skip).limit(limit);
        
        res.status(200).json({
            news: newsList,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(totalNews / limit),
                totalNews,
                hasNextPage: page < Math.ceil(totalNews / limit),
                hasPrevPage: page > 1
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single news by ID
export const getNewsById = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) {
            return res.status(404).json({ message: "News not found" });
        }
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update news by ID
export const updateNews = async (req, res) => {
    try {
        const { Title, Link, Date } = req.body;

        if (!Title || !Date) {
            return res.status(400).json({ message: "Title and Date are required" });
        }

        const news = await News.findByIdAndUpdate(
            req.params.id,
            { Title, Link, Date },
            { new: true }
        );

        if (!news) {
            return res.status(404).json({ message: "News not found" });
        }

        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete news by ID
export const deleteNews = async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);
        if (!news) {
            return res.status(404).json({ message: "News not found" });
        }
        res.status(200).json({ message: "News deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

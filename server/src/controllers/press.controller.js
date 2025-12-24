import Press from "../models/press.model.js";

// Create a new press document (with optional title)
export const createPress = async (req, res) => {
    try {
        const { title, description } = req.body;
        
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }
        
        // Check if files were uploaded via multer
        let images = [];
        
        if (req.files && req.files.length > 0) {
            // Files uploaded - store file paths
            images = req.files.map(file => `/uploads/press/${file.filename}`);
        } else if (req.body.images) {
            // URLs provided in body
            images = Array.isArray(req.body.images) ? req.body.images : [req.body.images];
        }
        
        if (!images || images.length === 0) {
            return res.status(400).json({ message: "Images are required" });
        }

        const press = new Press({ title, description, images });
        await press.save();
        res.status(201).json(press);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all press documents with pagination
export const getAllPress = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        
        const totalPress = await Press.countDocuments();
        const press = await Press.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
        
        res.status(200).json({
            press,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(totalPress / limit),
                totalPress,
                hasNextPage: page < Math.ceil(totalPress / limit),
                hasPrevPage: page > 1
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single press by ID
export const getPressById = async (req, res) => {
    try {
        const press = await Press.findById(req.params.id);
        if (!press) {
            return res.status(404).json({ message: "Press not found" });
        }
        res.status(200).json(press);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update press by ID
export const updatePress = async (req, res) => {
    try {
        const { title, description } = req.body;
        
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }
        
        // Get existing press document to work with current images
        const existingPress = await Press.findById(req.params.id);
        if (!existingPress) {
            return res.status(404).json({ message: "Press not found" });
        }
        
        // Start with existing images
        let finalImages = [...existingPress.images];
        
        // Handle images to delete
        // Since FormData can send multiple values with the same key, 
        // we need to handle both string and array cases
        let imagesToDelete = [];
        if (req.body.imagesToDelete) {
            // Check if it's a JSON string
            if (typeof req.body.imagesToDelete === 'string') {
                try {
                    imagesToDelete = JSON.parse(req.body.imagesToDelete);
                } catch (e) {
                    // If parsing fails, treat as single value
                    imagesToDelete = [req.body.imagesToDelete];
                }
            } else if (Array.isArray(req.body.imagesToDelete)) {
                imagesToDelete = req.body.imagesToDelete;
            } else {
                // Single value
                imagesToDelete = [req.body.imagesToDelete];
            }
                
            // Remove deleted images from the array
            finalImages = finalImages.filter(image => !imagesToDelete.includes(image));
        }
        
        // Handle new images uploaded via multer
        if (req.files && req.files.length > 0) {
            // Add new uploaded images
            const newImages = req.files.map(file => `/uploads/press/${file.filename}`);
            finalImages = [...finalImages, ...newImages];
        } 
        // Handle images provided in body (for backward compatibility)
        else if (req.body.images) {
            const newImages = Array.isArray(req.body.images) ? req.body.images : [req.body.images];
            finalImages = [...finalImages, ...newImages];
        }
        
        // Validate that we still have images
        if (finalImages.length === 0) {
            return res.status(400).json({ message: "At least one image is required" });
        }
        
        // Update the document
        const press = await Press.findByIdAndUpdate(
            req.params.id,
            { title, description, images: finalImages },
            { new: true }
        );

        res.status(200).json(press);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete press by ID
export const deletePress = async (req, res) => {
    try {
        const press = await Press.findByIdAndDelete(req.params.id);
        if (!press) {
            return res.status(404).json({ message: "Press not found" });
        }
        res.status(200).json({ message: "Press deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

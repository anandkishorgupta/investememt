import mongoose from "mongoose";

const pressSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: String,
        images: [
            {
                type: String, // stores the file path or URL
                required: true,
            },
        ]
    },
    {
        timestamps: true, // adds createdAt and updatedAt automatically
    }
);

const Press = mongoose.model("Press", pressSchema);

export default Press;

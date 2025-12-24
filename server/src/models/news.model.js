import mongoose from "mongoose";


const newsSchema = new mongoose.Schema(
    {
    Title:{
        type:String,
        required:true,},
    Link:String,
    Date:{
        type:Date,
        required:true,
    }

    },
    {
        timestamps: true, // adds createdAt and updatedAt automatically
    }
);

const News = mongoose.model("News", newsSchema);

export default News;

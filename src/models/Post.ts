import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    heading: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},{timestamps: true});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);

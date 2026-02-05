import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO as string);
        console.log("MongoDB connected");
    } catch (error) {
        throw new Error("MongoDB connection error");
    }
};

export default connect;

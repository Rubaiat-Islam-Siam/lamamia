import mongoose from "mongoose";

let isConnected = false;

const connect = async () => {
    // Set mongoose options to avoid deprecation warnings
    mongoose.set('strictQuery', true);

    // If already connected, return
    if (isConnected) {
        console.log("Using existing MongoDB connection");
        return;
    }

    // Check if MONGO environment variable exists
    if (!process.env.MONGO) {
        throw new Error("MONGO environment variable is not defined");
    }

    try {
        const db = await mongoose.connect(process.env.MONGO, {
            dbName: "lamamia",
            bufferCommands: false,
        });

        isConnected = db.connections[0].readyState === 1;
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error(`MongoDB connection failed: ${error}`);
    }
};

export default connect;

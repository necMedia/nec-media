import mongoose from "mongoose";

const connectMongoDB = async () => {
	try {
		const conn = await mongoose.connect(`mongodb+srv://necmedia2025:aZ6Igocvia7Hnc7M@cluster0.1jai42h.mongodb.net/twitter-db?retryWrites=true&w=majority&appName=Cluster0`);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};

export default connectMongoDB;

import mongoose from 'mongoose';

let connected = false;
const uri: string | undefined = process.env.MONGODB_URI;

// Check if we have MongoDB URI
if (!uri) {
	console.error('MongoDB URI is not defined');
	process.exit(1);
}

const connectDB = async () => {
	mongoose.set('strictQuery', true);
	// Check if we have a connection to Mongoose
	if (connected) {
		console.log('MongoDB is connected');
		return;
	}

	// Connect to Mongoose
	try {
		await mongoose.connect(uri);
		connected = true;
	} catch (error) {
		console.error('Database connection error:', error);
	}
};

export default connectDB;

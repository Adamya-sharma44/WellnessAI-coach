import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      console.warn('⚠️  MONGO_URI is not defined in .env file');
      console.warn('Please configure MongoDB connection for production use');
      return null;
    }

    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.warn('\n📌 For local development without MongoDB, use this URI:');
    console.warn('mongodb://localhost:27017/wellnessai-coach\n');
    console.warn('📌 For production, set up MongoDB Atlas:');
    console.warn('https://www.mongodb.com/cloud/atlas\n');
    return null;
  }
};

export { isConnected, connectDB };
export default connectDB;

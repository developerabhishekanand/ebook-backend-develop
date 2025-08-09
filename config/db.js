import cors from "cors";
import mongoose from 'mongoose';

const connectDB = async () => {
    const MongoDBURI = process.env.MongoDBURI;
  try {
    const conn = await mongoose.connect(MongoDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
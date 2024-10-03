import mongoose from "mongoose";
import { DB_NAME } from "../constatnts.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGOOSE_URL}/${DB_NAME}`
    );
    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (error) {
    console.log("connection error : ", error);
    process.exit(1);
  }
};

export default connectDB;

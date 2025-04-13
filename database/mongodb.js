import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error("Please define  the MONGODB URI first");
}
const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to database in ${NODE_ENV} mode`);
  } catch (e) {
    console.error("Error connecting to database: ", e);
    process.exit(1);
  }
};

export default connectToDatabase;

import mongoose from "mongoose";

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
    unique: true, // Name must be unique
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Email must be unique
  },
  password: {
    type: String,
    required: true, // Password is required
  },
  AdditionalData: {
    type: String,
    required: false, // Additional data is optional
  },
});

// Create and export the User model based on the schema
export const User = mongoose.model("User", userSchema);

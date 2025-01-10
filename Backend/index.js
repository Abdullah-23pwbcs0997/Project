import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Contact from "./ContactSchema.js";

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// MongoDB connection handler
let isConnected = false;  // Track MongoDB connection status

const connectToDatabase = async () => {
  if (isConnected) {
    return; // If already connected, do nothing
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    isConnected = true;  // Mark as connected
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

// Home route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

// Contact route
app.post("/api/contact", async (req, res) => {
  try {
    await connectToDatabase(); // Ensure MongoDB is connected before proceeding

    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Generate JWT token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Create new contact
    const newContact = new Contact({ name, email });
    await newContact.save();

    res.status(200).json({ 
      message: "Contact data submitted successfully", 
      token 
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Catch-all route for unhandled paths
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Export the app as a module for Vercel
module.exports = app;

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Contact from "./ContactSchema.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// MongoDB connection handler
let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Home route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

// Contact route
app.post("/api/contact", async (req, res) => {
  try {
    await connectToDatabase();
    
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const token = jwt.sign(
      { email }, 
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

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

// Handle all other routes
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
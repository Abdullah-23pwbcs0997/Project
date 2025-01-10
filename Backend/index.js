import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Contact from "./ContactSchema.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Initialize MongoDB connection
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    cachedDb = connection;
    return cachedDb;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}
//home Route
app.get("/",async (req,res)=>{
  res.status(200).json({message:"Server is running"})
})
// Contact Route
app.post("/api/contact", async (req, res) => {
  try {
    await connectToDatabase();
    
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const token = jwt.sign(
      { email }, 
      process.env.JWT_SECRET || 'your-default-secret-key',
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

// Remove the app.listen() call as it's not needed for serverless
export default app;
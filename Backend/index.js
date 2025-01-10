import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Contact from "./ContactSchema.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const mongo_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/contact";

mongoose
  .connect(mongo_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Modified Contact Route - Generate token first, then save contact
app.post("/api/contact", async (req, res) => {
  const { name, email } = req.body;

  try {
    if (!name || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Generate JWT Token using the user's email
    const token = jwt.sign({ email }, process.env.JWT_SECRET || 'your-default-secret-key', {
      expiresIn: "1h",
    });

    // Create new contact and save it
    const newContact = new Contact({ name, email });
    await newContact.save();

    res.status(200).json({ 
      message: "Contact data submitted successfully", 
      token 
    });
  } catch (error) {
    console.error("Error registering contact:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Server started successfully");
});

export default app;
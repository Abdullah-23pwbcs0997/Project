import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken"; // Import jsonwebtoken
import dotenv from "dotenv"; // Import dotenv
import Contact from "./ContactSchema.js"; // Import Contact model

dotenv.config(); // Load environment variables from .env file

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongo_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/contact";

mongoose
  .connect(mongo_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log("MongoDB connected successfully");
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// JWT Middleware to validate token based on email
const authenticateJWT = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
    req.user = decoded; // Attach decoded token data (user email) to the request object
    next(); // Proceed to the next middleware or route handler
  });
};

// Contact Route - Collect User Contact Information and Generate JWT
app.post("/api/contact", async (req, res) => {
  const { name, email } = req.body;

  try {
    if (!name || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Generate JWT Token using the user's email
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Check if the email from the contact request matches the email in the JWT toke
    if (email !== req.user.email) {
      return res
        .status(403)
        .json({ message: "Email does not match the authenticated user" });
    }

    // Create new contact and save it
    const newContact = new Contact({ name, email });
    await newContact.save();

    res
      .status(200)
      .json({ message: "Contact data submitted successfully", token });
  } catch (error) {
    console.error("Error registering contact:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
//module.exports = app;
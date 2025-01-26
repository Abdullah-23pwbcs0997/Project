const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Contact Model
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

const Contact = mongoose.model('Contact', contactSchema);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log("MongoDB connected successfully");
        });
    })
    .catch(err => console.error(err));

// Contact Route
app.post('/api/contact', async (req, res) => {
    console.log("Inside contact controller");
    const { name, email } = req.body;

    try {
        const existingContact = await Contact.findOne({ email });
        if (existingContact) {
            return res.status(400).json({ message: 'Email already submitted' });
        }

        const newContact = new Contact({ name, email });
        await newContact.save();

        res.status(201).json({ message: 'Contact submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = app;
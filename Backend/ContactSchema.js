import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
});

// Check if the model exists before creating a new one
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
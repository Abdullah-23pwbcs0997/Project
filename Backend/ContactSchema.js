import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// Prevent mongoose from creating a new model if it already exists
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
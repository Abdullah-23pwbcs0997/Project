import mongoose from "mongoose"

const ContactSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be atleast 3 characters"]
  },
  email:{
    type: String,
    required: [true, "email is required"],
    unique: true,
    match: [/\S+@\S+\.\S+/, "Use a valid email"]
  }
})

export default mongoose.model("contact", ContactSchema)
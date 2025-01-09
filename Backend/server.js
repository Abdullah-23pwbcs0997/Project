import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import User from './ContactSchema.js'

const app = express()
const PORT = 5000

//middleware
app.use(express.json())
app.use(cors())

const mongo_URI = "mongodb://localhost:27017/contact"

mongoose.connect(mongo_URI).then(()=>console.log("database connected")).catch((err)=>console.error("database not connected",err))

//routes
app.post("/contact", async(req, res)=>{
  console.log('data from frontend:', req.body)
  const {name, email} = req.body
  try {
    if(!name || !email){
      return res.status(400).json({message:"All feilds are required"})
    }
    const user = new User({name, email})
    await user.save();
    res.status(200).json({message:"Data Sent Successfully"})
  } catch (error) {
    console.error("Error registering", error.message)
    res.status(500).json({message:"Try using different credentials"})
  }
})

app.listen(PORT, console.log(`server is listening on port ${PORT}`))
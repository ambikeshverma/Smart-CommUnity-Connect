import mongoose from 'mongoose'
const gigSchema = new mongoose.Schema({
  title: String,
  catagory: String,
  description: String,
  location:String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  roleAtPosting: { type: String, enum: ["seeker", "provider"] }, // user’s role when posting
}, { timestamps: true });
export default mongoose.model('Gig', gigSchema)
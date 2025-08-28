import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  gig: { type: mongoose.Schema.Types.ObjectId, ref: "Gig" },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },// provider who sent request
  senderRole: { type: String, enum: ["seeker", "provider"], required: true },  
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },// seeker who owns the gig
  receiverRole: { type: String, enum: ["seeker", "provider"], required: true }, 
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" }
}, { timestamps: true });


export default mongoose.model('Request', requestSchema);
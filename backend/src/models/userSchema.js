import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  currentRole: { type: String, enum: ["seeker", "provider"], default: "seeker" },
  // optional: store permanent capabilities
  roles: [{ type: String, enum: ["seeker", "provider"] }]
}, { timestamps: true });

export default mongoose.model('User', userSchema);
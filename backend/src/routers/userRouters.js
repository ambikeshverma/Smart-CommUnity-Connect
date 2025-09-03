import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
import createdUser from '../models/userSchema.js';
import authMiddleware from '../middlewares/auth_middlware.js';


const JWT_SECRET = process.env.JWT_SECRET;
const router = express.Router();


router.post('/register',async (req, res) => {
  try {
    const { name, email, password,} = req.body;

    // Check if user already exists
    const existingUser = await createdUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await createdUser.create({
        name,   
        email,
        password:hashedPassword,
        currentRole: undefined,
        roles: "seeker"
    });
    
   res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({message: err.message || "Server error" });
  }

})

router.post('/login',async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await createdUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "4h" });

    res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message || "Server error"});
  }
})

router.get("/verify",authMiddleware, (req, res) => {
  res.json({ message: "Token is valid", user: req.user });
});

//role Update

router.patch("/roleUpdate",authMiddleware, async (req, res) => {
  try {
    const { role } = req.body; // "seeker" or "provider"

    if (!["seeker", "provider"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    // update currentRole in database
    const user = await createdUser.findByIdAndUpdate(
      req.user.id,
      { currentRole: role },
      { new: true } // return updated user
    );

    res.json({ message: "Role updated", currentRole: user.currentRole });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
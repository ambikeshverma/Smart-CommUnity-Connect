import express from 'express';
import createdGig from '../models/gigSchema.js';
import createdUser from '../models/userSchema.js';
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({message:"Gig Router is working"})
})
router.post('/createGig',async (req,res)=>{
    const{title,catagory,description} = req.body;
    const userId = req.user.id;
     const sender = await createdUser.findById(userId);
        if (!sender) return res.status(404).json({ message: "User not found" });
    try{
    const newGig = await createdGig.create({
        title,
        catagory,   
        description,
        postedBy:sender._id,
        roleAtPosting :sender.currentRole  
    });
      res.status(201).json(newGig);
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
})

export default router;
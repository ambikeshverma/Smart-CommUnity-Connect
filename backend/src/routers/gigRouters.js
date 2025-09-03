import express from 'express';
import createdGig from '../models/gigSchema.js';
import createdUser from '../models/userSchema.js';
const router = express.Router();


router.post('/createGig',async (req,res)=>{
    const{title,catagory,description,location} = req.body;
    const userId = req.user.id;
     const sender = await createdUser.findById(userId);
        if (!sender) return res.status(404).json({ message: "User not found" });
    try{
    const newGig = await createdGig.create({
        title,
        catagory,   
        description,
        location,
        postedBy:sender._id,
        roleAtPosting :sender.currentRole  
    });
      res.status(201).json(newGig);
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
});

router.get("/allGig",async(req,res)=>{
   const catagory = req.query.catagory;
    const userId = req.user.id;
     const sender = await createdUser.findById(userId);
        if (!sender) return res.status(404).json({ message: "User not found" });
        const role= sender.currentRole;
        const oposition = (role==="seeker"?"provider":"seeker")
        try{
           const allGig = await createdGig.find({catagory:catagory,roleAtPosting:oposition}).populate('postedBy')
           res.status(200).json({allGig})
        }catch(error){
        res.status(500).json({message:error.message})
        }
})

router.get("/getAll/postedGig",async(req,res)=>{
    try{
       const userId = req.user.id; // logged in user
          const sender = await createdUser.findById(userId);
          if(!sender) return res.status(404).json({message:"User not found"})
          const role = sender.currentRole;
         const allPostedGig = await createdGig.find({postedBy:userId,roleAtPosting:role});
          res.status(200).json({allPostedGig})
    } catch(error){
    res.status(500).json({message:error.message})
    }
})

export default router;
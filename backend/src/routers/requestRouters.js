import express from 'express'
import createdRequest from '../models/requestSchema.js'
import createdGig from '../models/gigSchema.js'; 
import createdUser from '../models/userSchema.js';  
import e from 'express';
const router = express.Router();

router.get('/getAllSent',async (req,res)=>{
  try{
   const userId = req.user.id; // logged in user
   const sender = await createdUser.findById(userId);
   if(!sender) return res.status(404).json({message:"User not found"})
   const role = sender.currentRole; // dynamic role of logged-in user
    const sentRequests = await createdRequest.find({sender:userId,senderRole:role}).populate('gig').populate('receiver','name email');
  res.status(200).json({sentRequests})
  }
  catch(err){
    res.status(500).json({error:err.message})
  }
})

router.get('/getAllReceived',async (req,res)=>{
  try{
   const userId = req.user.id; // logged in user
   const receiver = await createdUser.findById(userId);
   if(!receiver) return res.status(404).json({message:"User not found"})
   const role = receiver.currentRole; // dynamic role of logged-in user
    const receivedRequests = await createdRequest.find({receiver:userId,receiverRole:role}).populate('gig').populate('sender','name email');
  res.status(200).json({receivedRequests})
  }
  catch(err){
    res.status(500).json({error:err.message})
  }
})

router.post("/sendRequest/:gigId", async (req, res) => {
  try {
    const { gigId } = req.params;
    const userId = req.user.id; // logged in user (sender)

    // Find the gig being requested
    const gig = await createdGig.findById(gigId).populate("postedBy");
    if (!gig) return res.status(404).json({ message: "Gig not found" });

    // Sender details
    const sender = await createdUser.findById(userId);
    if (!sender) return res.status(404).json({ message: "User not found" });

    // Create new request    
    const newRequest = await createdRequest.create({
        gig: gig._id,
      sender: sender._id,
      senderRole: sender.currentRole,        // <- dynamic role of logged-in user
      receiver: gig.postedBy._id,
      receiverRole: gig.roleAtPosting,       // <- role when gig was posted
      status: "pending"
    });
      res.status(201).json({ message: "Request sent", newRequest });
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
})


router.patch("/:id", async (req, res) => {
  try {
    const { status } = req.body; 
    const { id } = req.params;

    if (!["accepted", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }


    const request = await createdRequest.findById(id);

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

  
    if (request.receiver.toString() !== req.user.`id.toString()) {
      return res.status(403).json({ message: "Not authorized to update this request" });
    }

    request.status = status;
    await request.save();

    res.json({ message: `Request ${status}`, request });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});




export default router;
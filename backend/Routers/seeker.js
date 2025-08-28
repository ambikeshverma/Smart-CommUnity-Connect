import express from 'express';
import createdUser from '../src/models/userschema.js';
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({message:"Seeker Router is working"})
})

router.post('/createUser',(req,res)=>{
    const{name,email,password,currentRole,roles} = req.body;
    try{
    const newUser = createdUser.create({
        name,   
        email,
        password,
        currentRole,
        roles
    });
    //console.log(newUser);
    res.status(201).json(newUser);
    }
    catch(err){
        res.status(500).json({error:"Server error"})
    }
})

export default router;
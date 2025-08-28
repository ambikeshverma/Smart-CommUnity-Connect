import express from 'express'
import userRouter from "./routers/userRouters.js"
import gigRouter from "./routers/gigRouters.js"
import requestRouter from "./routers/requestRouters.js"
import authMiddleware from './middlewares/auth_middlware.js'
import connectDB from './config/database.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express(); 
app.use(express.json());
connectDB();


app.use('/user',userRouter)
app.use('/gig',authMiddleware,gigRouter);
app.use('/request',authMiddleware,requestRouter)



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`); 
  

})
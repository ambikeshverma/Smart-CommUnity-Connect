import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Form.css'
const Form = () => {
    const [title,settitle] = useState("");
    const [catagory,setcatagory] = useState("");
    const [description,setdescription] = useState("");
    // const [success, setSuccess] = useState("");
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(title,catagory,description);
        try {
             await axios.post(
           `http://localhost:3000/gig/createGig`,
           {
           title,
           catagory,
           description
            }
        );
        settitle("");
      setcatagory("");
      setdescription("");
     // setSuccess("New Gig is created successfully!");

        
    }catch (error) {
      console.error("Error during creating Gig:", error.message|| error);
    }
}
  return (
    <>
    <div className="container1">
            <form action="" onSubmit={handleSubmit}>
            <h1>Post Gig</h1>
            <div className="inputBox">
                <label htmlFor="">Title</label>
                <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} placeholder='Enter title here' required/>
                <label htmlFor="">Catagory</label>
                <select value={catagory} onChange={(e)=>{setcatagory(e.target.value)}} className='catagory' name="" id="">
                    <option value="">-- select catagory --</option>
                    <option value="Blood donation">Blood donation</option>
                    <option value="Book donation">Book donation</option>
                    <option value="Food & Nutrition">Food & Nutrition</option>
                    <option value="Clothes & Accessories">Clothes & Accessories</option>
                    <option value="Education & Skill Development">Education & Skill Development</option>
                    <option value="Health & Wellness">Health & Wellness</option>
                    <option value="Environment & Sustainability">Environment & Sustainability</option>
                    <option value="Community Service">Community Service</option>
                </select>
                <label htmlFor="">Description</label>
                <textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} name="" id="" cols="30" rows="10" required="required"></textarea>
                <div className="buttons">
                    <button className='cancel'>Cancel</button>
                    <button className="post">Post Request</button>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default Form
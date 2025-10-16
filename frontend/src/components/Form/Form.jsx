import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Form.css'
import { toast } from 'react-toastify'
const Form = ({isOpenPostForm,isClosePostForm}) => {
    const [title,settitle] = useState("");
    const [catagory,setcatagory] = useState("");
    const [description,setdescription] = useState("");
    const [location, setLocation] = useState("")
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
           await axios.post(
           `${import.meta.env.VITE_BACKEND_URL}/gig/createGig`,
           {
           title,
           catagory,
           description,
           location
            },
             {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
         }
        );
        settitle("");
      setcatagory("");
      setdescription("");
      setLocation("");
      isClosePostForm(false)
     toast.success("New Gig is created successfully!");

        
    }catch (error) {
      if(error.response && error.response.data && error.response.data.message)
      toast.error(error.response.data.message)
    }
}
if(!isOpenPostForm) return null
  return (
    <>
    <div className="container1" onClick={isClosePostForm}>
            <form action="" onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
            <h1>Post Gig</h1>
            <div className="inputBox">
                <label htmlFor="">Title</label>
                <input type="text" maxLength={25} value={title} onChange={(e)=>{settitle(e.target.value)}} placeholder='Enter title here' required/>
                <label htmlFor="">Catagory</label>
                <select value={catagory} onChange={(e)=>{setcatagory(e.target.value)}} className='catagory' name="" id="">
                    <option value="">-- select catagory --</option>
                    <option value="Blood donation">Blood donation</option>
                    <option value="Book donation">Book donation</option>
                    <option value="Food & Nutrition">Food & Nutrition</option>
                    <option value="Clothes & Accessories">Clothes & Accessories</option>
                    <option value="Education & Skill Development">Education & Skill Development</option>
                    <option value="Local Workers">Local Workers</option>
                    <option value="Job Assistance">Job Assistance</option>
                    <option value="Community Service">Community Service</option>
                </select>
                <label htmlFor="">Location</label>
                <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='Enter your location' />
                <label htmlFor="">Description</label>
                <textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} name="" id="" cols="30" rows="10" required="required" maxLength={150}></textarea>
                <div className="buttons">
                    <button className='cancel' type='button' onClick={isClosePostForm}>Cancel</button>
                    <button className="post" type='submit'>Post Request</button>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default Form
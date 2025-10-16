import React from 'react'
import './Card.css'
import { toast } from 'react-toastify'
import axios from 'axios'

const Card = (props) => {
    const handleRequest = async(gigId)=>{
        try{
          const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/request/sendRequest/${gigId}`,
            {},
            {
              headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            }
          )
          toast.success(response.data.message)
        }catch(error){
          if (error.response?.data?.message) {
            toast.error(error.response.data.message);
          }
        }
      }
  return (
    <>
    <div class="card">
        <img class="cover" src="/src/assets/Cover photo.jpg" alt="" />
        <h3 class="desc">{props.description}</h3>
        <div className="titleRating">
            <h2>{props.title}</h2>
            <span>
                <img src="/src/assets/rating image.png" alt="" width="20px" />
                <p>4.5</p>
            </span>
        </div>
        <div className="profile">
            <img src="/src/assets/Profile photo.jpg" alt="" width="60px" />
            <div>
                <h3>{props.postedBy.name}</h3>
                <h6 className='sender-location'>{props.location}</h6>
            </div>
            
        </div>
        <div className="buttons">
            <button class="bt1">View Profile</button>
            <button class="bt2" onClick={()=>handleRequest(props._id)}>Add</button>
        </div>
    </div>
    </>
  )
}

export default Card
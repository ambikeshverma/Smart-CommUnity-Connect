import React from 'react'
import './card.css'
import { useNavigate } from "react-router-dom";
export default function Cards({img, title, description, catagory}) {
  const navigate = useNavigate();
  return (
    <>
    <div className='card1'>
      <div className='img-container'>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="a" onClick={()=>navigate(`/category-wise-gig/${catagory}`)}>Explore</div>
    </div>
    </>
  )
}

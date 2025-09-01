import React from 'react'
import './card.css'
export default function Cards({img, title, description, link}) {
  return (
    <>
    <div className='card'>
      <div className='img-container'>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>Explore category- </a>
    </div>
    </>
  )
}

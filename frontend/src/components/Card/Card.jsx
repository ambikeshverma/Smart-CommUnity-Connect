import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <>
    <div class="card">
        <img class="cover" src="/src/assets/Cover photo.jpg" alt="" />
        <h3 class="desc">I want to help as a developer who neend the most</h3>
        <div className="titleRating">
            <h2>Web Developer</h2>
            <span>
                <img src="/src/assets/rating image.png" alt="" width="20px" />
                <p>4.5</p>
            </span>
        </div>
        <div className="profile">
            <img src="/src/assets/Profile photo.jpg" alt="" width="60px" />
            <h3>Ambikesh</h3>
        </div>
        <div className="buttons">
            <button class="bt1">View Profile</button>
            <button class="bt2">Add</button>
        </div>
    </div>
    </>
  )
}

export default Card
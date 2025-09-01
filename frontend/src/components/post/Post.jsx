import React from 'react'
import './post.css'

export default function Post() {
  return (
      <>
        <div class="cantainer">
        <div class="card_cantainer">
            <div class="Cantent">
                <h3>My Posts</h3>
            </div>
            <div class="Card Upper_content">
                <div class="Cantent1">
                    <div class="Card heading">
                        <h3>Frontend devloper Position Available</h3>
                    </div>
                    <div class="Card para">
                        <p class="para_content">Looking for best React.js and frontend developer. Great opportuneti for growth & development. </p>
                    </div>
                    <div class="Card Date_job">
                        <div class="data"><span class="date"><i class="fa-solid fa-calendar"></i></span><span class="date">1/15/2024</span></div>
                        <div class="data"><span class="description"><i class="fa-solid fa-location-dot"></i></span><span class="description">Luckhnow</span>
                        </div>
                        <div class="data">
                            <p id="job">Jobs</p>
                        </div>
                    </div>
                    <div class="Card_LastElement">
                        <button class="last_cantent last_cantent1 "><span class="LastF"><i class="fa-solid fa-eye"></i></span><span class="LastF"
                                id="Last1">View Requests</span><span class="LastF">(5)</span></button>
                        <button class="last_cantent last_cantent2"><span class="edit_post post1"><i class="fa-solid fa-user-pen"></i></span><span
                                class="edit_post post2">Edit post</span></button>
                    </div>
                </div>
                <div class="active">
                    <p id="para1">Active</p>
                    <p id="para2">js 5 Employes</p>
                </div>
            </div>

        </div>
    </div>
      </>
  )
}

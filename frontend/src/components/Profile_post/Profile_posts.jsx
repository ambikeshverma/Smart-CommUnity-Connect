import React from "react"


import Style from "./profile_post.module.css";


export default function Profile_posts({post}) {
 

 
  return (
    <>
      <div className={Style.profile_posts_container}>
        <img src="/assets/Cover photo.jpg" alt="Profile" />
    
            <div key={post.id} className={Style.post_card}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className={Style.con}>
              <p>{post.location}</p>
              <p>{new Date(post.createdAt).toLocaleDateString()}</p>
              </div>
              <button className={Style.request_button}>View Requests</button>
            </div> 
      </div>
    </>
  );
}

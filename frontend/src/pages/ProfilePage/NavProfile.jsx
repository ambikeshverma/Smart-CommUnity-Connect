import React from 'react'
import './NavProfile.css'

import { useContext, useEffect, useState } from "react";
import axios from "axios";
// adjust import path
import { toast } from "react-toastify";


import Profile_posts from '../../components/Profile_post/Profile_posts';
import { UserType } from '../../components/Context/UserTypeContext';

const NavProfile = () => {
   
   const { userType } = useContext(UserType); // get current role from context
   const [posts, setPosts] = useState([]);
   const [isOpenPost, setIsOpenPost] = useState(false);

   useEffect(() => {
      const fetchPosts = async () => {
        try {
          const res = await axios.get(
            "http://localhost:3000/gig/getAll/postedGig",
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          console.log(res.data.allPostedGig);
          setPosts(res.data.allPostedGig || []);
        } catch (err) {
          console.error("Error fetching posts:", err);
          toast.error(err.response?.data?.message || "Failed to load posts");
          setPosts([]);
        }
      };
  
      fetchPosts();
    }, [userType]); // re-run when userType changes
  


  return (
    <>
      <div className="post_list">
        <div className="profileNav">
         <li onClick={() => setIsOpenPost(!isOpenPost)}>Posts</li>
         <li>Requests</li>
         <li>Friends</li>
         <li>About</li>
        </div>

        <div style={{display:"flex",width:"100%",gap:"10px",flexWrap:"wrap"}}>
        {isOpenPost && (
           (posts.length > 0) ? 
            posts.map((post) => ( <Profile_posts key={post.id} post={post}/> )) : 
          <p style={{ textAlign: "center", marginTop: "20px", color: "gray" }}>
           <b>No posts found for role </b><b>{userType}</b>
          </p>
           )}
        
         </div>

       </div>

    </>
    )
}

  

    

export default NavProfile
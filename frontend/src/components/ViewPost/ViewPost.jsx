import React  from 'react'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {UserType} from "../Context/UserTypeContext"; // adjust import path
import { toast } from "react-toastify";
import './ViewPost.css'
import Request from '../Request/Request';
import Loader from '../Loading/Loader';

const ViewPost = ({ isOpen, onClose }) => {
  const { userType } = useContext(UserType); // get current role from context
  const [posts, setPosts] = useState([]);
  const [isOpenRequestPostWise, setIsOpenRequestPostWise] = useState(false)
  const [selectedGigId, setSelectedGigId] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isOpen) return; // only fetch when modal is open

    const fetchPosts = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/gig/getAll/postedGig`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setPosts(res.data.allPostedGig || []);
      } catch (err) {
        console.error("Error fetching posts:", err);
        toast.error(err.response?.data?.message || "Failed to load posts");
        setPosts([]);
      }finally{
        setLoading(false)
      }
    };

    fetchPosts();
  }, [userType, isOpen]); // re-run when userType changes OR modal opens

  if (!isOpen) return null;
  
  return (
    <>
    <div className="modelOverlay" onClick={onClose}>
        <div className="model" onClick={e => e.stopPropagation()}>
            <div class="Cantent">
                <h3>My Posts</h3>
                <button className='closing-model-cross' onClick={onClose}>✖</button>
            </div>
            {loading ? <Loader></Loader>: 
             posts.length === 0 ?(
          <p style={{ textAlign: "center", marginTop: "20px", color: "gray" }}>
            No posts found for role <b>{userType}</b>
          </p>
        ):
            (
          posts.map((post) => (
            <div class="Card Upper_content">
                <div class="Cantent1">
                    <div class="Card heading">
                        <h3>{post.title}</h3>
                    </div>
                    <div class="Card para">
                        <p class="para_content">{post.description}</p>
                    </div>
                    <div class="Card Date_job">
                        <div class="data"><span class="date"><i class="fa-solid fa-calendar"></i></span><span class="date">{new Date(post.createdAt).toLocaleDateString()}</span></div>
                        <div class="data"><span class="description"><i class="fa-solid fa-location-dot"></i></span><span class="description">{post.location}</span>
                        </div>
                        <div class="data">
                            <p id="job">Jobs</p>
                        </div>
                    </div>
                    <div class="Card_LastElement">
                        <button  onClick={()=>{setIsOpenRequestPostWise(true); setSelectedGigId(post._id);}} class="last_cantent last_cantent1 "><span class="LastF"><i class="fa-solid fa-eye"></i></span><span class="LastF"
                                id="Last1" >View Requests</span><span class="LastF">(5)</span></button>
                                <Request isOpenRequestPostWise={isOpenRequestPostWise} isCloseRequestPostWise={()=>setIsOpenRequestPostWise(false)} gigId={selectedGigId}></Request>
                        <button class="last_cantent last_cantent2"><span class="edit_post post1"><i class="fa-solid fa-user-pen"></i></span><span
                                class="edit_post post2">Edit post</span></button>
                    </div>
                </div>
                <div class="active">
                    <p id="para1">Active</p>
                    <p id="para2">js 5 Employes</p>
                </div>
            </div>
               ))
        )}
        </div>
    </div>
    
    </>
  )
}

export default ViewPost
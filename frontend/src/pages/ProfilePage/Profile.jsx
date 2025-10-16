import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserType } from "../../components/Context/UserTypeContext";
import axios from "axios";
import "./Profile.css";
import NavProfile from "./NavProfile";
const Profile = () => {

       const { userType } = useContext(UserType); // get current role from context
       const [user, setUser] = useState([]);
  useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await axios.get(
              `${import.meta.env.VITE_BACKEND_URL}/user/getUser`,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
            setUser(res.data);
          } catch (err) {
            console.error("Error fetching posts:", err);
            toast.error(err.response?.data?.message || "Failed to load posts");
            setUser("");
          }
        };
    
        fetchUser();
      }, [userType]);

  return (
    <div className="profilePage">
      <div className="profile-cover"></div>
      <div className="profile1">
        <div className="image-data">
          <div className="profile-image">
            <img src="/src/assets/Profile.jpg"  alt="" />
          </div>
          <div className="data">
            <div className="user-name">{user.name}</div>
            <div className="user-bio">
             {`Hey I'm ${user.name} and my current role is ${user.currentRole}`}
            </div>
            <div className="user-buttons">
              <button className="user-button btn1">Follow</button>
              <button className="user-button btn2">Get In touch</button>
            </div>
          </div>
        </div>
        <div className="following-data">
          <div className="star-rating">
            <div className="star str1">26</div>
            <div className="star str2">6</div>
            <div className="star str3">12</div>
          </div>
          <div className="followers-cube">
            <div className="small-cube">
              <h5>Followers</h5>
              <h1>2531</h1>
            </div>
            <div className="small-cube">
              <h5>Following</h5>
              <h1>132</h1>
            </div>
            <div className="small-cube">
              <h5>Likes</h5>
              <h1>548</h1>
            </div>
          </div>
        </div>
      </div>
      <NavProfile></NavProfile>
    </div>
  );
};

export default Profile;

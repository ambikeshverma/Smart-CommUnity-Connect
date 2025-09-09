import React from "react";
import "./Profile.css";
import NavProfile from "./NavProfile";
const Profile = () => {
  return (
    <div className="profilePage">
      <div className="profile-cover"></div>
      <div className="profile1">
        <div className="image-data">
          <div className="profile-image">
            <img src="/src/assets/Profile.jpg"  alt="" />
          </div>
          <div className="data">
            <div className="user-name">Ambikesh Verma</div>
            <div className="user-bio">
              Hey I'm a Web developer and specially backend developer in using
              MERN stack technology
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

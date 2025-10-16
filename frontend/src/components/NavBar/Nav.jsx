import React, { useState } from "react";
import UserTypeToggle from "../UserType/UserTypeToggle";
import { useNavigate } from "react-router-dom"; 
import "./nav.css";
import ViewPost from "../ViewPost/ViewPost";
import ViewRequest from "../ViewRequest/ViewRequest";
import Form from "../Form/Form"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModelOpenRequest,setIsModelOpenRequest] = useState(false)
  const [isOpenPostForm, setIsOpenPostForm] = useState(false)
  const navigate = useNavigate();

   const handleLogout = () => {
    localStorage.removeItem("token");
     navigate("/login") // redirect after logout
  };

  return (
    <>
      <div className="navbar">
        {/* Logo + Title */}
        <div className="logo">
          <img src="/src/assets/logo.jpg" width="60px" alt="logo" />
          <div className="title">
            <h1 className="titleHeading">CommUnity Connect</h1>
            <p>Helping communities thrive together</p>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="buttonsBox">
          <img className="bell" src="/src/assets/Bell icon.png" onClick={()=>setIsModelOpenRequest(true)} width="25px" alt="bell" />
          <ViewRequest  isOpenRequest={isModelOpenRequest} onCloseRequest={()=>setIsModelOpenRequest(false)}></ViewRequest>

          <div className="postBox">
            <img src="/src/assets/document.png" width="20px" alt="post" />
            <h5 onClick={() => setIsModalOpen(true)}>My Posts</h5>
            <ViewPost isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></ViewPost>
          </div>

          <div className="toggleBox">
            <div className="seekerBox">
              <img src="/src/assets/person.png" width="30px" className="pt-2" alt="seeker" />
              <h4>I'm seeking help</h4>
            </div>
            <UserTypeToggle />
            <div className="helperBox">
              <img src="/src/assets/hand.png" width="30px" alt="helper" />
              <h4>I want to help</h4>
            </div>
          </div>

          <button className="postRequestBtn">
            <span>+</span>
            <span className="pl-2" onClick={()=>setIsOpenPostForm(true)}>Post Request</span>
            <Form isOpenPostForm={isOpenPostForm} isClosePostForm={()=>setIsOpenPostForm(false)}></Form>
          </button>
          <button className="logout" onClick={handleLogout}>Logout</button>
          <div className="Profile10" onClick={() => navigate("/profile")}>
          <img src="/src/assets/Profile.jpg" width="50px" alt="Profile" />
        </div>
        </div>

        {/* Hamburger (mobile only) */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Sidebar (for mobile) */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="closeBtn" onClick={() => setIsOpen(false)}>✖</button>

        <img className="bell" src="/src/assets/Bell icon.png" onClick={()=>setIsModelOpenRequest(true)} width="25px" alt="bell" />
          <ViewRequest  isOpenRequest={isModelOpenRequest} onCloseRequest={()=>setIsModelOpenRequest(false)}></ViewRequest>

        <button className="postBox" onClick={() => setIsModalOpen(true)}>
              <ViewPost isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></ViewPost>
          <img src="/src/assets/document.png" width="20px" alt="post" />
          <h5>My Posts</h5>
        </button>

        <div className="toggleBox">
          <div className="seekerBox">
            <img src="/src/assets/person.png" width="30px" alt="seeker" />
            <h4>I'm seeking help</h4>
          </div>
          <UserTypeToggle />
          <div className="helperBox">
            <img src="/src/assets/hand.png" width="30px" alt="helper" />
            <h4>I want to help</h4>
          </div>
        </div>

        <button className="postRequestBtn">
          <span>+</span>
          <span className="pl-2">Post Request</span>
        </button>
        <button className="logout" onClick={handleLogout}>Logout</button>
        
      </div>
    </>
  );
};

export default Nav;

import React from "react";
import UserTypeToggle from "../UserType/UserTypeToggle";

const Nav = () => {
  
  return (
    <div className="width-full h-16 bg-white flex justify-between items-center px-4 shadow-md">
      <div className="flex items-center gap-2">
        <img src="/src/assets/logo.jpg" width="80px" alt="" />
        <div>
          <h1 className="text-2xl font-bold">CommUnity Connect</h1>
          <p className="text-gray-600">Helping communities thrive together</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <img src="/src/assets/Bell icon.png" width="25px" alt="wait" />
        <div className="flex items-center gap-3 rounded-md border-gray-500 border px-4 py-1 shadow-md">
          <img src="/src/assets/document.png" width="20px" alt="" />
          <h5>My Posts</h5>
        </div>
        <div className="flex  gap-2 rounded-md border-gray-500 border px-4 py-1 shadow-md">
          <div className="flex items-center gap-2 ">
            <img
              src="/src/assets/person.png"
              width="30px"
              className="pt-2"
              alt="wait"
            />
            <h4>I'm seeking help</h4>
          </div>
          <UserTypeToggle />
          <div className="flex items-center gap-2">
            <img src="/src/assets/hand.png" width="30px" alt="" />
            <h4>I want to help</h4>
          </div>
        </div>
         <button className="flex items-center bg-orange-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-700 transition-colors duration-300">
        <span>+</span>
        <span className="pl-2">Post Request</span>
      </button>
      </div>
    </div>
  );
};

export default Nav;

import React, { useContext } from "react";
import {UserType} from "../Context/UserTypeContext";

export default function UserTypeToggle() {
  const {userType,  updateUserType } = useContext(UserType)
  const isSeeker = userType === "seeker";

  const toggleRole = () => {
     const newType = userType === "seeker" ? "provider" : "seeker";
    updateUserType(newType);
  };

  return (
    <button
      onClick={toggleRole}
      className={`relative w-27 h-9 rounded-full transition-colors duration-300 cursor-pointer
        ${isSeeker ? "bg-blue-200" : "bg-green-200"}`}
    >
      {/* Knob */}
      <span
         className={`absolute top-1 w-7 h-7 rounded-full bg-white shadow-md
    transition-all duration-500 ease-in-out
    ${isSeeker ? "left-1" : "left-[calc(100%-2rem)]"}`}
      />

      {/* Dynamic Label (always beside knob) */}
      <span
        className={`absolute top-1 h-7 flex items-center text-sm font-semibold transition-all duration-500 cursor-pointer
          ${isSeeker ? "left-10 text-blue-600" : "right-10 text-green-600"}`}
      >
        {isSeeker ? "Seeker" : "Provider"}
      </span>
    </button>
  );
}

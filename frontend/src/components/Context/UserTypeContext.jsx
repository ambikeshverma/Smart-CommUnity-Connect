import React, { createContext } from 'react'
import { useState } from 'react'
import axios from 'axios';
import {toast } from 'react-toastify';

export const UserType = createContext(); 

const UserTypeContext = ({children}) => {
    const [userType, setUserType] = useState("seeker");
    const updateUserType = async (newType) => {
    try {
      setUserType(newType); // update local state first

      // API call (no userId needed)
      const res = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/user/roleUpdate`,
        { role: newType },
        // { withCredentials: true } // ensure cookies/token are sent
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
         }
      );
     toast.success(`Role Updated! Current Role is ${res.data.currentRole}`)
      
    } catch (err) {
      if(err.response && err.response.data && err.response.data.message)
      console.error("Error updating userType:", err.response?.data || err);
     toast.error(err.response.data.message);
    }
  };
  return (
    <div>
        <UserType.Provider  value={{ userType, updateUserType }}>
            {children}
        </UserType.Provider>
    </div>
  )
}

export default UserTypeContext

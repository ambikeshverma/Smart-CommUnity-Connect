import React, { createContext } from 'react'
import { useState } from 'react'

export const UserType = createContext(); 

const UserTypeContext = ({children}) => {
    const [userType, setUserType] = useState("seeker");
  return (
    <div>
        <UserType.Provider value={{ userType, setUserType }}>
            {children}
        </UserType.Provider>
    </div>
  )
}

export default UserTypeContext

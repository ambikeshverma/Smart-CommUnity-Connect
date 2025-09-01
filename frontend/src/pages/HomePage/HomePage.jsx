import { useContext, useEffect } from 'react'
import { UserType } from '../../components/Context/UserTypeContext'
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/NavBar/Nav'
import axios from 'axios' 



const HomePage = () => {
    const {userType} = useContext(UserType)
     const navigate = useNavigate();

    useEffect(() => {
     
      const token = localStorage.getItem("token");
      const verifyToken = async () => {
        try {
          const response  = await axios.get('http://localhost:3000/user/verify', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.log('Protected data:', response.data);
        } catch (error) {
          console.error('Error accessing protected route:', error);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
        }
 
      }
      verifyToken();

    } , [navigate]);
    

    

  return (
    <>
    <Nav></Nav>
    </>
  )
}

export default HomePage
import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import Catagory from './pages/CatagoryPage/Catagory'
import Registration from './pages/RegistrationPage/Registration'
import Login from './pages/LoginPage/Login'
import { Routes,Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRotes/ProtectedRoute'
import Profile from './pages/ProfilePage/Profile'
import Loader from './components/Loading/Loader'



const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Registration/>} />
      <Route path='/' element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
      <Route path='/category-wise-gig/:catagory' element={<ProtectedRoute><Catagory/></ProtectedRoute>} />
      <Route path='/profile' element={<ProtectedRoute><Profile></Profile></ProtectedRoute>} />
      <Route path='/loader' element={<Loader></Loader>} />
    </Routes>

  )
}
export default App
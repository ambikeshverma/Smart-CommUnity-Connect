import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import Catagory from './pages/CatagoryPage/Catagory'
import Form from './components/Form/Form'
import Registration from './pages/RegistrationPage/Registration'
import Login from './pages/LoginPage/Login'
import { Routes,Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRotes/ProtectedRoute'



const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Registration/>} />
      <Route path='/' element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
      <Route path='/category' element={<Catagory/>} />
      <Route path='/post' element={<Form/>} />
     </Routes>

  )
}
export default App
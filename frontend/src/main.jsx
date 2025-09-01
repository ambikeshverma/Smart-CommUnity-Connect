import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import UserTypeContext from './components/Context/UserTypeContext.jsx'
import UserTypeToggle from './components/UserType/UserTypeToggle.jsx'
import { ToastContainer} from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <UserTypeContext>
           <App /> 
           <ToastContainer autoClose={3000}/>  
       </UserTypeContext> 
    </BrowserRouter>
  </StrictMode>,
)

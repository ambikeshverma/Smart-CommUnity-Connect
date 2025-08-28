import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserTypeContext from './components/Context/UserTypeContext.jsx'
import UserTypeToggle from './components/UserType/UserTypeToggle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserTypeContext>
         <App />   
    </UserTypeContext> 
  </StrictMode>,
)

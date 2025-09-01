import React  from 'react'
import './ViewPost.css'

const ViewPost = ({ isOpen, onClose }) => {
   if (!isOpen) return null;
  
  return (
    <>
    <div className="modelOverlay" onClick={onClose}>
        <div className="model">

        </div>
    </div>
    
    </>
  )
}

export default ViewPost
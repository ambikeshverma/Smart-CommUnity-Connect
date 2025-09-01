import React from 'react'
import './ViewRequest.css'

const ViewRequest = ({ isOpenRequest, onCloseRequest }) => {
  return (
    <>
      <div
        className={`modelOverlayRequest ${isOpenRequest ? "show" : ""}`}
        onClick={onCloseRequest}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`sideBar ${isOpenRequest ? "open" : ""}`}
        >
          <div className="button2">
            <div className="bars" onClick={onCloseRequest}>
              <div className="bar1"></div>
              <div className="bar2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewRequest
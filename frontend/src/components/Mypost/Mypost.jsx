import React from 'react'
import './mypost.css'

export default function Mypost() {
  return (
    <>
       <div className="Body_container-2" style={{height: "300px"}}>
        <div className="Heading-2">Mangage Request - Frontend Developer Position Availaable</div>
        <div className="Request_Card-2">
            <div className="Field_Name-2" id="Image-2">
                <img src="beack.jpg" alt=""/>
            </div>
            <div className="Field_Name-2" id="Name_cantent-2">
                <div className="Child_Name-2">
                    <span className="Person_name-2" id="Child_Name-2">John Smith</span><span className="Person_name-2" id="Ratting"><span id="icon-2"><i className="fa-duotone fa-solid fa-star"></i></span>
                        4.5</span>
                </div>
                <div class="Child_Name-2">
                    <p id="para11">Hi! i have 3 years of React experience and would love to join your team.</p>
                </div>
                <div className="Child_Name-2">
                    <div className="query Color1"><span className="Accept"></span><span className="Accept">Accept</span></div>
                    <div className="query Color2"> <span className="Reject"></span><span className="Reject">Reject</span></div>
                </div>
            </div>
            <div className="Field_Name-2" id="Status_card-2">
                <div className="Status" id="Status1">Rejected</div>
                <div className="Status" id="Status2"></div>
                <div className="Status" id="Status3">1/16/2024</div>
            </div>


        </div>

    </div>
    </>
  )
}

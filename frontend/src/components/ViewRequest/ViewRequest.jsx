import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewRequest.css";

const ViewRequest = ({ isOpenRequest, onCloseRequest }) => {
  const [sentRequests, setSentRequests] = useState([]);

  // Fetch sent requests when sidebar opens
// Fetch sent requests when sidebar opens
useEffect(() => {
  if (isOpenRequest) {
    const fetchSentRequests = async () => {
      try {
        const token = localStorage.getItem("token"); 
        const res = await axios.get("http://localhost:3000/request/getAllSent", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSentRequests(res.data.sentRequests);
      } catch (err) {
        console.error("Error fetching sent requests:", err);
      }
    };
    fetchSentRequests();
  }
}, [isOpenRequest]);


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
          {/* Close button */}
          <div className="button2">
            <h2>All Sent Request</h2>
            <div className="bars" onClick={onCloseRequest}>
              <div className="bar1"></div>
              <div className="bar2"></div>
            </div>
          </div>

          <div className="sideBarContent">
            {sentRequests.length === 0 ? (
              <p className="noRequests">No sent requests</p>
            ) : (
              sentRequests.map((req) => (
                <div className="sideBarCard" key={req._id}>
                  <div className="title_date">
                    <div className="sentTitle">
                      Sent to {req.receiver?.name || "Unknown"}
                    </div>
                    <div className="sentDate">
                      {new Date(req.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="about_gig">
                    Response on gig : {req.gig?.title || "Unknown"}
                  </div>
                  <div
                    className={`request_status ${
                      req.status === "accepted"
                        ? "statusAccepted"
                        : req.status === "rejected"
                        ? "statusRejected"
                        : "statusPending"
                    }`}
                  >
                    {req.status}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewRequest;

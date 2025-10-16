import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewRequest.css";
import Loader from "../Loading/Loader";

const ViewRequest = ({ isOpenRequest, onCloseRequest }) => {
  const [sentRequests, setSentRequests] = useState([]);
  const [loading, setLoading] = useState(false)

  // Fetch sent requests when sidebar opens
// Fetch sent requests when sidebar opens
useEffect(() => {
  if (isOpenRequest) {
    const fetchSentRequests = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem("token"); 
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/request/getAllSent`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSentRequests(res.data.sentRequests);
      } catch (err) {
        console.error("Error fetching sent requests:", err);
      }finally{
        setLoading(false)
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
            {loading ? <Loader></Loader>:
            sentRequests.length === 0 ? (
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

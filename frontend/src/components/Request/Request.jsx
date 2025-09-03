import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./mypost.css";

export default function Request({
  isOpenRequestPostWise,
  isCloseRequestPostWise,
  gigId, // pass from parent
}) {
  const [requests, setRequests] = useState([]);

  // Fetch requests gig-wise
  useEffect(() => {
    if (!isOpenRequestPostWise || !gigId) return;

    const fetchRequests = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/request/getAllReceived/${gigId}`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );
        console.log("Fetched requests:", res.data.receivedRequests);
        setRequests(res.data.receivedRequests || []);
      } catch (error) {
        console.error(error);
        toast.error(
          error.response?.data?.message || "Failed to fetch requests"
        );
        setRequests([]);
      }
    };

    fetchRequests();
  }, [isOpenRequestPostWise, gigId]);

  // Function to handle Accept/Reject
  const handleUpdateStatus = async (requestId, newStatus) => {
    try {
      await axios.patch(
        `http://localhost:3000/request/updateStatus/${requestId}`, // replace with your backend route
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      // Update local state for immediate UI change
      setRequests((prev) =>
        prev.map((req) =>
          req._id === requestId ? { ...req, status: newStatus } : req
        )
      );

      toast.success(`Request ${newStatus} successfully`);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to update request");
    }
  };

  if (!isOpenRequestPostWise) return null;

  return (
    <div className="modelOverlay2" onClick={isCloseRequestPostWise}>
      <div
        className="Body_container-2"
        style={{ height: "500px", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="Heading-2">Manage Requests</div>

        {requests.length > 0 ? (
          requests.map((req) => (
            <div className="Request_Card-2" key={req._id}>
              <div className="merge">
              <div className="Field_Name-2" id="Image-2">
                <img src="beack.jpg" alt="" />
              </div>

              <div className="Field_Name-2" id="Name_cantent-2">
                <div className="Child_Name-2">
                  <span className="Person_name-2" id="Child_Name-2">
                    {req.sender?.name || "Unknown"}
                  </span>
                  <span className="Person_name-2" id="Ratting">
                    <span id="icon-2">
                    </span>
                    4.5
                  </span>
                </div>

                <div className="Child_Name-2">
                  <p id="para11">{`${req.sender?.name} response on gig : ${req.gig?.title}`}</p>
                </div>

                {/* Accept/Reject buttons only if status is pending */}
                {req.status === "pending" && (
                  <div className="Child_Name-2">
                    <div
                      className="query Color1"
                      onClick={() => handleUpdateStatus(req._id, "accepted")}
                    >
                      <span className="Accept">Accept</span>
                    </div>
                    <div
                      className="query Color2"
                      onClick={() => handleUpdateStatus(req._id, "rejected")}
                    >
                      <span className="Reject">Reject</span>
                    </div>
                  </div>
                )}
              </div>
              </div>

              <div className="Field_Name-2" id="Status_card-2">
                <div className={`Status ${req.status}`}>{req.status}</div>
                <div className="Status">
                  {new Date(req.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "gray" }}>No requests yet</p>
        )}
      </div>
    </div>
  );
}

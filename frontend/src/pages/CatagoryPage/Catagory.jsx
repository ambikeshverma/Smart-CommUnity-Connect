import React, { useEffect, useState } from "react";
import "./Catagory.css";
import Card from "../../components/Card/Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Catagory = () => {
  const { catagory } = useParams();
  const [items, setItems] = useState([]);
useEffect(() => {
  const fetchItems = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/gig/allGig?catagory=${encodeURIComponent(catagory)}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      // console.log(process.env.REACT_APP_BACKEND_URL)
      setItems(response.data.allGig || []);
    } catch (err) {
      console.error("Error fetching:", err);
      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      }
      setItems([]); // ensure items is always array
    }
  };

  fetchItems();
}, [catagory]);

  return (
    <>
      <div class="conatiner">
        <div class="title1">
          <h1>Catagory Page</h1>
          <h4>Find your requirements</h4>
        </div>
        <div className="cards">
          {items.length > 0 ? (
            items.map((item) => <Card key={item._id} {...item} />)
          ) : (
            <p
              style={{ textAlign: "center", marginTop: "20px", color: "gray" }}
            >
              No gigs found in this category
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Catagory;

import React from "react";
import "./turfcard.css";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Turfcard = ({ item }) => {
  const navigate = useNavigate();

  const gotoBooking = (e) => {
    e.preventDefault();
    navigate(`/turf/${item.id}`);
  };
  return (
    <Link onClick={gotoBooking} class="turf-card">
      <img src="https://picsum.photos/200/300" alt="Turf Image" />
      <div class="turf-card-content">
        <h2 class="turf-card-title">{item.name}</h2>
        <p class="turf-card-description">{item.description}</p>
        <div class="turf-card-info">
          <span>Price: ${item.price}/hr</span>
        </div>
      </div>
    </Link>
  );
};

export default Turfcard;

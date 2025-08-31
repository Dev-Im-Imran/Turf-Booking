import React from "react";
import Search from "../Components/Search";
import "./turfDetails.css";
import { useState } from "react";

const TurfDetails = () => {
  const slots = [
    "05:00 AM - 06:00 AM",
    "06:00 AM - 07:00 AM",
    "07:00 AM - 08:00 AM",
    "08:00 AM - 09:00 AM",
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
  ];

  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="turf-page">
      <Search />
      <div className="turf-hero">
        <div className="turf-image-container">
          <img
            src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
            alt="Turf Ground"
            className="turf-image"
          />

          {/* Gradient + Overlay Text */}
          <div className="turf-gradient">
            <h1 className="turf-title">Turf Paradise</h1>
            <p className="turf-price">₹1000 / hour</p>
          </div>
        </div>
      </div>
      <div className="row turf-details">
        <div className="col">
          <p>Location: Chennai, India</p>
        </div>
      </div>

      <div className="container my-5 p-4 slot-container">
        <h2 className="mb-4 text-white">Select Slots</h2>
        <div className="slot-grid">
          {[
            "07:00 - 08:00",
            "08:00 - 09:00",
            "09:00 - 10:00",
            "10:00 - 11:00",
            "11:00 - 12:00",
            "12:00 - 13:00",
            "13:00 - 14:00",
            "14:00 - 15:00",
            "15:00 - 16:00",
            "16:00 - 17:00",
          ].map((time, index) => (
            <div className="slot-check" key={index}>
              <input
                type="checkbox"
                className="slot-input"
                id={`slot-${index}`}
              />
              <label className="slot-label" htmlFor={`slot-${index}`}>
                {time}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TurfDetails;

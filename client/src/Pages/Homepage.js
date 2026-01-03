import React from "react";
import Turfcard from "../Components/Turfcard";
import "./Homepage.css";
import { useState } from "react";
import TurfDetails from "./TurfDetails";
import Search from "../Components/Search";

const Homepage = () => {
  const turfs = [
    {
      id: 1,
      name: "GreenField Turf",
      image: "https://picsum.photos/200/300",
      location: "Downtown",
      price: 50,
      description: "A premium turf with excellent facilities.",
    },
  ];


  return (
    <div className="Homepage-container">
      <Search />
      <div className="turf-grid">
        {turfs
        ? turfs.map((item) => (
          <Turfcard key={item.id} item={item} />
        ))
        : console.log("ERROR")}
      </div>
    </div>
  );
};

export default Homepage;

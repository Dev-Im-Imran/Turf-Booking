import React from "react";
import Homepage from "./Pages/Homepage";
import Search from "./Components/Search";
import { Router, Routes, Route } from "react-router-dom";
import TurfDetails from "./Pages/TurfDetails";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Search />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/turf/:id" element={<TurfDetails />} />
      </Routes>
    </div>
  );
}

export default App;

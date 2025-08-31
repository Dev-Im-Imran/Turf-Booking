import React from "react";
import { useState } from "react";
import "./search.css";
import { Avatar } from '@mui/material';

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <header>
        <h1>Turf</h1>
        <div class="search-container">
            <input onChange={e => setTerm(e.target.value)} type="text" class="search-bar" placeholder="Search..." />
        </div>
        <div class="account-logo">
          <Avatar className="avator" />
        </div>
    </header>
  );
};

export default Search;

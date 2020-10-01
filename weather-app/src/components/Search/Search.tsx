import React from "react";
import "./Search.css";

const Search = (): JSX.Element => {
  return (
    <div className="search-container">
      <input className="search-input" placeholder="search city..."></input>
      <button className="search-btn">Search</button>
    </div>
  );
};

export default Search;

import React from "react";
import "./Search.css";

const Search = ({ selectHandler }: any): JSX.Element => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="search city..."
        onClick={() => selectHandler()}
      ></input>
    </div>
  );
};

export default Search;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <nav
      style={{
        backgroundColor: "#fca311",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        width: "100%",
        top: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/CA-5"
          style={{
            textDecoration: "none",
            color: "#034732",
            marginRight: "325px",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          Kalvium Books
        </Link>
        <input
          id="searc"
          type="text"
          placeholder="Search books..."
          value={searchText}
          onChange={handleChange}
        />
        <button id="searchButton" onClick={handleSearch}>Search</button>
      </div>
      <div style={{ display: "flex", alignItems: "center",  }}>
        <Link
          to="/register"
          style={{
            width: "80px",
            height: "20px",
            textAlign: "center",
            background: "#034732",
            padding: "10px",
            textDecoration: "none",
            color: "White",
            marginRight: "100px",
            fontSize: "18px",
            border: "solid 2.5px #14213d",
          }}
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

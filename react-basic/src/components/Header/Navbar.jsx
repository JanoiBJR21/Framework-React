import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="nav-con">
          <div className="logo">
            <h1>Janoi</h1>
          </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Sevices</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

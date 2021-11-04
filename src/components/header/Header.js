import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="hero">
      <div className="header__picture">
        <ul className="header__navigation">
          <li className="header__navigation-item">About</li>
          <li className="header__navigation-item">Music</li>
          <li className="header__navigation-item">Contact</li>
        </ul>
      </div>
      <div className="header">
        <h1 className="header__title">INQUANTUM</h1>
      </div>
    </div>
  );
}

export default Header;

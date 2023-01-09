import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navigation">
        <a href="">HOME</a>
        <a href="">ABOUT US</a>
        <a href="">CONTACT</a>
        <a href="">MODAL</a>
        <a href="">SERVICES</a>
      </nav>
      <br />
      <div className="underNav">
        <div className="underNavTitle">
          <h2>TechCorporate</h2>
          <p>Free PSD Website Template</p>
        </div>
        <div className="contactInfo">
          <p>Phone Number: +407123456789</p>
          <p>Mail: tech@techcom</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="Navigation">
        <a href="">HOME</a>
        <a href="">ABOUT US</a>
        <a href="Contact.html">CONTACT</a>
        <a href="Modal.html">MODAL</a>
        <a href="">SERVICES</a>
      </nav>
      <br />
      <div className="UnderNav">
        <div className="UnderNavTitle">
          <h2>TechCorporate</h2>
          <p>Free PSD Website Template</p>
        </div>
        <div className="ContactInfo">
          <p>Tel: xxx xxxxxx xxxxx</p>
          <p>Mail: info@domain.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

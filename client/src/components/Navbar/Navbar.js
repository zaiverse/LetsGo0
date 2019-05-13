import React from "react";
import "./Navbar.css";
import logo from"../../images/logo_7.png"

const Navbar = props => (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="responsive-img"><img src={logo} alt="Logo" /></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">log in</a></li>
        <li><a href="badges.html">contact us</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
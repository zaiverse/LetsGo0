import React, { Component } from 'react';
import "./Navbar.css";
import "./Animate.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from"../../images/logo_no_ball.png";
import ball from"../../images/ball.png";
import Buttons from "../Buttons";
import {setCurrentUser} from "../../actions/authActions";


let Navbar = (props) =>{
const LoginOrProfile = (auth) =>{
console.log(auth);
  return auth.isAuthenticated?
  <Buttons></Buttons>

:
<div className="nav-wrapper">
  <a href="/" className="responsive-img"><img className="logo" src={logo} alt="Logo" /></a>
  <a href="/" className="responsive-img"><img className="ball animated bounce" src={ball} alt="Logo" /></a>
  <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li><a href="/login">log in</a></li>
    <li><a href="/profile"><i className="material-icons">account_circle</i></a></li>
  </ul>
</div>
};

    return(
      <nav>
      {LoginOrProfile(props.auth)};
      </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(Navbar);
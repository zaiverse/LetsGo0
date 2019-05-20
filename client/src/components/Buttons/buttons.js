import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from"../../images/logo_7.png";
import { logoutUser } from "../../actions/authActions";

class Buttons extends Component{
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    
    };

    render(){
        return(
            <div className="nav-wrapper">
            <a href="/" className="responsive-img"><img src={logo} alt="Logo" /></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a  onClick={this.onLogoutClick}>log out</a></li>
                    <li><a href="/profile"><i className="material-icons">account_circle</i></a></li>
                </ul>
            </div>
        );
    }

}

Buttons.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Buttons);
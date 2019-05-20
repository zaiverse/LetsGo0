import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import "./Activities.css";

class Activities extends Component {
    constructor() {
        super();
        this.state = {
            sports: []
        };
    }

    componentDidMount() {
        // If logged in and user navigates to activities page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/profile");
        }
    }

    selectedSport = e => {
        const indexOfSport = this.state.sports.indexOf(e.currentTarget.value);
        if (indexOfSport < 0) {
            e.currentTarget.style.backgroundColor = '#2bbbad';
            this.state.sports.push(e.currentTarget.value);
        } else {
            e.currentTarget.style.backgroundColor = '#e7e3dd';
            this.state.sports.splice(indexOfSport, 1);
        }
    }

    createUser = e => {
        e.preventDefault();
        let newUser = JSON.parse(localStorage.getItem("userData"));
        newUser.sports = this.state.sports;

        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        return (
            <div className="container activities center">
            <h5>Choose the sports you are interested in</h5>
            <p>(select all that apply)</p>
            <br></br>
                <div className="row col l12 center">
                    <button className="sportButton btn-large" onClick={this.selectedSport} value="running"><i className="material-icons right"></i>running</button>
                    <button className="sportButton btn-large" onClick={this.selectedSport} value="basketball"><i className="material-icons right"></i>basketball</button>
                    <button className="sportButton btn-large" onClick={this.selectedSport} value="football"><i className="material-icons right"></i>football</button>
                </div>
                <div className="row col l12">
                    <button className="sportButton btn-large" onClick={this.selectedSport} value="tennis"><i className="material-icons right"></i>tennis</button>
                    <button className="sportButton btn-large" onClick={this.selectedSport} value="beach yoga"><i className="material-icons right"></i>beach yoga</button>
                    <button className="sportButton btn-large" onClick={this.selectedSport} value="volleyball"><i className="material-icons right"></i>volleyball</button>
                </div>
                <div className="row col l12">
                    <button className="sportButton btn-large" onClick={this.selectedSport} value="golf"><i className="material-icons right"></i>golf</button>
                    <button className="sportButton btn-large" onClick={this.selectedSport} value="soccer"><i className="material-icons right"></i>soccer</button>
                    <button className="sportButton btn-large" onClick={this.selectedSport} value="baseball"><i className="material-icons right"></i>baseball</button>
                </div>
                <br></br>
                <a href="/profile">
                <button className="btn waves-effect waves-light" onClick={this.createUser} name="action">register
                    <i className="material-icons right">send</i>
                </button></a>
            </div>            
        )
    }
}

Activities.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    // errors: state.errors
});

export default connect(
    mapStateToProps, {
        registerUser
    }
)(withRouter(Activities));
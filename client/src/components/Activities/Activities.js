import React, { Component } from "react";
import "./Activities.css";

class Activities extends Component {
    state = {

    }
    render() {
        return (
            <div className="container activities center">
            <h5>Choose the sports you are interested in</h5>
            <p>(select all that apply)</p>
            <br></br>
                <div className="row col l12 center">
                    <button className="grey lighten-1 btn-large"><i className="material-icons right"></i>running</button>
                    <button className="grey lighten-1 btn-large"><i className="material-icons right"></i>basketball</button>
                    <button className="grey lighten-1 btn-large"><i className="material-icons right"></i>football</button>
                </div>
                <div className="row col l12">
                    <button className="grey lighten-1 btn-large"><i className="material-icons right"></i>tennis</button>
                    <button className="grey lighten-1 btn-large"><i className="material-icons right"></i>beach yoga</button>
                    <button className="grey lighten-1 btn-large"><i className="material-icons right"></i>volleyball</button>
                </div>
                <div className="row col l12">
                    <button className="grey lighten-1 btn-large"><i className="material-icons right"></i>golf</button>
                    <button className="grey lighten-1 btn-large"><i className="material-icons right"></i>soccer</button>
                    <button className="grey lighten-1 btn-large"><i className="material-icons right"></i>baseball</button>
                </div>
                <br></br>
                <a href="/profile">
                <button className="btn waves-effect waves-light" type="submit" name="action">register
                <i className="material-icons right">send</i>
                </button></a>
            </div>            
        )
    }
}
export default Activities;
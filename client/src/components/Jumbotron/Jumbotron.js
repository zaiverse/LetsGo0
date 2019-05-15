import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron home-page">
        <div className="row">
            <div className="col s12 l4 push-l1">
                <div className="about">
                Meet people, who share your passion for different sports activities and make lifetime friends.
                </div>
                <br></br>
                <a href="/register">
                <button className="btn waves-effect waves-light" type="submit" name="action">register
                <i className="material-icons right">send</i>
                </button></a>
            </div>
        </div>  
    </div>
);

export default Jumbotron;
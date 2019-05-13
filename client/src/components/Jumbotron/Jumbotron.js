import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron">
        <div className="row">
            <div className="col s12 l4 push-l1">
                <div class="about">
                Meet people, who share your passion for different activities and make lifetime friends.
                </div>
                <br></br>
                <button className="btn waves-effect waves-light" type="submit" name="action">register
                <i className="material-icons right">send</i>
                </button>
            </div>
        </div>  
    </div>
);

export default Jumbotron;
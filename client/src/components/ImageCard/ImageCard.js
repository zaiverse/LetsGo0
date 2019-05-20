import React, { Component } from 'react';
import "./ImageCard.css";

class ImageCard extends Component {
    state = {

    }
    render() {
        return (
        <div className="container">
        <div className="row">
            <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">@username<i className="material-icons right">more_vert</i></span>
              <p><a href="#">This is a link</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">@username<i className="material-icons right">close</i></span>
              <p>Here is some more information about this user.</p>
              <a className="activitiesList btn-small">basketball</a>
              <a className="activitiesList btn-small">football</a>
            </div>
          </div>
        </div>
        </div>
        )
    }
}
export default ImageCard;
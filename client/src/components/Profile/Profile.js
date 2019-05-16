import React, { Component } from 'react';
import "./Profile.css";


class Profile extends Component {

    state = {

    }
    render() {
        return (
        <div className="profileCover"> 
            {/* <div className="container"> */}
            <div className="row profile">   

                <div className="profile-card col s12 l2 push-l1">
                    <div className="card">
                        <div className="card-image responsive-img">
                        </div>
                        <div className="card-content">
                            <span className="card-title" id="username">@lilimimina</span>
                            <p>User intro - I am awesome...</p>
                        </div>
                        <div>
                            <a className="activitiesList btn-small">basketball</a>
                            <a className="activitiesList btn-small">football</a>
                            <a className="activitiesList btn-small">tennis</a>
                            <a className="activitiesList btn-small">soccer</a>
                        </div>
                        <br></br>
                        <div className="card-action">
                            <a href="#">edit profile</a>
                        </div>
                        <div className="card-action">
                            <a href="#">messages</a>
                        </div>
                        <div className="card-action">
                            <a href="#">search</a>
                        </div>
                    </div>
                </div>
                
                <div className="col s12 l10 center gallery">
                   <div id="gallery">
                        <img className="album" src="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"/>
                        <img className="album" src="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"/>
                        <img className="album" src="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"/>
                        <img className="album" src="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"/>
                        <img className="album" src="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"/>
                        <img className="album" src="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"/>                
                   </div>
                 </div>
                 </div>
            </div> 
        // </div> 
    
        )
    }
}

export default Profile;
import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
    state = {

    }
    render() {
        return (
            <div className="container register">
                <form className="white">
                    <h5>Register</h5>
                    <br></br>
                    <div class="input-field">
                    <label for="name">first and last name</label>
                    <input placeholder="john smith" id="name" type="text"/>
                    </div>
                    <div class="input-field">
                    <label for="username">username</label>
                    <input placeholder="choose username" id="last-name" type="text"/>
                    </div>
                    <div className="input-field">
                    <label htmlFor="email">email</label>
                    <input placeholder="john@john.com" id="email" type="email"/>
                    </div>
                    <div className="input-field">
                    <label htmlFor="password">password</label>
                    <input placeholder="type your password" id="password" type="password"  />
                    </div>
                    <div className="input-field">
                    <label htmlFor="password">confirm password</label>
                    <input placeholder="retype password" type="password" id="password" />
                    </div>
                    <div class="input-field">
                    <input placeholder="city, state or zip code" id="location" type="text"/>
                    <label for="location">location</label>
                    </div>
                    <div><i class="small material-icons" id="uploadPhoto">add_a_photo</i> add a photo</div>
                    <div className="input-field">
                    <a href="/activities">
                    <button className="btn waves-effect waves-light" type="submit">next<i class="material-icons right">send</i></button>
                    </a></div>
                </form>
            </div>            
        )
    }
}

export default Register;
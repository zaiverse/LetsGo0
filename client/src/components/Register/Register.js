import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

class Register extends Component {
    constructor() {
      super();
      this.state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
      };
    }
  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  onSubmit = e => {
      e.preventDefault();
  const newUser = {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
        location: this.state.location,
        profilePic: this.state.profilePic,
      };
  console.log(newUser);
    };


    render() {
        const { errors } = this.state;
        return (
            <div className="container register">
                <form noValidate onSubmit={this.onSubmit} className="white">
                    <h5>Register</h5>
                    <br></br>
                    <div class="input-field">
                    <label for="name">first and last name</label>
                    <input onChange={this.onChange} value={this.state.name} error={errors.name} placeholder="john smith" id="name" type="text"/>
                    </div>
                    <div class="input-field">
                    <label for="username">username</label>
                    <input onChange={this.onChange} value={this.state.username} error={errors.username} placeholder="choose username" id="last-name" type="text"/>
                    </div>
                    <div className="input-field">
                    <label htmlFor="email">email</label>
                    <input onChange={this.onChange} value={this.state.email} error={errors.email} placeholder="john@john.com" id="email" type="email"/>
                    </div>
                    <div className="input-field">
                    <label htmlFor="password">password</label>
                    <input onChange={this.onChange} value={this.state.password} error={errors.password} placeholder="type your password" id="password" type="password"  />
                    </div>
                    <div className="input-field">
                    <label htmlFor="password2">confirm password</label>
                    <input onChange={this.onChange} value={this.state.password2} error={errors.password2} placeholder="retype password" type="password" id="password2" />
                    </div>
                    <div class="input-field">
                    <input onChange={this.onChange} value={this.state.location} error={errors.location} placeholder="city, state or zip code" id="location" type="text"/>
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
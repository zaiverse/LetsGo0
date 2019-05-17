import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
    constructor() {
      super();
      this.state = {
        email: "",
        password: "",
        errors: {}
      };
    }
  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  onSubmit = e => {
      e.preventDefault();
  const userData = {
        email: this.state.email,
        password: this.state.password
      };
  console.log(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container login">
                <form noValidate onSubmit={this.onSubmit} className="white">
                    <h5>Log In</h5>
                    <div className="input-field">
                    <label htmlFor="email">email</label>
                    <input onChange={this.onChange} value={this.state.email} error={errors.email} type="email" id="email" className="validate"/>
                    </div>
                    <div className="input-field" >
                    <label htmlFor="password">password</label>
                    <input onChange={this.onChange} value={this.state.password} error={errors.password} type="password" id="password" />
                    </div>
                    <br></br>
                    <a href="/profile">
                    <button className="btn waves-effect waves-light" type="submit" name="action">sing in
                    <i className="material-icons right">send</i>
                    </button></a>
                </form>
            </div>            
        )
    }
}
export default Login;
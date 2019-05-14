import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
    state = {

    }
    render() {
        return (
            <div className="container login">
                <form className="white">
                    <h5>Log In</h5>
                    <div className="input-field">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" />
                    </div>
                    <div className="input-field">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" />
                    </div>
                    <div className="input-field">
                    <button className="btn waves-effect waves-light" type="submit">sign in</button>
                    </div>
                </form>
            </div>            
        )
    }
}
export default Login;
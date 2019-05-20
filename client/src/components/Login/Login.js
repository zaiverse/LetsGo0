import React, { Component } from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }
  
componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/profile"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
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
this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
    render() {
        const { errors } = this.state;
        return (
            <div className="container login center">
                <form noValidate onSubmit={this.onSubmit} className="white">
                    <h5>Log In</h5>
                    <div className="input-field">
                    <label htmlFor="email">email</label>
                    <input onChange={this.onChange} value={this.state.email} error={errors.email} type="email" id="email" className={classnames("", {invalid: errors.email || errors.emailnotfound})}/>
                    <span className="red-text">
                    {errors.email}
                    {errors.emailnotfound}
                    </span>
                    </div>
                    <div className="input-field" >
                    <label htmlFor="password">password</label>
                    <input onChange={this.onChange} value={this.state.password} error={errors.password} type="password" id="password" className={classnames("", {invalid: errors.password || errors.passwordincorrect})}/>
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                    </div>
                    <br></br>
                    <button className="btn waves-effect waves-light" type="submit" name="action">sing in
                    <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>            
        )
    }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
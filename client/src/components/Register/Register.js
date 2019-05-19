import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      password2: "",
      location: "",
      profilePic: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
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
const newUser = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      location: this.state.location,
      profilePic: this.state.profilePic,
    };
this.props.registerUser(newUser, this.props.history); 
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
                    <input onChange={this.onChange} value={this.state.name} error={errors.name} placeholder="john smith" id="name" type="text" className={classnames("", {invalid: errors.name})}/>
                    <span className="red-text">{errors.name}</span>
                    </div>
                    <div class="input-field">
                    <label for="username">Username</label>
                    <input onChange={this.onChange} value={this.state.username} error={errors.username} placeholder="timjohns23" id="username" type="text" className={classnames("", {invalid: errors.username})}/>
                    <span className="red-text">{errors.username}</span>
                    </div>
                    <div className="input-field">
                    <label htmlFor="email">email</label>
                    <input onChange={this.onChange} value={this.state.email} error={errors.email} placeholder="john@john.com" id="email" type="email" className={classnames("", {invalid: errors.email})}/>
                    <span className="red-text">{errors.email}</span>
                    </div>
                    <div className="input-field">
                    <label htmlFor="password">password</label>
                    <input onChange={this.onChange} value={this.state.password} error={errors.password} placeholder="type your password" id="password" type="password" className={classnames("", {invalid: errors.password})}/>
                    <span className="red-text">{errors.password}</span>
                    </div>
                    <div className="input-field">
                    <label htmlFor="password2">confirm password</label>
                    <input onChange={this.onChange} value={this.state.password2} error={errors.password2} placeholder="retype password" type="password" id="password2" className={classnames("", {invalid: errors.password2})}/>
                    <span className="red-text">{errors.password2}</span>
                    </div>
                    <div class="input-field">
                    <input onChange={this.onChange} value={this.state.location} error={errors.location} placeholder="city, state or zip code" id="location" type="text" className={classnames("", {invalid: errors.location})}/>
                    <label for="location">location</label>
                    <span className="red-text">{errors.location}</span>
                    </div>
                    <div><i class="small material-icons" id="uploadPhoto">add_a_photo</i> add a photo</div>
                    <div className="input-field">
                    <button className="btn waves-effect waves-light" type="submit">next<i class="material-icons right">send</i></button></div>
                </form>
            </div>            
        )
    }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  // errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
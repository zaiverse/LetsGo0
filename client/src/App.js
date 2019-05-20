import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Activities from "./components/Activities";
import Register from "./components/Register";
import Profile from './components/Profile';
import SearchPage from './pages/SearchPage';
import PrivateRoute from "./components/private-route/PrivateRoute";
// import Logout from './pages/LogOut';

import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./components/Login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>  
        <div className="App">       
          <Navbar />  
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/activities" component={Activities} />
              <Route exact path="/search" component={SearchPage} />
              {/* <Route exact path="/profile" component={Profile} /> */}
              <Switch>
              <PrivateRoute exact path="/profile" component={Profile} />
              </Switch>
          <Footer />
        </div>
      </Router>
      </Provider> 
    );
  }
}

export default App;
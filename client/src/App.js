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
// import Logout from './pages/LogOut';

class App extends Component {
  render() {
    return (
      <Router>  
        <div>       
          <Navbar />  

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/activities" component={Activities} />
              <Route exact path="/profile" component={Profile} />
              {/* <Route exact path="/login" render={(props) => {
                return <Login setCurrentUser={this.setCurrentUser} {...props} />
              }} />
              <Route exact path="/logout" component={Logout} />
              }} /> */}
            </Switch>

          <Footer />
        </div>
      </Router> 
    );
  }
}

export default App;
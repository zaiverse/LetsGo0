import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Login from "./components/Login";
import Activities from "./components/Activities";
import Register from "./components/Register";
// import Logout from './pages/LogOut';

class App extends Component {
  render() {
    return (
      <Router>  
        <div className="App">       
          <Navbar />  
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/activities" component={Activities} />
          <Footer />
        </div>
      </Router> 
    );
  }
}

export default App;
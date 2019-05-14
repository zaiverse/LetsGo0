import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Login from "./components/Login";
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
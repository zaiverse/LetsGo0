import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
    state = {

    }
    render() {
        return (
            <div className="container search center">
            <br></br>
                    <h5>Find players</h5>
                    <br></br>
                    <div className="container">
                        <div className="row">
                            <div className="col s12">                                                                    
                                <nav>
                                    <div className="nav-wrapper">
                                        <form>
                                            <div className="input-field">
                                            <input id="search" type="search" required />
                                            <label className="label-icon" htmlFor="search"><i class="material-icons">search</i></label>
                                            <i class="material-icons">close</i>
                                            </div>
                                        </form>
                                    </div>
                                </nav>                               
                            </div>
                        </div>
                    </div>
                </div>
            
            
        )
    }
}
export default Search;
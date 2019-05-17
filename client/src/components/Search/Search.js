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
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">search</i>
                                        <input type="text" id="autocomplete-input" className="autocomplete"/>
                                        <label htmlFor="autocomplete-input">city, state or zip code</label>
                                        <br></br>
                                        <br></br>
                                        <a className="waves-effect waves-light btn">search</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
        )
    }
}
export default Search;
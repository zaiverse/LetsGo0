import React, { Component } from 'react';
import PropTypes from "prop-types";
import Search from "../../components/Search";
import Dropdown from "../../components/Dropdown";
import ImageCard from "../../components/ImageCard";
import SearchButton from "../../components/SearchButton";
import {setCurrentUser} from "../../actions/authActions";
import { connect } from "react-redux";


class SearchPage extends Component {


    render() {
        const { user } = this.props;
        console.log(user);
        return(
            <div>
                <Search />
                <Dropdown />
                <SearchButton />
                <br></br>
                <ImageCard />

            </div>
        )
    }
}

SearchPage.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { setCurrentUser }
  )(SearchPage);
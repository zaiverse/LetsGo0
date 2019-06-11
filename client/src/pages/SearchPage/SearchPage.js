import React, { Component } from 'react';
import Search from "../../components/Search";
import Dropdown from "../../components/Dropdown";
import ImageCard from "../../components/ImageCard";
import SearchButton from "../../components/SearchButton";
import {getUsers} from "../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


class SearchPage extends Component {

  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    userInfo: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getUsers();
  }

    render() {
        const { users } = this.props.userInfo;
        console.log(users);
        return(
            <div>
                <Search />
                <Dropdown />
                {/* {items.map(({ _id, name }) => (
                  key=_id 
                ))} */}
                <SearchButton />
                <br></br>
                <ImageCard />

            </div>
        )
    }
}

  const mapStateToProps = state => ({
    auth: state.auth,
    userInfo: state.userInfo
  });
  
  export default connect(
    mapStateToProps,
    { getUsers }
  )(SearchPage);
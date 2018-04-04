import React, { Component } from "react";
import IoIconPack from "react-icons/lib/io";
import Bookmark from "react-icons/lib/io/android-bookmark";
import Notification from "react-icons/lib/io/android-notifications-none";
import SearchIcon from "react-icons/lib/io/search";
import logoLarge from "../../assets/mediumlogo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducer";
import ImageIcon from "./ImageIcon/ImageIcon";

//Connected with Redux

class MainHeader extends Component {
  constructor() {
    super();
    this.state = {};
    this.focusMethod = this.focusMethod.bind(this);
  }

  focusMethod() {
    if (document.getElementById("SearchBar").focus()) {
      return;
    }
    document.getElementById("SearchBar").focus();
    console.log(document.getElementById("SearchBar"));
  }
  render() {
    let loggedin = this.props.user.id ? (
      <ImageIcon />
    ) : (
      <a href={process.env.REACT_APP_LOGIN}>
        <button>Login</button>
      </a>
    );
    return (
      <div className="main-header-component-main-div">
        <Link to="/">
          <div className="main-header-logo-div">
            <img src={logoLarge} className="logo-large" />
          </div>
        </Link>
        <div className="main-header-icon-user-div">
          <SearchIcon
            className="story-header-icons"
            // uncommenting this vvvvv this will enable an unfinished scroll out search bar function
            // onClick={() => this.focusMethod()}
          />
          <input
            className="SearchBar"
            id="SearchBar"
            type="search"
            placeholder="Search shMedium"
          />
          <Bookmark className="story-header-icons" />
          <Notification className="story-header-icons" />
          {loggedin}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getUser })(MainHeader);

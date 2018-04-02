import React, { Component } from "react";
import IoIconPack from "react-icons/lib/io";
import Bookmark from "react-icons/lib/io/android-bookmark";
import Notification from "react-icons/lib/io/android-notifications-none";
import SearchIcon from "react-icons/lib/io/search";
import logoLarge from "../../assets/mediumlogo.svg";
<<<<<<< HEAD
class MainHeader extends Component {
  render() {
    return (
      <div className="main-header-component-main-div">
        <div classNam="main-header-logo-div">
          <img src={logoLarge} className="logo-large" />
        </div>
        <div className="main-header-icon-user-div">
          <SearchIcon className="story-header-icons" />
          <Bookmark className="story-header-icons" />
          <Notification className="story-header-icons" />
          <img className="user-image" />
=======
import { Link } from "react-router-dom";
import "./Header.css";

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
          <Link to="/@user">
            <img className="user-image" />
          </Link>
>>>>>>> master
        </div>
      </div>
    );
  }
}
export default MainHeader;

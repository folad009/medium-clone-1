import React, { Component } from "react";
import IoIconPack from "react-icons/lib/io";
import Bookmark from "react-icons/lib/io/android-bookmark";
import Notification from "react-icons/lib/io/android-notifications-none";
import SearchIcon from "react-icons/lib/io/search";
import logoLarge from "../../assets/mediumlogo.svg";
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
        </div>
      </div>
    );
  }
}
export default MainHeader;

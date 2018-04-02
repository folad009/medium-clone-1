import React from "react";
import IoIconPack from "react-icons/lib/io";
import Dots from "react-icons/lib/io/ios-more";
import Bookmark from "react-icons/lib/io/android-bookmark";
import Notification from "react-icons/lib/io/android-notifications-none";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function InputStoryHeader() {
  return (
    <div className="input-story-header-component-main-div">
      <div className="input-story-header-logo-left-div">
        <Link to="/">
          <img src={Logo} className="logo-small" />
        </Link>
        <p>Save</p>
      </div>
      <div className="story-header-right-side-div">
        <p>Share</p>
        <p>Publish</p>
        <Dots className="story-header-icons" />
        <Bookmark className="story-header-icons" />
        <Notification className="story-header-icons" />
        <Link to="/@user">
          <img className="user-image" />
        </Link>
      </div>
    </div>
  );
}

export default InputStoryHeader;

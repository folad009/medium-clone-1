import React from 'react';
import IoIconPack from 'react-icons/lib/io';
import Dots from 'react-icons/lib/io/ios-more'
import Bookmark from 'react-icons/lib/io/android-bookmark';
import Notification from 'react-icons/lib/io/android-notifications-none';
import Logo from '../../assets/logo.svg'

function InputStoryHeader(){
    return(
        <div className="input-story-header-component-main-div">
            <div className="input-story-header-logo-left-div">
                <img src={Logo} className="logo-small"/>
                <p>Save</p>
            </div>
            <div className="story-header-right-side-div">
            <p>Share</p>
            <p>Publish</p>
            <Dots className="story-header-icons"/>
            <Bookmark className="story-header-icons"/>
            <Notification className="story-header-icons"/>
            <img className="user-image"/>
            </div>
        </div>
    )
}
export default InputStoryHeader;
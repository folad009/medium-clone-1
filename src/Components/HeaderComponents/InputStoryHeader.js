import React from 'react';
import IoIconPack from 'react-icons/lib/io';
import Dots from 'react-icons/lib/io/ios-more'
import Bookmark from 'react-icons/lib/io/android-bookmark';

function InputStoryHeader(){
    return(
        <div className="input-story-header-component-main-div">
            <div className="input-story-header-logo-left-div">
                <img alt="icon goes here"/>
                <p>save</p>
            </div>
            <div className="story-header-right-side-div">
            <p>Share</p>
            <p>Publish</p>
            <Dots className="story-header-icons"/>
            <Bookmark className="story-header-icons"/>
            <img alt="icon round num"/>
            <img alt="icon round user image"/>
            </div>
        </div>
    )
}
export default InputStoryHeader;
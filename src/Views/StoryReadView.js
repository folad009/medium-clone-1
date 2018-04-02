import React from 'react';
import MainHeader from '../Components/HeaderComponents/MainHeader';
import StoryRenderComponent from "../Components/StoryRenderComponent/StoryRenderComponent";

function StoryReadView(){
    return(
        <div className="story-read-view-main-div">
            <MainHeader/>
            <StoryRenderComponent/>
        </div>
    )
}

export default StoryReadView;
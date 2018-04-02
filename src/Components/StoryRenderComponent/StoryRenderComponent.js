import React from  'react';
import MainHeader from '../HeaderComponents/MainHeader';
import ChatIcon from 'react-icons/lib/io/ios-chatbubble-outline';
import TwitterIcon from "react-icons/lib/io/social-twitter-outline";
import FacebookIcon from 'react-icons/lib/io/social-facebook-outline'

function StoryRenderComponent(){
    return(
        <div >
           <div className="story-render-component-body">

           <ul>
           <li>wcwcwc<br/>
           </li>
           <li>cwwwc</li>
           <li>wcwqcwcw</li>
           </ul>
           <img src="https://wallpaperbrowse.com/media/images/cat-1285634_960_720.png" style={{fontSize:"1.5em"}}/>
           <br/>
           <h1>
           <br/>sjdksandkasndsa</h1><div><u><b>dqwdwqdwqdwd</b></u></div><div><br/></div>
           </div>
            <div className="story-render-component-clap-section">
            <div className="story-render-component-clap-section-text">
                <h4>One clap, two clap, three clap, forty?</h4>
                <p>By clapping more or less, you can signal to us which stories really stand out.</p>
            </div>
            <div className="story-render-component-clap-section-icons-div">
                <img/>
                <ChatIcon className="story-header-icons"/>
                <p>3</p>
                <TwitterIcon className="story-header-icons"/>
                <FacebookIcon className="story-header-icons"/>
            </div>
            </div>
        </div>
    )
}
export default StoryRenderComponent;
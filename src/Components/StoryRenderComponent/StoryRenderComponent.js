import React, { Component } from 'react';
import MainHeader from '../HeaderComponents/MainHeader';
import { withRouter, Link } from "react-router-dom";
import axios from 'axios';
import ChatIcon from 'react-icons/lib/io/ios-chatbubble-outline';
import TwitterIcon from "react-icons/lib/io/social-twitter-outline";
import FacebookIcon from 'react-icons/lib/io/social-facebook-outline'

class StoryRenderComponent extends Component {
    constructor() {
        super()

        this.state = {
            post: ""
        }
    }

    componentDidMount() {
        axios.get(`/api/getpost/${this.props.match.params.id}`).then(r => {
            console.log(r.data[0])
            this.setState({ post: r.data[0].body })
        }).catch(err => console.log(err))

    }

    createMarkup(str) {
        return { __html: str };
    }
    render() {

        let post;
        if (this.state.post) {
            post = this.state.post
        }

        return (
            <div className="story-render-component-main-div">


                <div className="story-render-component-body" dangerouslySetInnerHTML={this.createMarkup(post)} />

                <div className="story-render-component-clap-section">
                    <div className="story-render-component-clap-section-text">
                        <h4>One clap, two clap, three clap, forty?</h4>
                        <p>By clapping more or less, you can signal to us which stories really stand out.</p>
                    </div>
                    <div className="story-render-component-clap-section-icons-div">
                        <img />
                        <ChatIcon className="story-header-icons" />
                        <p>3</p>
                        <TwitterIcon className="story-header-icons" />
                        <FacebookIcon className="story-header-icons" />
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(StoryRenderComponent);
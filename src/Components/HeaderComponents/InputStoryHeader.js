import React, { Component } from 'react';
import IoIconPack from 'react-icons/lib/io';
import Dots from 'react-icons/lib/io/ios-more'
import Bookmark from 'react-icons/lib/io/android-bookmark';
import Notification from 'react-icons/lib/io/android-notifications-none';
import Logo from '../../assets/logo.svg'
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addPost } from "../../ducks/reducer";

import { Link } from "react-router-dom";

class InputStoryHeader extends Component {
    constructor() {
        super()

        this.state = {
            categories: ""
        }
    }

    addPost(title, body, categories) {

        let post = { title, body, categories }

        axios.post("/api/addpost", post).then(results => {

            this.props.history.push(`/story-view/${results.data[0].id}`)
        }).catch(err => console.log(err))




    }
    render() {

        return (
            <div className="input-story-header-component-main-div">
                <div className="input-story-header-logo-left-div">
                    <img src={Logo} className="logo-small" />
                    <p>Save</p>
                </div>
                <div className="story-header-right-side-div">
                    <p>Share</p>
                    <p onClick={() => this.addPost(this.props.title, this.props.body, this.state.categories)} >Publish</p>
                    <Dots className="story-header-icons" />
                    <Bookmark className="story-header-icons" />
                    <Notification className="story-header-icons" />
                    <img className="user-image" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(InputStoryHeader));

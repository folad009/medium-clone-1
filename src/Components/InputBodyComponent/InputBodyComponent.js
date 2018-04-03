import React, { Component } from 'react';
import Editor from 'react-medium-editor';
import axios from 'axios';
import Dots from 'react-icons/lib/io/ios-more'
import Bookmark from 'react-icons/lib/io/android-bookmark';
import Notification from 'react-icons/lib/io/android-notifications-none';
import Logo from '../../assets/logo.svg'
import InputStoryHeader from "../HeaderComponents/InputStoryHeader";

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
class InputBodyComponent extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            body: "",
            categories: ""
        }
    }



    handleChanges = (text, medium) => {
        this.setState({ body: text });
    }

    handleChange = (text, medium) => {
        this.setState({ title: text });
    }



    render() {
        console.log(this.state.body, this.state.title)
        return (<div>
            <InputStoryHeader title={this.state.title} body={this.state.body} />
            <div className="input-body-component-main-div">
                <div className="input-body-component-user-info">
                    <img className="input-body-component-user-info-image" />
                    <div className="input-body-component-user-info-name">
                        <p>Juan Pecina</p>
                        <p>Draft</p>
                    </div>
                </div>

                <Editor
                    className="input-body-component-title"
                    data-placeholder="Title"
                    onChange={this.handleChange}

                    options={{ toolbar: { buttons: [] } }}
                />

                <Editor
                    className="text-area-body-component-body"
                    data-placeholder="Tell your story..."
                    defaultText="Type"
                    onChange={this.handleChanges}
                    options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h1', 'image', 'quote', 'removeFormat', 'unorderedlist'] } }}
                />

            </div>
        </div>
        )
    }
}




export default InputBodyComponent
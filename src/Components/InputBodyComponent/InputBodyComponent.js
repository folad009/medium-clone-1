import React, { Component } from 'react';
import Editor from 'react-medium-editor';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
class InputBodyComponent extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            body: ""
        }
    }

    handleChanges = (text, medium) => {
        this.setState({ body: text });
    }

    render() {
        console.log(this.state.body)
        return (
            <div className="input-body-component-main-div">
                <div className="input-body-component-user-info">
                    <img className="input-body-component-user-info-image" />
                    <div className="input-body-component-user-info-name">
                        <p>Juan Pecina</p>
                        <p>Draft</p>
                    </div>
                </div>
                {/* <input defaultValue="Title" type="text" className="input-body-component-title" /> */}

                <Editor
                    className="input-body-component-title"
                    data-placeholder="Title"

                    onChange={this.handleChanges}
                    options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h1', 'image', 'quote'] } }}
                />
                {/* <textarea defaultValue="tell your story..." type="body" className="text-area-body-component-body" /> */}

                <Editor
                    className="text-area-body-component-body"

                    data-placeholder="Tell your story..."
                    defaultText="Type"
                    onChange={this.handleChanges}
                    options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h1', 'image', 'quote', 'removeFormat', 'unorderedlist'] } }}
                />

            </div>
        )
    }
}
export default InputBodyComponent;
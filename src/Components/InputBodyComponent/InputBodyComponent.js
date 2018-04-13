import React, { Component } from "react";
import Editor from "react-medium-editor";
import axios from "axios";
import Dots from "react-icons/lib/io/ios-more";
import Bookmark from "react-icons/lib/io/android-bookmark";
import Notification from "react-icons/lib/io/android-notifications-none";
import Logo from "../../assets/logo.svg";
import InputStoryHeader from "../HeaderComponents/InputStoryHeader";

import { getUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");

class InputBodyComponent extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      categories: [],
      username: "",
      avatar: "",
      isUploading: false,
      progress: 0,
      avatarURL: ""
    };
  }
  addCategory(str) {
    console.log("cats", this.state.categories);
    let cats = this.state.categories;
    cats.push(str);
    this.setState({ categories: cats });
  }
  removeCategory(str) {
    let cats = this.state.categories;
    let deleteIndex = cats.indexOf(str);
    console.log(deleteIndex);
    cats.splice(deleteIndex, 1);
    this.setState({ categories: cats });
  }
  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({
          avatarURL: url
        });
      });
  };

  handleChanges = (text, medium) => {
    this.setState({ body: text });
  };

  handleChange = (text, medium) => {
    this.setState({ title: text });
  };

  render() {
    let categoryReel = this.props.categories.map((item, i) => {
      if (this.state.categories.includes(item.name)) {
        return (
          <div
            className="cat-button-selected"
            onClick={() => {
              this.removeCategory(item.name);
            }}
          >
            {item.name.toUpperCase()}
          </div>
        );
      }
      return (
        <div
          className="cat-selector-button-div"
          onClick={() => this.addCategory(item.name)}
        >
          {item.name.toUpperCase()}
        </div>
      );
    });
    console.log(this.state);
    return (
      <div>
        {this.state.avatarURL}
        <InputStoryHeader
          img={this.state.avatarURL}
          title={this.state.title}
          body={this.state.body}
          cats={this.state.categories}
        />
        <div className="input-body-component-main-div">
          <div className="category-selector-body">
            <div className="categry-selector-sub-body">
              <div className="category-selector-header">
                <h3>Select Categories</h3>
              </div>
              <div className="category-selector-main-div">{categoryReel}</div>
            </div>
          </div>
          <div className="input-body-component-user-info">
            {this.props.user.id ? (
              <img className="user-image" src={this.props.user.avatar} />
            ) : (
              false
            )}
            <div className="input-body-component-user-info-name">
              <p>Draft</p>
            </div>
            <form>
              {this.state.isUploading && <p>Progress: {this.state.progress}</p>}

              <FileUploader
                accept="image/*"
                name="thumbnail"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
            </form>
          </div>

          <Editor
            className="input-body-component-title"
            data-placeholder="Title"
            onChange={this.handleChange}
            options={{ toolbar: { buttons: [] } }}
          />
          <img src={this.state.avatarURL} alt="" />
          <Editor
            className="text-area-body-component-body"
            data-placeholder="Tell your story..."
            defaultText="Type"
            onChange={this.handleChanges}
            options={{
              toolbar: {
                buttons: [
                  "bold",
                  "italic",
                  "underline",
                  "anchor",
                  "h1",
                  "image",
                  "quote",
                  "removeFormat",
                  "unorderedlist"
                ]
              }
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getUser })(InputBodyComponent);

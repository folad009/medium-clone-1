import React, { Component } from "react";
import IoIconPack from "react-icons/lib/io";
import Dots from "react-icons/lib/io/ios-more";
import swal from "sweetalert";
import Bookmark from "react-icons/lib/io/android-bookmark";
import Notification from "react-icons/lib/io/android-notifications-none";
import Logo from "../../assets/logo.svg";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addPost } from "../../ducks/reducer";
import { getUser } from "../../ducks/reducer";
import { Link } from "react-router-dom";
import ImageIcon from "./ImageIcon/ImageIcon";
import { Menu, Dropdown, Icon } from "antd";
import "antd/dist/antd.css";

class InputStoryHeader extends Component {
  constructor() {
    super();

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  addCategory(str) {
    let cats = this.state.categories;
    cats.push(str);
    this.setState({ categories: cats });
  }

  addPost(title, body, categories, img) {
    let cats = categories.join(",");
    let post = { title, body, categories: cats, img };

    axios
      .post("/api/addpost", post)
      .then(results => {
        this.props.history.push(`/story-view/${results.data[0].id}`);
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.props.categories);

    let categoryReel = this.props.categories.map((item, i) => {
      return (
        <p
          className="topic-nav-link"
          onClick={() => this.addCategory(item.name)}
        >
          {" "}
          {item.name.toUpperCase()}
        </p>
      );
    });

    const menu = (
      <Menu>
        <Menu.Item className="nav-item-dropdown" key="0">
          Publish
        </Menu.Item>
      </Menu>
    );

    let loggedin = this.props.user.id ? (
      <ImageIcon />
    ) : (
      <a href={process.env.REACT_APP_LOGIN}>
        <button className={"sign-in-btn"}>Sign In</button>
      </a>
    );
    return (
      <div>
        <div className="input-story-header-component-main-div">
          <div className="input-story-header-logo-left-div">
            <Link to="/">
              <img src={Logo} className="logo-small" />
            </Link>
          </div>
          <div className="story-header-right-side-div">
            {/*<Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="bottomCenter"
              >
                <p style={{ cursor: "pointer" }}>Publish</p>
              </Dropdown>*/}

            <p
              className="publish-button"
              onClick={() => {
                if (this.props.title && this.props.body) {
                  if (this.props.cats.length > 0) {
                    if (this.props.img) {
                      this.addPost(
                        this.props.title,
                        this.props.body,
                        this.props.cats,
                        this.props.img
                      );
                    } else {
                      //If no image given, use default and finish post
                      this.addPost(
                        this.props.title,
                        this.props.body,
                        this.props.cats,
                        "https://mocra.org/wp-content/uploads/2016/07/default.jpg"
                      );
                    }
                  } else {
                    swal({ text: "Select Atleast One Category" });
                  }
                } else {
                  swal({
                    text: "Add content to title and body before publishing"
                  });
                }
              }}
            >
              Publish
            </p>

            {loggedin}
          </div>
        </div>

        {/*<div className="topic-header-bar-main-div">
          <div className="topic-header-bar">
            <div id="topic-header-grid" className="topic-header-grid">
              {categoryReel}
            </div>
          </div>
            </div>*/}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(
  connect(mapStateToProps, { getUser })(InputStoryHeader)
);

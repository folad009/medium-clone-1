import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducer";
import { withRouter } from "react-router-dom";
import { Menu } from "antd";
import LatestTab from "./LatestTab";
import Moment from "react-moment";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;

class ProfilePage extends React.Component {
  constructor() {
    super();

    this.state = {
      userprofile: {},
      posts: [],
      currentTab: "profile",
      profile: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/profile/${this.props.match.params.id}`)
      .then(response => this.setState({ userprofile: response.data[0] }))
      .catch(() => []);

    axios
      .get(`/api/userposts/${this.props.match.params.id}`)
      .then(response => this.setState({ posts: response.data }))
      .catch(() => []);
  }

  handleClick(e) {
    this.setState({ currentTab: e.key });
  }
  createMarkup(str) {
    return { __html: str };
  }
  render() {
    function trimmedBody(str) {
      let trimmed = str.substring(0, 305);
      trimmed.length === 305 ? (trimmed += "...") : trimmed;
      return trimmed;
    }
    let menu = (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.currentTab]}
        mode="horizontal"
        style={{ paddingTop: "110px" }}
      >
        <Menu.Item key="profile">Profile</Menu.Item>
        <Menu.Item key="latest">Latest</Menu.Item>
        <Menu.Item key="claps">Claps</Menu.Item>
      </Menu>
    );

    return (
      <div className="profile-page-main-div">
        <div className="profile-page-header">
          <div className="hero-profile">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1>
                {this.state.userprofile.firstname
                  ? `${this.state.userprofile.firstname} ${
                      this.state.userprofile.lastname
                    }`
                  : "No user"}
              </h1>
              <p>
                {this.state.userprofile.bio
                  ? this.state.userprofile.bio
                  : false}
              </p>
            </div>
            <img
              src={
                this.state.userprofile.avatar
                  ? `${this.state.userprofile.avatar}`
                  : "https://cdn-images-1.medium.com/fit/c/125/125/0*WrSrr3mpeHkyCZzh."
              }
              className="profile-avatar"
            />
          </div>
          <button>Edit</button>
          <h5>4 Following</h5>
          <h5>5 Follers</h5>
        </div>
        {menu}
        <div id="profile-tab">
          {this.state.posts.length > 0 ? (
            this.state.posts.map((item, i) => {
              return (
                <div className="single-story" key={i}>
                  <img
                    className="user-image"
                    src={this.state.userprofile.avatar}
                  />
                  <h3>{`${this.state.userprofile.firstname} ${
                    this.state.userprofile.lastname
                  }`}</h3>
                  <Moment format="MMM DD">{item.date}</Moment>
                  <h2 dangerouslySetInnerHTML={this.createMarkup(item.title)} />
                  <p
                    dangerouslySetInnerHTML={this.createMarkup(
                      trimmedBody(item.body)
                    )}
                  />
                  {item.body.length > 305 ? <p>Read more...</p> : false}
                  <h4>{item.rating}</h4>
                </div>
              );
            })
          ) : (
            <h1 style={{ paddingTop: "20px" }}>
              "You have not made any posts yet."
            </h1>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default withRouter(connect(mapStateToProps, { getUser })(ProfilePage));

import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducer";
import { withRouter } from "react-router-dom";
import { Menu } from "antd";
import TabHeading from "./../subcomponents/TabHeading";
import Latest from "./Latest";
import Following from "./Following";
import Followers from "./Followers";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;

class ProfilePage extends React.Component {
  constructor() {
    super();

    this.state = {
      userprofile: {},
      following: {},
      followers: {},
      posts: [],
      disabled: true,
      editbio: "",
      selectedtab: "TabHeading1"
    };

    this.handleClick = this.handleClick.bind(this);
    this.followUser = this.followUser.bind(this);
    this.allowEdit = this.allowEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.submitNewBio = this.submitNewBio.bind(this);
    this.changeTab = this.changeTab.bind(this);
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
    axios
      .get(`/api/following/${this.props.match.params.id}`)
      .then(response => this.setState({ following: response.data }))
      .catch(() => []);

    axios
      .get(`/api/followers/${this.props.match.params.id}`)
      .then(response => this.setState({ followers: response.data }))
      .catch(() => []);
  }

  allowEdit() {
    this.setState({ disabled: !this.state.disabled });
  }

  cancel() {
    this.setState({ editbio: "", disabled: true });
  }

  handleChange(val) {
    this.setState({ editbio: val });
  }

  handleClick(val) {
    this.setState({ currentTab: val });
  }

  followUser(followerID, followedID) {
    axios.post("/api/follow/add", {
      followerID: followerID,
      followedID: followedID
    });
  }

  submitNewBio(id, bio) {
    if (bio === "") {
      bio = this.props.user.bio;
    }
    axios
      .put("/api/editbio", { id: id, bio: bio })
      .then(response => {
        console.log(response);
      })
      .then(window.location.reload())
      .catch(() => []);
  }

  changeTab(val) {
    this.setState({ selectedtab: `${val}` });
  }

  render() {
    let latest;
    this.state.posts.length > 0
      ? (latest = (
          <Latest user={this.state.userprofile} posts={this.state.posts} />
        ))
      : (latest = <h1>No posts made yet.</h1>);

    let following;
    this.state.following.length > 0
      ? (following = (
          <Following
            user={this.state.userprofile}
            following={this.state.following}
          />
        ))
      : (following = "You are following anyone");

    let followers =
      this.state.followers.length > 0
        ? (followers = (
            <Followers
              user={this.state.userprofile}
              followers={this.state.followers}
            />
          ))
        : (followers = "You have no followers");

    let selected;

    if (this.state.selectedtab === "TabHeading1") {
      selected = latest;
    }

    if (this.state.selectedtab === "following") {
      selected = following;
    }

    if (this.state.selectedtab === "followers") {
      selected = followers;
    }

    return (
      <div className="profile-page-main-div">
        <div className="profile-page-header">
          <div className="hero-profile">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%"
              }}
            >
              <h1>
                {this.state.userprofile.firstname
                  ? `${this.state.userprofile.firstname} ${
                      this.state.userprofile.lastname
                    }`
                  : "No user"}
              </h1>

              {this.state.userprofile.bio ? (
                <input
                  className="userbio"
                  type="text"
                  placeholder={this.state.userprofile.bio}
                  value={this.state.editbio}
                  disabled={this.state.disabled}
                  onChange={e => this.handleChange(e.target.value)}
                  style={{
                    fontSize: "16px",
                    width: "100%",
                    height: "15vh",
                    textOverflow: "visible",
                    marginRight: "10px"
                  }}
                />
              ) : (
                false
              )}
            </div>
            <img
              className="profile-user-image"
              src={
                this.state.userprofile.avatar
                  ? `${this.state.userprofile.avatar}`
                  : "https://cdn-images-1.medium.com/fit/c/125/125/0*WrSrr3mpeHkyCZzh."
              }
            />
          </div>
          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={e => this.handleClick(e.target.id)}
          >
            <h5
              style={{ marginRight: "15px", fontSize: ".95em", opacity: ".54" }}
              id="follwing"
              onClick={() => this.changeTab("following")}
            >
              {this.state.following.length} Following
            </h5>
            <h5
              style={{ fontSize: ".95em", opacity: ".54" }}
              id="followers"
              onClick={() => this.changeTab("followers")}
            >
              {this.state.followers.length} Followers
            </h5>
          </div>
          {this.props.user.id === this.state.userprofile.id ? (
            <button
              onClick={() => this.allowEdit()}
              className="profile-edit-btn"
              disabled={!this.state.disabled}
            >
              Edit
            </button>
          ) : (
            <button
              onClick={() =>
                this.followUser(this.props.user.id, this.state.userprofile.id)
              }
              button
              className="profile-follow-btn"
            >
              Follow
            </button>
          )}

          {this.state.disabled === false ? (
            <div>
              <button
                onClick={() =>
                  this.submitNewBio(this.props.user.id, this.state.editbio)
                }
                className="profile-follow-btn"
              >
                Submit
              </button>
              <button
                className="profile-edit-btn"
                onClick={() => this.cancel()}
              >
                Cancel
              </button>
            </div>
          ) : (
            false
          )}
        </div>
        <div
          style={{
            marginTop: "180px",
            cursor: "pointer",
            width: "80%",
            fontSize: "16px",
            textAlign: "left",
            paddingLeft: "30px"
          }}
          onClick={e => this.changeTab(e.target.id)}
        >
          <TabHeading
            tabs={["Profile", "Claps"]}
            styles="text-align-left profile-tabs"
          />
        </div>
        {selected}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default withRouter(connect(mapStateToProps, { getUser })(ProfilePage));

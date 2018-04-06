import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducer";
import { withRouter } from "react-router-dom";
import { Menu } from "antd";
import Moment from "react-moment";
import TabHeading from "./../subcomponents/TabHeading";
import PopOver from "./../subcomponents/Popover";

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
      currentTab: "TabHeading1",
      disabled: true,
      editbio: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.followUser = this.followUser.bind(this);
    this.allowEdit = this.allowEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.submitNewBio = this.submitNewBio.bind(this);
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
    console.log(this.state);
  }
  createMarkup(str) {
    return { __html: str };
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

  render() {
    function trimmedBody(str) {
      let trimmed = str.substring(0, 100);
      trimmed.length === 100 ? (trimmed += "...") : trimmed;
      return trimmed;
    }

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

              {this.state.userprofile.bio ? (
                <input
                  placeholder={this.state.userprofile.bio}
                  value={this.state.editbio}
                  disabled={this.state.disabled}
                  onChange={e => this.handleChange(e.target.value)}
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
            >
              {this.state.following.length} Following
            </h5>
            <h5 style={{ fontSize: ".95em", opacity: ".54" }} id="followers">
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
          style={{ marginTop: "120px", cursor: "pointer" }}
          onClick={e => this.handleClick(e.target.id)}
        >
          <TabHeading tabs={["Latest", "Claps"]} styles="text-align-left" />
        </div>

        <div id="profile-tab" style={{ width: "40%" }}>
          {this.state.posts.length > 0 ? (
            this.state.posts.map((item, i) => {
              return (
                <div
                  className="single-story"
                  key={i}
                  style={{
                    border: "solid #efefef 1px",
                    textAlign: "center",
                    marginBottom: "20px"
                  }}
                >
                  <div className="profile-story-icon">
                    <img
                      className="user-image"
                      src={this.state.userprofile.avatar}
                    />
                    <div className="profile-story-name-and-date">
                      <PopOver
                        user={item}
                        name={`${this.state.userprofile.firstname} ${
                          this.state.userprofile.lastname
                        }`}
                      >
                        <h3>{`${this.state.userprofile.firstname} ${
                          this.state.userprofile.lastname
                        }`}</h3>
                      </PopOver>
                      <Moment format="MMM DD">{item.date}</Moment>
                    </div>
                  </div>
                  <h2
                    dangerouslySetInnerHTML={this.createMarkup(item.title)}
                    style={{
                      marginTop: "20px",
                      marginLeft: "10px",
                      textAlign: "left"
                    }}
                  />
                  {item.thumbnailimg ? (
                    <img
                      src={item.thumbnailimg}
                      alt="article thumbnail"
                      style={{ width: "97%", height: "25vh" }}
                    />
                  ) : (
                    false
                  )}

                  <p
                    dangerouslySetInnerHTML={this.createMarkup(
                      trimmedBody(item.body)
                    )}
                    style={{
                      fontSize: "1.2em",
                      lineHeight: "30px",
                      textAlign: "left",
                      marginLeft: "10px",
                      marginTop: "10px",
                      fontWeight: "600"
                    }}
                  />
                  {item.body.length > 305 ? (
                    <p
                      style={{
                        fontSize: ".9em",
                        textAlign: "left",
                        marginLeft: "10px"
                      }}
                    >
                      Read more...
                    </p>
                  ) : (
                    false
                  )}
                  <h4 style={{ textAlign: "left", marginLeft: "10px" }}>
                    {item.rating}
                  </h4>
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

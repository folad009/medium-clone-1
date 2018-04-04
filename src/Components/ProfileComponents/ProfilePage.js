import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducer";

class ProfilePage extends React.Component {
  componentDidMount() {
    this.props.getUser();

  }
  render() {
    return (
      <div className="profile-page-main-div">
        <div className="profile-page-header">
          <div className="hero-profile">
            <h1>
              {this.props.user.firstname
                ? `${this.props.user.firstname} ${this.props.user.lastname}`
                : "No user"}
            </h1>
            <img
              src={
                this.props.user.firstname
                  ? `${this.props.user.avatar}`
                  : "https://cdn-images-1.medium.com/fit/c/125/125/0*WrSrr3mpeHkyCZzh."
              }
              className="profile-avatar"
            />
          </div>
          <h5>4 Following</h5>
          <button>Edit</button>
        </div>
        <div className="profile-tabs">
          <h6 id="tab-heading-profile" className="profile-heading-tab">
            Profile
          </h6>
          <h6 id="tab-heading-claps" className="profile-heading-tab">
            Claps
          </h6>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getUser })(ProfilePage);

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
              {`${this.props.user.firstname} ${this.props.user.lastname}`}
            </h1>
            <img
              src="https://cdn-images-1.medium.com/fit/c/125/125/0*WrSrr3mpeHkyCZzh."
              className="profile-avatar"
            />
          </div>
          <h6>4 Following</h6>
          <button>Edit</button>
        </div>
        <span>Profile</span>
        <span>Claps</span>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getUser })(ProfilePage);

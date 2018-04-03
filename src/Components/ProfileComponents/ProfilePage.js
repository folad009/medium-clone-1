import React from "react";

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="profile-page-main-div">
        <div className="profile-page-header">
          <div className="hero-profile">
            <h1>Profile Name</h1>
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

export default ProfilePage;

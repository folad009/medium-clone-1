import React from "react";
import MainHeader from "../Components/HeaderComponents/MainHeader";
import ProfilePage from "../Components/ProfileComponents/ProfilePage";

function ProfilePageView() {
  return (
    <div className="profile-page-view-main-div">
      <MainHeader />
      <ProfilePage />
    </div>
  );
}

export default ProfilePageView;

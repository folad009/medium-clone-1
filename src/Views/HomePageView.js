import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import FeaturedComponent from "../Components/FeaturedComponent/FeaturedComponent";
import MainHeader from "../Components/HeaderComponents/MainHeader";
import NewsHomePageColumnRender from "../Components/NewsHomepageRenderComponents/NewsHomepageColumnRender";

class HomePageView extends React.Component {
  render() {
    return (
      <div className="hompage-view-main-div">
        <Link to="/new-story">Write-Story</Link>
        <button
          onClick={() =>
            axios.get("/api/login").then(response => console.log(response.data))
          }
        >
          Login
        </button>
        <MainHeader />
        <FeaturedComponent />
        <NewsHomePageColumnRender />
      </div>
    );
  }
}

export default HomePageView;

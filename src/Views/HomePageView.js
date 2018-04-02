import React from "react";
import { Link } from "react-router-dom";

import FeaturedComponent from "../Components/FeaturedComponent/FeaturedComponent";

class HomePageView extends React.Component {
  render() {
    return (
      <div className="hompage-view-temporary">
        <Link to="/new-story">Write-Story</Link>
        <FeaturedComponent/>
      </div>
    );
  }
}

export default HomePageView;

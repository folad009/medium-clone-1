import React from "react";
import { Link } from "react-router-dom";

class HomePageView extends React.Component {
  render() {
    return (
      <div>
        <Link to="/new-story">Write-Story</Link>
      </div>
    );
  }
}

export default HomePageView;

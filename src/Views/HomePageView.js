import React from "react";
import { Link } from "react-router-dom";

class HomePageView extends React.Component {
  render() {
    return <Link to="/new-story">Write-Story</Link>;
  }
}

export default HomePageView;

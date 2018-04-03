import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../ducks/reducer";

import FeaturedComponent from "../Components/FeaturedComponent/FeaturedComponent";
import MainHeader from "../Components/HeaderComponents/MainHeader";
import NewsHomePageColumnRender from "../Components/NewsHomepageRenderComponents/NewsHomepageColumnRender";

class HomePageView extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="hompage-view-main-div">
        <div className="temp-nav">
          <Link to="/new-story">Write-Story</Link>
          <Link to="/topics">Topics</Link>
          <a href={process.env.REACT_APP_LOGIN}>
            <button>Login</button>
          </a>
          <button onClick={() => console.log(this.props.user)} />
        </div>
        <MainHeader />
        <FeaturedComponent />
        <NewsHomePageColumnRender />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getUser })(HomePageView);

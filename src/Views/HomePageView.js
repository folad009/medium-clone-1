import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../ducks/reducer";

import FeaturedComponent from "../Components/FeaturedComponent/FeaturedComponent";
import MainHeader from "../Components/HeaderComponents/MainHeader";
import TopicHeaderBar from "../Components/HeaderComponents/TopicHeaderBar";
import NewsHomePageColumnRender from "../Components/NewsHomepageRenderComponents/NewsHomepageColumnRender";
import FeaturedView from "./FeaturedView.js";

class HomePageView extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="hompage-view-main-div">
        <div className="temp-nav" />
        <MainHeader />
        <TopicHeaderBar className="sticky" />
        <FeaturedView />
        <NewsHomePageColumnRender />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getUser })(HomePageView);

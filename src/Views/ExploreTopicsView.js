import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "../Components/HeaderComponents/MainHeader";
import ExploreTopicsComponent from "../Components/ExploreTopicsComponent/ExploreTopicsComponent";
import TopicHeaderBar from "../Components/HeaderComponents/TopicHeaderBar";

class ExploreTopicsView extends React.Component {
  render() {
    return (
      <div className="explore-topics-view-main-div">
        <MainHeader />
        <TopicHeaderBar />
        <ExploreTopicsComponent />
      </div>
    );
  }
}

export default ExploreTopicsView;

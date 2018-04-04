import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "../Components/HeaderComponents/MainHeader";
import ExploreTopicsComponent from "../Components/ExploreTopicsComponent/ExploreTopicsComponent";

class ExploreTopicsView extends React.Component {
  render() {
    return (
      <div className="explore-topics-view-main-div">
        <MainHeader />
        <ExploreTopicsComponent />
      </div>
    );
  }
}

export default ExploreTopicsView;
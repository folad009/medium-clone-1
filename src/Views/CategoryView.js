import React, { Component } from "react";
import MainHeader from "../Components/HeaderComponents/MainHeader";
import CategoryCard from "../Components/CardsComponents/CategoryCard";
import { withRouter } from "react-router-dom";

class CategoryView extends Component {
  componentDidMount() {}
  render() {
    const capitalizeFirstLetter = str => {
      if (str.split(" ").length === 2) {
        return str
          .split(" ")
          .map(val => val.charAt(0).toUpperCase() + val.slice(1))
          .join(" ");
      }
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return (
      <div className="category-view-main-container">
        {console.log(this.props.match.params.topic)}
        <MainHeader />
        <div className="category-view-title-follow">
          <div>
            <h1>{capitalizeFirstLetter(this.props.match.params.topic)}</h1>
            <h4>High,Low,and sideways.</h4>
          </div>
          <div>
            <button>Follow</button>
          </div>
        </div>
        <div className="related-topics">
          <h6>Related topics</h6>
          <h6>Creativity,Media,Music,Film,Art</h6>
        </div>
        <div className="for-you-render">
          <h3 id="for-you-text">For You</h3>
          <CategoryCard />
          {/* map for article category list goes here*/}
        </div>
      </div>
    );
  }
}
export default withRouter(CategoryView);

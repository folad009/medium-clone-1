import React from "react";
import "./Header.css";
import { connect } from "react-redux";
import { getCategories } from "../../ducks/reducer";
import { Link } from "react-router-dom";
import LeftArrow from "react-icons/lib/ti/chevron-left";
import RightArrow from "react-icons/lib/ti/chevron-right";

class TopicHeaderBar extends React.Component {
  constructor() {
    super();
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
  }
  componentDidMount() {
    this.props.getCategories();
  }
  clickLeft() {
    document.getElementById("topic-header-grid").classList.remove("right");
    document.getElementById("topic-header-grid").classList.add("left");
  }
  clickRight() {
    document.getElementById("topic-header-grid").classList.remove("left");
    document.getElementById("topic-header-grid").classList.add("right");
  }
  render() {
    const capitalizeAll = str => {
      return str.toUpperCase();
    };
    const categoryReel =
      this.props.categories.length > 0
        ? this.props.categories.map((val, index) => (
            <Link
              to={`/topic/${val.name}`}
              key={index}
              className="topic-nav-link"
            >
              {capitalizeAll(val.name)}
            </Link>
          ))
        : "Loading";
    return (
      <div className="topic-header-bar-main-div">
        <div className="topic-header-bar">
          <LeftArrow
            id="leftArrow"
            className="topic-header-arrow left"
            onClick={() => {
              this.clickLeft();
            }}
          />
          <div id="topic-header-grid" className="topic-header-grid">
            <Link to={"/"} className="topic-nav-link">
              Home
            </Link>
            {categoryReel}
            <Link to={"/topics"} className="topic-nav-link">
              More
            </Link>
          </div>
          <RightArrow
            id="rightArrow"
            className="topic-header-arrow right"
            onClick={() => this.clickRight()}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getCategories })(TopicHeaderBar);

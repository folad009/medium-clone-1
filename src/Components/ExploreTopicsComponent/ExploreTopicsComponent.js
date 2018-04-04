import React from "react";
import TopicCard from "./TopicCard";
import { connect } from "react-redux";
import { getCategories } from "../../ducks/reducer";

class ExploreTopicsComponent extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    let topicReel =
      this.props.categories.length > 0
        ? this.props.categories
            .sort((a, b) => a.id - b.id)
            .map((val, index) => {
              return (
                <TopicCard
                  name={val.name}
                  key={index}
                  img={val.image}
                  className="topic-card"
                />
              );
            })
        : "Loading";
    return (
      <div className="explore-topics-main-div">
        <h1>Explore Topics</h1>
        <div className="topic-header">Arts & Entertainment</div>
        <div className="topic-card-gallery">{topicReel}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getCategories })(
  ExploreTopicsComponent
);

import React from "react";
import TopicCard from "./TopicCard";
import TabHeading from "../subcomponents/TabHeading";
import { connect } from "react-redux";
import { getCategories, getUserInterests } from "../../ducks/reducer";

class ExploreTopicsComponent extends React.Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getUserInterests(this.props.user.id);
  }
  render() {
    let topicReel =
      this.props.categories.length > 0
        ? this.props.categories.map((val, index) => {
            return (
              <TopicCard
                name={val.name}
                key={index}
                img={val.image}
                id={val.id}
                className="topic-card"
              />
            );
          })
        : "Loading";
    return (
      <div className="explore-topics-main-div">
        <div className="explore-topics-main-title">Explore Topics</div>
        <TabHeading
          tabs={["Arts & Entertainment"]}
          styles={"font-weight-medium color-black"}
        />
        <div className="topic-card-gallery">{topicReel}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getCategories, getUserInterests })(
  ExploreTopicsComponent
);

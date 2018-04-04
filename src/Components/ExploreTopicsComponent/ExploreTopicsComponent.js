import React from "react";
import TopicCard from "./TopicCard";

class ExploreTopicsComponent extends React.Component {
  render() {
    return (
      <div className="explore-topics-main-div">
        <h1>Explore Topics</h1>
        <div className="topic-header">Arts & Entertainment</div>
        <div className="topic-card-gallery">
          <TopicCard className="topic-card" />
          <TopicCard className="topic-card" />
          <TopicCard className="topic-card" />
          <TopicCard className="topic-card" />
          <TopicCard className="topic-card" />
          <TopicCard className="topic-card" />
          <TopicCard className="topic-card" />
          <TopicCard className="topic-card" />
          <TopicCard className="topic-card" />
          <TopicCard className="topic-card" />
          <TopicCard className="topic-card" />
          <TopicCard className="topic-card" />
        </div>
      </div>
    );
  }
}

export default ExploreTopicsComponent;

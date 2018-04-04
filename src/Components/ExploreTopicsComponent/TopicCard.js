import React from "react";
import "./ExploreTopic.css";

function TopicCard(props) {
  return (
    <div className="topic-card">
      <div className="card-header">
        <h2>Title</h2>
        <div className="topic-add-button">+</div>
      </div>
      <div
        className="topic-card-img"
        style={{
          backgroundImage: `url(http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg)`
        }}
      />
    </div>
  );
}

export default TopicCard;

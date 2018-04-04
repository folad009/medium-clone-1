import React from "react";
import "./ExploreTopic.css";

function TopicCard(props) {
  const capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div className="topic-card">
      <div className="card-header">
        <h2>{capitalizeFirstLetter(props.name)}</h2>
        <div className="topic-add-button">+</div>
      </div>
      <div
        className="topic-card-img"
        style={{
          backgroundImage: `url(${props.img})`
        }}
      />
    </div>
  );
}

export default TopicCard;

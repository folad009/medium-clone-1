import React from "react";
import "./ExploreTopic.css";
import { Link } from "react-router-dom";

function TopicCard(props) {
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
    <Link to={`/topic/${props.name}`}>
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
    </Link>
  );
}

export default TopicCard;

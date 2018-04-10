import React from "react";
import "./ExploreTopic.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addUserInterest, removeUserInterest } from "../../ducks/reducer";
import Plus from "react-icons/lib/fa/plus";
import Checkmark from "react-icons/lib/fa/check";
import swal from "sweetalert";

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
  let topicButton = props.userInterests.find(
    val => val.category == props.id
  ) ? (
    <div
      className="topic-add-button"
      onClick={() => props.removeUserInterest(props.user.id, props.id)}
    >
      <Checkmark />
    </div>
  ) : (
    <div
      className="topic-add-button"
      onClick={() => {
        if (!props.user.id) {
          swal({ text: "Sign-in" });
          return;
        }
        props.addUserInterest(props.user.id, props.id);
      }}
    >
      <Plus />
    </div>
  );
  return (
    <div className="topic-card">
      <div className="card-header">
        {console.log(props.userInterests)}
        <h2>{capitalizeFirstLetter(props.name)}</h2>
        {topicButton}
      </div>
      <Link to={`/topic/${props.name}/${props.id}`}>
        <div
          className="topic-card-img"
          style={{
            backgroundImage: `url(${props.img})`
          }}
        />
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  addUserInterest,
  removeUserInterest
})(TopicCard);

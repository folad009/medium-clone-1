import React from "react";
import { Link } from "react-router-dom";

function CategoryCard(props) {
  let shortenDescription = function(str) {
    let periodIndex = str
      .split("")
      .findIndex(val => val === "." || val === "?" || val === "!");
    let newStr = str
      .split("")
      //find end of first sentence and slice
      .slice(0, periodIndex + 1)
      // make sure new sentence is 51 characters long
      .slice(0, 51);
    for (let i = newStr.length - 1; i > 0; i--) {
      if (newStr[i] === "!" || newStr[i] === "." || newStr[i] === "?") {
        return newStr.join("");
      }
      if (newStr[i] === " ") {
        newStr.pop();
        newStr.push("...");
        return newStr.join("");
      } else {
        newStr.pop();
      }
    }
  };
  return (
    <div className="category-card-main-div">
      <Link to={`/story-view/${props.id}`}>
        <div
          className="category-card-image"
          style={{ backgroundImage: `url(${props.image})` }}
        />
      </Link>
      <div className="category-card-right-div">
        <div className="category-card-info">
          <h5>story for members</h5>
          <Link to={`/story-view/${props.id}`}>
            <h1>{props.title}</h1>
          </Link>
          <p>
            On March 24th of 1874 a boy named Erik Weisz was born in Budapest.
            He came to America four years later, being renamed Ehrich Weiss. In
            1888…
          </p>
          <div className="category-card-user-info-save">
            <div
              className="user-image"
              style={{
                backgroundImage: `url(${props.userImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            />
            <h6>{`${props.firstname} ${props.lastname}`}</h6>
            <img className="user-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CategoryCard;

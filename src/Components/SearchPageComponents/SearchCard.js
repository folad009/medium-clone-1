import React from "react";
import { Link } from "react-router-dom";

class SearchCard extends React.Component {
  render() {
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
    let shortDescription = shortenDescription(this.props.body);

    return (
      <div className="search-card">
        <div className="search-card-title">
          <div className="search-card-face-icon" />
          <div className="search-card-title-header">
            <div>
              <h4 className="search-card-title-name">
                {this.props.authorName}
              </h4>
            </div>
            <p className="search-card-time-stamp">{this.props.date}}</p>
          </div>
        </div>
        <div className="search-card-content">
          <Link to={`/story-view/${this.props.id}`}>
            <div className="search-card-inner-content">
              <div
                className="search-card-image"
                style={{ backgroundImage: `url(${this.props.img})` }}
              />
              <h1 className="search-card-article-title">{this.props.title}</h1>
              <h3 className="search-card-article-description">
                {shortDescription}
              </h3>
            </div>
          </Link>
        </div>
        <div className="search-card-read-more">
          <Link to={`/story-view/${this.props.id}`}>Read more...</Link>
        </div>
        <div className="search-card-claps-and-responses">
          <div className="search-card-claps">clap 35K</div>
          <div className="search-card-response-and-save">
            665 responses save
          </div>
        </div>
      </div>
    );
  }
}

export default SearchCard;

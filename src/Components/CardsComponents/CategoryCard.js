import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToReadingList } from "../../ducks/reducer";
import Bookmark from "react-icons/lib/fa/bookmark-o";
import SavedBookmark from "react-icons/lib/fa/bookmark";
import swal from "sweetalert";

class CategoryCard extends React.Component {
  constructor() {
    super();
    this.state = {
      saved: false
    };
  }
  componentWillUnmount() {
    this.state.saved
      ? this.props.addToReadingList(this.props.user.id, this.props.id)
      : false;
  }
  render() {
    let shortenDescription = function(str) {
      let newStr = str
        .split("")
        // make sure new sentence is 121 characters long
        .slice(0, 121);
      for (let i = newStr.length - 1; i > 0; i--) {
        if (newStr[i] === " ") {
          newStr.pop();
          newStr.push("...");
          return newStr.join("");
        } else {
          newStr.pop();
        }
      }
    };
    let shorterDescription = shortenDescription(this.props.body);
    return (
      <div className="category-card-main-div">
        <Link to={`/story-view/${this.props.id}`}>
          <div
            className="category-card-image"
            style={{
              backgroundImage: `url(${this.props.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
        </Link>
        <div className="category-card-right-div">
          <div className="category-card-info">
            <h5>story for members</h5>
            <Link to={`/story-view/${this.props.id}`}>
              <h1>{this.props.title}</h1>
            </Link>
            <p>{shorterDescription}</p>
            <div className="category-card-user-info-save">
              <Link to={`/user/${this.props.userid}`}>
                <div
                  className="user-image"
                  style={{
                    backgroundImage: `url(${this.props.userImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                />
              </Link>
              <Link to={`/user/${this.props.userid}`}>
                <h6>{`${this.props.firstname} ${this.props.lastname}`}</h6>
              </Link>
              <div
                onClick={() =>
                  this.props.user.id
                    ? this.setState({ saved: !this.state.saved })
                    : swal({ text: "Sign in to add items to reading list" })
                }
              >
                {this.state.saved ? (
                  <SavedBookmark
                    size={22}
                    className="category-card-bookmark-button"
                    color={`rgba(0, 0, 0, .54)`}
                  />
                ) : (
                  <Bookmark
                    size={22}
                    className="category-card-bookmark-button"
                    color={`rgba(0, 0, 0, .54)`}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { addToReadingList })(CategoryCard);

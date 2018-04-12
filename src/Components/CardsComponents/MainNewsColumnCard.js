import React from "react";
import { connect } from "react-redux";
import BookmarkIcon from "react-icons/lib/io/android-bookmark";
import Bookmark from "react-icons/lib/fa/bookmark-o";
import SavedBookmark from "react-icons/lib/fa/bookmark";
import swal from "sweetalert";
import {
  getReadingList,
  addToReadingList,
  deleteFromReadingList
} from "../../ducks/reducer";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import PopOver from "./../subcomponents/Popover";

class NewsHomepageColumnCard extends React.Component {
  constructor() {
    super();
  }
  render() {
    function createMarkup(str) {
      return { __html: str };
    }

    return (
      <div className="news-home-page-column-card-main-div">
        <div className="news-home-page-column-card-info">
          <h1>{this.props.articleTitle}</h1>
          <p dangerouslySetInnerHTML={createMarkup(this.props.body)} />
          <Link
            to={`/user/${this.props.userid}`}
            style={{ color: "black", opacity: ".56" }}
          >
            <PopOver
              activeUser={this.props.user}
              user={this.props}
              name={`${this.props.articleAuthorFirstName} ${
                this.props.articleAuthorLastName
              }`}
            >
              <p id="author-name">{`${this.props.articleAuthorFirstName} ${
                this.props.articleAuthorLastName
              }`}</p>
            </PopOver>
          </Link>
          <p id="time-stamp">
            <Moment format="MMM DD">{this.props.articleDate}</Moment>
          </p>
        </div>
        {this.props.saved ? (
          <div id="save-icon-column-home">
            <SavedBookmark style={{height:'40px',width:'40px'}}
              onClick={() =>
                this.props
                  .deleteFromReadingList(
                    this.props.user.id,
                    this.props.articleId
                  )
                  .then(response =>
                    this.props.getReadingList(this.props.user.id)
                  )
              }
              style={{ height: "40px", width: "40px" }}
            />
          </div>
        ) : (
          <div id="save-icon-column-home">
            <Bookmark style={{height:'40px',width:'40px'}}
              onClick={() => {
                if (!this.props.user.id) {
                  swal({
                    text: "Sign In to Access Your Personal Reading List"
                  });
                } else {
                  this.props
                    .addToReadingList(this.props.user.id, this.props.articleId)
                    .then(response => {
                      console.log("Added", response);
                      this.props.getReadingList(this.props.user.id);
                    });
                }
              }}
              style={{ height: "40px", width: "40px" }}
            />
          </div>
        )}
        <div
          style={{
            height: "auto",
            width: "150px",
            backgroundImage: `url(${this.props.articleImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, {
  addToReadingList,
  getReadingList,
  deleteFromReadingList
})(NewsHomepageColumnCard);

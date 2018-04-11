import React from "react";
import PopOver from "./../subcomponents/Popover";
import Moment from "react-moment";
import { connect } from "react-redux";

function NewsHomepageColumnCard(props) {
  return (
    <div className="news-home-page-column-card-main-div">
      <div className="news-home-page-column-card-info">
        <h1>{props.articleTitle}</h1>
        <p>Using pytubes,numpy and other stuff</p>
        <PopOver
          activeUser={props.user}
          user={props}
          name={`${props.articleAuthorFirstName} ${
            props.articleAuthorLastName
          }`}
        >
          <p id="author-name">{`${props.articleAuthorFirstName} ${
            props.articleAuthorLastName
          }`}</p>
        </PopOver>
        <p id="time-stamp">
          <Moment format="MMM DD">{props.articleDate}</Moment>
        </p>
      </div>
      <div>
        <button
          onClick={() => props.addToReadingList(props.userid, props.articleId)}
        >
          Save
        </button>
      </div>
      {props.articleImg ? (
        <div
          style={{
            height: "auto",
            width: "150px",
            backgroundImage: `url(${props.articleImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      ) : (
        <div
          style={{
            height: "auto",
            width: "150px",
            backgroundImage: `url(https://images.freeimages.com/images/large-previews/7f0/pl-glasses-1241050.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      )}
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(NewsHomepageColumnCard);

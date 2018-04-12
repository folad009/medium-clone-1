import React from "react";
import PopOver from "./../subcomponents/Popover";
import Moment from "react-moment";
import { Link } from "react-router-dom";

function Latest(props) {
  function trimmedBody(str) {
    let trimmed = str.substring(0, 100);
    trimmed.length === 100 ? (trimmed += "...") : trimmed;
    return trimmed;
  }

  function createMarkup(str) {
    return { __html: str };
  }
  return (
    <div className="profile-tab" style={{ width: "80%" }}>
      <h2>Latest</h2>
      {props.posts.length > 0 ? (
        props.posts.map((item, i) => {
          return (
            <div
              className="single-story"
              key={i}
              style={{
                border: "solid #efefef 1px",
                textAlign: "center",
                marginBottom: "20px"
              }}
            >
              <div className="profile-story-icon">
                <img className="user-image" src={props.user.avatar} />
                <div className="profile-story-name-and-date">
                  <PopOver
                    user={item}
                    name={`${props.user.firstname} ${props.user.lastname}`}
                  >
                    <h3>{`${props.user.firstname} ${props.user.lastname}`}</h3>
                  </PopOver>
                  <Moment format="MMM DD">{item.date}</Moment>
                </div>
              </div>
              <Link to={`/story-view/${item.postid}`}>
                <h2
                  dangerouslySetInnerHTML={createMarkup(item.title)}
                  style={{
                    marginTop: "20px",
                    marginLeft: "10px",
                    textAlign: "left"
                  }}
                />
              </Link>
              <div
                style={{
                  backgroundImage: `url(${item.thumbnailimg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "95%",
                  height: "200px",
                  margin: "auto"
                }}
              />
              <p
                dangerouslySetInnerHTML={createMarkup(trimmedBody(item.body))}
                style={{
                  fontSize: "1.2em",
                  lineHeight: "30px",
                  textAlign: "left",
                  marginLeft: "10px",
                  marginTop: "10px",
                  fontWeight: "600"
                }}
              />
              {item.body.length > 305 ? (
                <p
                  style={{
                    fontSize: ".9em",
                    textAlign: "left",
                    marginLeft: "10px"
                  }}
                >
                  Read more...
                </p>
              ) : (
                false
              )}
              <h4 style={{ textAlign: "left", marginLeft: "10px" }}>
                {item.rating}
              </h4>
            </div>
          );
        })
      ) : (
        <h1 style={{ paddingTop: "20px" }}>
          "You have not made any posts yet."
        </h1>
      )}
    </div>
  );
}

export default Latest;

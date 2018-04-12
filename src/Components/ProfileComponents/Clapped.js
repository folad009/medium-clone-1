import React from "react";
import PopOver from "./../subcomponents/Popover";
import Moment from "react-moment";

function Clapped(props) {
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
      <h2> {`Claps by ${props.user.firstname} ${props.user.lastname}`}</h2>
      {props.claps.length > 0 ? (
        props.claps.map((item, i) => {
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
                  {console.log(props)}
                  {console.log(item)}
                  <PopOver
                    user={item}
                    name={`${props.user.firstname} ${props.user.lastname}`}
                  >
                    <h3>{`${props.user.firstname} ${props.user.lastname}`}</h3>
                  </PopOver>
                  <Moment format="MMM DD">{item.date}</Moment>
                </div>
              </div>
              <h2
                dangerouslySetInnerHTML={createMarkup(item.title)}
                style={{
                  marginTop: "20px",
                  marginLeft: "10px",
                  textAlign: "left"
                }}
              />
              {item.thumbnailimg ? (
                <img
                  src={item.thumbnailimg}
                  alt="article thumbnail"
                  style={{ width: "97%", height: "25vh" }}
                />
              ) : (
                false
              )}

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
          "You have not clapped any posts yet"
        </h1>
      )}
    </div>
  );
}

export default Clapped;

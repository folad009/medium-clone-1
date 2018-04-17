import React from "react";
import "../Components/FeaturedViewComponents/FeaturedView.css";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import PopOver from "./../Components/subcomponents/Popover";

class FeaturedView extends React.Component {
  constructor() {
    super();
    this.state = {
      featuredPosts: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/featured")
      .then(response => this.setState({ featuredPosts: response.data }));
  }
  createMarkup(str) {
    return { __html: str };
  }
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
    let posts = this.state.featuredPosts;
    if (this.state.featuredPosts.length > 0) {
      return (
        <div className="featured-view-main-div featured-grid">
          <div className="big-picture grid-0">
            <div
              className="big-picture-image grid-0a"
              style={{
                backgroundImage: `url(${
                  this.state.featuredPosts[0].thumbnailimg
                })`
              }}
            />
            <div className="big-picture-text grid-0b">
              <div className="big-picture-text-tab">
                <h4>FEATURED</h4>
              </div>
              <Link to={`/story-view/${posts[0].postid}`}>
                <div className="big-picture-description">
                  <div
                    className="featured-card-title"
                    dangerouslySetInnerHTML={this.createMarkup(posts[0].title)}
                  />
                  <div
                    className="featured-card-text"
                    dangerouslySetInnerHTML={this.createMarkup(
                      shortenDescription(posts[0].body)
                    )}
                  />
                </div>
              </Link>
              <Link
                style={{ color: "black", opacity: ".56" }}
                to={`/user/${posts[0].userid}`}
              >
                <PopOver
                  activeUser={this.props.user}
                  user={this.state.featuredPosts[0]}
                  name={`${this.state.featuredPosts[0].firstname} ${
                    this.state.featuredPosts[0].lastname
                  }`}
                >
                  {" "}
                  <h6>{posts[0].firstname + " " + posts[0].lastname}</h6>
                </PopOver>
              </Link>
            </div>
          </div>
          <div className="small-picture grid-a">
            <Link to={`/story-view/${posts[1].postid}`}>
              <div
                className="featured-small-picture picture-a"
                style={{ backgroundImage: `url(${posts[1].thumbnailimg})` }}
              />
            </Link>
            <div className="small-picture-text">
              <Link to={`/story-view/${posts[1].postid}`}>
                <div
                  className="featured-small-card-title"
                  dangerouslySetInnerHTML={this.createMarkup(posts[1].title)}
                />
                <div
                  className="featured-card-text"
                  dangerouslySetInnerHTML={this.createMarkup(
                    shortenDescription(posts[1].body)
                  )}
                />
              </Link>
              <Link
                style={{ color: "black", opacity: ".56" }}
                to={`/user/${posts[1].userid}`}
              >
                <PopOver
                  activeUser={this.props.user}
                  user={this.state.featuredPosts[1]}
                  name={`${this.state.featuredPosts[1].firstname} ${
                    this.state.featuredPosts[1].lastname
                  }`}
                >
                  {" "}
                  <h6>{posts[1].firstname + " " + posts[1].lastname}</h6>
                </PopOver>
              </Link>
            </div>
          </div>
          <div className="small-picture grid-b">
            <Link to={`/story-view/${posts[2].postid}`}>
              <div
                className="featured-small-picture picture-b"
                style={{ backgroundImage: `url(${posts[2].thumbnailimg})` }}
              />
            </Link>
            <div className="small-picture-text">
              <Link to={`/story-view/${posts[2].postid}`}>
                <div
                  className="featured-small-card-title"
                  dangerouslySetInnerHTML={this.createMarkup(posts[2].title)}
                />
                <div
                  className="featured-card-text"
                  dangerouslySetInnerHTML={this.createMarkup(
                    shortenDescription(posts[2].body)
                  )}
                />
              </Link>
              <Link
                style={{ color: "black", opacity: ".56" }}
                to={`/user/${posts[2].userid}`}
              >
                <PopOver
                  activeUser={this.props.user}
                  user={this.state.featuredPosts[2]}
                  name={`${this.state.featuredPosts[2].firstname} ${
                    this.state.featuredPosts[2].lastname
                  }`}
                >
                  {" "}
                  <h6>{posts[2].firstname + " " + posts[2].lastname}</h6>
                </PopOver>
              </Link>
            </div>
          </div>
          <div className="small-picture grid-c">
            <Link to={`/story-view/${posts[3].postid}`}>
              <div
                className="featured-small-picture picture-c"
                style={{ backgroundImage: `url(${posts[3].thumbnailimg})` }}
              />
            </Link>
            <div className="small-picture-text">
              <Link to={`/story-view/${posts[3].postid}`}>
                <div
                  className="featured-small-card-title"
                  dangerouslySetInnerHTML={this.createMarkup(posts[3].title)}
                />
                <div
                  className="featured-card-text"
                  dangerouslySetInnerHTML={this.createMarkup(
                    shortenDescription(posts[3].body)
                  )}
                />
              </Link>
              <Link
                style={{ color: "black", opacity: ".56" }}
                to={`/user/${posts[3].userid}`}
              >
                <PopOver
                  activeUser={this.props.user}
                  user={this.state.featuredPosts[3]}
                  name={`${this.state.featuredPosts[3].firstname} ${
                    this.state.featuredPosts[3].lastname
                  }`}
                >
                  {" "}
                  <h6>{posts[3].firstname + " " + posts[3].lastname}</h6>
                </PopOver>
              </Link>
            </div>
          </div>
          <div className="small-picture grid-d">
            <Link to={`/story-view/${posts[4].postid}`}>
              <div
                className="featured-small-picture picture-d"
                style={{ backgroundImage: `url(${posts[4].thumbnailimg})` }}
              />
            </Link>
            <div className="small-picture-text">
              <Link to={`/story-view/${posts[4].postid}`}>
                <div
                  className="featured-small-card-title"
                  dangerouslySetInnerHTML={this.createMarkup(posts[4].title)}
                />
                <div
                  className="featured-card-text"
                  dangerouslySetInnerHTML={this.createMarkup(
                    shortenDescription(posts[4].body)
                  )}
                />
              </Link>
              <Link
                style={{ color: "black", opacity: ".56" }}
                to={`/user/${posts[4].userid}`}
              >
                <PopOver
                  activeUser={this.props.user}
                  user={this.state.featuredPosts[4]}
                  name={`${this.state.featuredPosts[4].firstname} ${
                    this.state.featuredPosts[4].lastname
                  }`}
                >
                  {" "}
                  <h6>{posts[4].firstname + " " + posts[4].lastname}</h6>
                </PopOver>
              </Link>
            </div>
          </div>
          <div className="story-reel grid-e">
            <div className="featured-extra-link">
              <Link to={`/story-view/${posts[5].postid}`}>
                <div
                  className="featured-tiny-card-title"
                  dangerouslySetInnerHTML={this.createMarkup(posts[5].title)}
                />
              </Link>
              <Link
                to={`/user/${posts[5].userid}`}
                style={{ color: "black", opacity: ".56" }}
              >
                <PopOver
                  activeUser={this.props.user}
                  user={this.state.featuredPosts[5]}
                  name={`${this.state.featuredPosts[5].firstname} ${
                    this.state.featuredPosts[5].lastname
                  }`}
                >
                  {" "}
                  <h6>{`${posts[5].firstname} ${posts[5].lastname}`}</h6>
                </PopOver>
              </Link>
            </div>
            <div className="tiny-faded-border" />
            <div className="featured-extra-link">
              <Link to={`/story-view/${posts[6].postid}`}>
                <div
                  className="featured-tiny-card-title"
                  dangerouslySetInnerHTML={this.createMarkup(posts[6].title)}
                />
              </Link>
              <Link
                to={`/user/${posts[6].userid}`}
                style={{ color: "black", opacity: ".56" }}
              >
                <PopOver
                  activeUser={this.props.user}
                  user={this.state.featuredPosts[6]}
                  name={`${this.state.featuredPosts[6].firstname} ${
                    this.state.featuredPosts[6].lastname
                  }`}
                >
                  <h6>{`${posts[6].firstname} ${posts[6].lastname}`}</h6>
                </PopOver>
              </Link>
            </div>
            <div className="tiny-faded-border" />
            <div className="featured-extra-link">
              <Link to={`/story-view/${posts[7].postid}`}>
                <div
                  className="featured-tiny-card-title"
                  dangerouslySetInnerHTML={this.createMarkup(posts[7].title)}
                />
              </Link>
              <Link
                to={`/user/${posts[7].userid}`}
                style={{ color: "black", opacity: ".56" }}
              >
                <PopOver
                  activeUser={this.props.user}
                  user={this.state.featuredPosts[7]}
                  name={`${this.state.featuredPosts[7].firstname} ${
                    this.state.featuredPosts[7].lastname
                  }`}
                >
                  {" "}
                  <h6>{`${posts[7].firstname} ${posts[7].lastname}`}</h6>
                </PopOver>
              </Link>
            </div>
            <div className="tiny-faded-border" />
          </div>
        </div>
      );
    }
    return <div className="featured-view-main-div featured-grid">Loading"</div>;
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(FeaturedView);

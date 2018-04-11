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
  render() {
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
              <div className="big-picture-description">
                <h1>{this.state.featuredPosts[0].title}</h1>
                <p>Something to hold space</p>
              </div>

              <h6>
                <PopOver
                  activeUser={this.props.user}
                  user={this.state.featuredPosts[0]}
                  name={`${this.state.featuredPosts[0].firstname} ${
                    this.state.featuredPosts[0].lastname
                  }`}
                >
                  {this.state.featuredPosts[0].firstname +
                    " " +
                    this.state.featuredPosts[0].lastname}
                </PopOver>{" "}
              </h6>
            </div>
          </div>
          <div className="small-picture grid-a">
            <div
              className="featured-small-picture picture-a"
              style={{
                backgroundImage: `url(${
                  this.state.featuredPosts[1].thumbnailimg
                })`
              }}
            />
            <div className="small-picture-text">
              <h2>{this.state.featuredPosts[1].title}</h2>
              <p>Something to hold space</p>

              <h6>
                <PopOver
                  activeUser={this.props.user}
                  user={this.state.featuredPosts[1]}
                  name={`${this.state.featuredPosts[1].firstname} ${
                    this.state.featuredPosts[1].lastname
                  }`}
                >
                  {this.state.featuredPosts[1].firstname +
                    " " +
                    this.state.featuredPosts[1].lastname}
                </PopOver>{" "}
              </h6>
            </div>
          </div>
          <div className="small-picture grid-b">
            <div
              className="featured-small-picture picture-b"
              style={{
                backgroundImage: `url(${
                  this.state.featuredPosts[2].thumbnailimg
                })`
              }}
            />
            <div className="small-picture-text">
              <h2>{this.state.featuredPosts[2].title}</h2>
              <p>Something to hold space</p>

              <h6>
                <PopOver
                  activeUser={this.props.user}
                  user={this.state.featuredPosts[2]}
                  name={`${this.state.featuredPosts[2].firstname} ${
                    this.state.featuredPosts[2].lastname
                  }`}
                >
                  {this.state.featuredPosts[2].firstname +
                    " " +
                    this.state.featuredPosts[2].lastname}
                </PopOver>{" "}
              </h6>
            </div>
          </div>
          <div className="small-picture grid-c">
            <div
              className="featured-small-picture picture-c"
              style={{
                backgroundImage: `url(${
                  this.state.featuredPosts[3].thumbnailimg
                })`
              }}
            />
            <div className="small-picture-text">
              <h2>{this.state.featuredPosts[3].title}</h2>
              <p>Something to hold space</p>

              <h6>
                <PopOver
                  activeUser={this.props.user}
                  user={this.state.featuredPosts[3]}
                  name={`${this.state.featuredPosts[3].firstname} ${
                    this.state.featuredPosts[3].lastname
                  }`}
                >
                  {this.state.featuredPosts[3].firstname +
                    " " +
                    this.state.featuredPosts[3].lastname}
                </PopOver>{" "}
              </h6>
            </div>
          </div>
          <div className="small-picture grid-d">
            <div
              className="featured-small-picture picture-d"
              style={{
                backgroundImage: `url(${
                  this.state.featuredPosts[4].thumbnailimg
                })`
              }}
            />
            <div className="small-picture-text">
              <h2>{this.state.featuredPosts[4].title}</h2>
              <p>Something to hold space</p>

              <h6>
                <PopOver
                  activeUser={this.props.user}
                  user={this.state.featuredPosts[4]}
                  name={`${this.state.featuredPosts[4].firstname} ${
                    this.state.featuredPosts[4].lastname
                  }`}
                >
                  {this.state.featuredPosts[4].firstname +
                    " " +
                    this.state.featuredPosts[4].lastname}
                </PopOver>{" "}
              </h6>
            </div>
          </div>
          <div className="story-reel grid-e" />
        </div>
      );
    }
    return <div className="featured-view-main-div featured-grid">Loading"</div>;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(FeaturedView);

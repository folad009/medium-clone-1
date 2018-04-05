import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";

class LatestTab extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    console.log(this.props.user);
    axios
      .get(`/api/userposts/${this.props.user}`)
      .then(response => this.setState({ posts: response.data }))
      .catch(() => []);
  }

  createMarkup(str) {
    return { __html: str };
  }

  render() {
    function trimmedBody(str) {
      let trimmed = str.substring(0, 305);
      trimmed.length === 305 ? (trimmed += "...") : trimmed;
      return trimmed;
    }

    let profile =
      this.state.posts.length > 0 ? (
        <div id="profile-tab">
          {this.state.posts.map((item, i) => {
            return (
              <div className="single-story" key={i}>
                {console.log(this.props)}
                <img className="user-image" src={this.props.user.avatar} />
                <h3>{`${this.props.user.firstname} ${
                  this.props.user.lastname
                }`}</h3>
                <Moment format="MMM DD">{item.date}</Moment>
                <h2 dangerouslySetInnerHTML={this.createMarkup(item.title)} />
                <p
                  dangerouslySetInnerHTML={this.createMarkup(
                    trimmedBody(item.body)
                  )}
                />
                {item.body.length > 305 ? <p>Read more...</p> : false}
                <h4>{item.rating}</h4>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 style={{ paddingTop: "20px" }}>
          {console.log(this.props)}
          {console.log(this.state)}
          "You have not made any posts yet."
        </h1>
      );
    return <div>{profile}</div>;
  }
}

export default LatestTab;

import React, { Component } from "react";
import MainHeader from "../Components/HeaderComponents/MainHeader";
import CategoryCard from "../Components/CardsComponents/CategoryCard";
import { connect } from "react-redux";
import {
  getAllPostCategory,
  addUserInterest,
  removeUserInterest,
  getUserInterests
} from "../ducks/reducer";
import { withRouter, Link } from "react-router-dom";
import TabHeading from "../Components/subcomponents/TabHeading";
import swal from "sweetalert";

class CategoryView extends Component {
  constructor() {
    super();
    this.state = {
      categoryId: ""
    };
  }
  componentDidMount() {
    if (this.props.user.id) this.props.getUserInterests(this.props.user.id);
    this.props
      .getAllPostCategory(`${this.props.match.params.id}`)
      .then(response => {
        this.setState({ categoryId: this.props.match.params.id });
      });
  }
  componentDidUpdate() {
    if (this.props.match.params.id !== this.state.categoryId) {
      this.props
        .getAllPostCategory(`${this.props.match.params.id}`)
        .then(response =>
          this.setState({ categoryId: this.props.match.params.id })
        );
    }
  }
  render() {
    let followButton = this.props.userInterests.find(
      val => val.category == this.props.match.params.id
    ) ? (
      <div
        className="category-view-unfollow-button"
        onClick={() =>
          this.props.removeUserInterest(
            this.props.user.id,
            this.state.categoryId
          )
        }
      >
        Following
      </div>
    ) : (
      <div
        className="category-view-follow-button"
        onClick={() =>
          this.props.user.id
            ? this.props.addUserInterest(
                this.props.user.id,
                this.state.categoryId
              )
            : swal({ text: "Sign in to follow your favorite categories" })
        }
      >
        Follow
      </div>
    );
    const capitalizeFirstLetter = str => {
      if (str.split(" ").length === 2) {
        return str
          .split(" ")
          .map(val => val.charAt(0).toUpperCase() + val.slice(1))
          .join(" ");
      }
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    let categoryReel =
      this.props.posts.length > 0
        ? this.props.posts.map((val, index) => {
            return (
              <CategoryCard
                id={val.id}
                userid={val.userid}
                title={val.title}
                firstname={val.firstname}
                lastname={val.lastname}
                image={val.thumbnailimg}
                userImage={val.avatar}
                date={val.date}
                rating={val.rating}
                body={val.body}
              />
            );
          })
        : "Loading ...";
    return (
      <div className="category-view-main-container">
        <MainHeader />
        <div className="category-view-header">
          <div className="category-view-title-follow">
            <div className="category-view-header-description">
              <h1>{capitalizeFirstLetter(this.props.match.params.topic)}</h1>
              <h4>High,Low,and sideways.</h4>
            </div>
            {followButton}
          </div>
          <div className="related-topics">
            <h6 className="category-view-related-topics">Related topics</h6>
            <h6 className="related-topics-links">
              <Link to="/topic/business/6">Business</Link>,{" "}
              <Link to="/topic/technology/7">Technology</Link>,{" "}
              <Link to="/topic/music/3">Music</Link>,{" "}
              <Link to="/topic/politics/11">Politics</Link>,
              <Link to="/topic/art/1">Art</Link>
            </h6>
          </div>
        </div>
        <div className="for-you-render">
          <TabHeading tabs={["For You"]} />
          <div className="for-you-reel">{categoryReel}</div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default withRouter(
  connect(mapStateToProps, {
    getAllPostCategory,
    addUserInterest,
    removeUserInterest,
    getUserInterests
  })(CategoryView)
);

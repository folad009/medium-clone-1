import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./SearchPage.css";
import SearchCard from "./SearchCard";
import { connect } from "react-redux";
import { getAllPosts } from "../../ducks/reducer";

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      userInput: ""
    };
  }
  componentDidMount() {
    this.props
      .getAllPosts()
      .then(response => this.setState({ posts: this.props.posts }));
  }
  filter() {}
  render() {
    let searchReel =
      this.state.posts.length > 0
        ? this.state.posts.map((val, index) => (
            <SearchCard
              authorName={`${val.firstname} ${val.lastname}`}
              body={val.body}
              title={val.title}
              img={val.thumbnailimg}
              date={val.date}
              key={index}
              id={val.id}
            />
          ))
        : "";
    return (
      <div className="search-page-main-div">
        <h1>Search</h1>

        {searchReel}
        {console.log(this.props.location)}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default withRouter(
  connect(mapStateToProps, { getAllPosts })(SearchPage)
);

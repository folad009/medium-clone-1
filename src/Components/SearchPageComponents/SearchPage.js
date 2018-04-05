import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./SearchPage.css";
import SearchCard from "./SearchCard";

class SearchPage extends React.Component {
  render() {
    return (
      <div className="search-page-main-div">
        <h1>Search</h1>
        <SearchCard />
        <SearchCard />
        {console.log(this.props.location)}
      </div>
    );
  }
}

export default withRouter(SearchPage);

import React from "react";
import { withRouter, Link } from "react-router-dom";

class SearchPage extends React.Component {
  render() {
    return (
      <div className="search-page-main-div">
        <h1>Search</h1>
        {console.log(this.props)}
      </div>
    );
  }
}

export default withRouter(SearchPage);

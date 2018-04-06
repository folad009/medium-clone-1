import React from "react";
import MainHeader from "../Components/HeaderComponents/MainHeader";
import SearchPage from "../Components/SearchPageComponents/SearchPage";

class SearchPageView extends React.Component {
  render() {
    return (
      <div className="search-page-view-main-div">
        <MainHeader />
        <SearchPage />
      </div>
    );
  }
}

export default SearchPageView;

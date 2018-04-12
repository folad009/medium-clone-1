import React, { Component } from "react";
import FromYourNetworkSmallCard from "../CardsComponents/FromYourNetworkCard";
import { connect } from "react-redux";
import { getReadingList } from "../../ducks/reducer";
import readingListImg from "../../assets/readingListImg.png";

class PopularFromNetWorkContainer extends Component {
  componentDidMount() {
    this.props.getReadingList(this.props.user.id).then(response => {
      console.log("this is the list", this.props.readingList);
    });
  }
  render() {
    const savedList = !this.props.readingList
      ? "Loading..."
      : this.props.readingList.map((article, i) => {
          console.log(article);
          return (
            <FromYourNetworkSmallCard
              key={i}
              articleTitle={article.title}
              articleIndex={i + 1}
              articleid={article.id}
              date={article.date}
              thumbnail={article.thumbnailimg}
            />
          );
        });

    return (
      <div className="popular-network-container-main-div">
        <div className="reading-list-header">
          <h1>Reading List</h1>
          <img src={readingListImg} style={{ height: "100%" }} />
        </div>
        {savedList.slice(0, 4)}
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { getReadingList })(
  PopularFromNetWorkContainer
);

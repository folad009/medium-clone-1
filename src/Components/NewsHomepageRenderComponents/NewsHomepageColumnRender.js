import React, { Component } from "react";
import NewsHomepageColumnCard from "../CardsComponents/MainNewsColumnCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllPosts } from "../../ducks/reducer";
import { addToReadingList } from "../../ducks/reducer";
import PopularFromNetWorkContainer from "../CardContainers/PopularFromNetwork";

class NewsHomePageColumnRender extends Component {
  constructor() {
    super();
    this.addToReadingList = this.addToReadingList.bind(this);
  }
  componentDidMount() {
    this.props.getAllPosts();
  }
  createMarkup(str) {
    return { __html: str };
  }
  addToReadingList(userid, id) {
    this.props.addToReadingList(userid, id);
  }
  render() {
    console.log(this.props.posts)
    const postsList =
      this.props.posts.length > 0 ? (
        this.props.posts.map((article, i) => {
          let title = (
            <Link to={`/story-view/${article.id}`} style={{color:'black'}}>
              {" "}
              <div dangerouslySetInnerHTML={this.createMarkup(article.title)} id="title-column-render" />
            </Link>
          );
          function trimmedBody(str) {
            let trimmed = str.substring(0, 100);
            trimmed.length === 100 ? (trimmed += "...") : trimmed;
            return trimmed;
          }
          const trimmedArticle = trimmedBody(article.body)
          return (
            <NewsHomepageColumnCard
              articleTitle={title}
              articleDate={article.date}
              articleAuthorFirstName={article.firstname}
              articleAuthorLastName={article.lastname}
              articleAuthorAvatar={article.avatar}
              articleAuthorBio={article.bio}
              articleImg={article.thumbnailimg}
              addToReadingList={this.addToReadingList}
              articleId={article.id}
              userid={this.props.user.id}
              body={trimmedArticle}
              
            />
          );
        })
      ) : (
        <div>loading......</div>
      );

    return (
      <div className="news-home-page-column-render-main-div">
        <div className="news-home-page-column-main-articles">{postsList}</div>
        <div className="news-home-page-column-main-from-network-div">
          <PopularFromNetWorkContainer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { getAllPosts, addToReadingList })(
  NewsHomePageColumnRender
);

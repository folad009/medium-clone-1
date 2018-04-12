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
      userInput: "",
      filterString: ""
    };
  }
  componentDidMount() {
    //Separate search term from query string
    let queryArray = this.props.location.search.split("=");
    let that = this;
    //search filter function to find only posts which contain
    const filter = function (posts, searchString) {
      let searchTerms = that.props.location.search
        ? searchString
          .toLowerCase()
          .split("%20")
          .join(" ")
          .split(" ")
        : false;
      let returnPosts = posts.filter(val => {
        for (let i = 0; i < searchTerms.length; i++) {
          if (
            val.title.toLowerCase().includes(searchTerms[i]) ||
            val.firstname.toLowerCase().includes(searchTerms[i]) ||
            val.lastname.toLowerCase().includes(searchTerms[i])
          ) {
            return true;
          }
        }
      });
      return returnPosts;
    };

    this.props.getAllPosts().then(response => {
      this.setState({ posts: filter(this.props.posts, queryArray[1]) });
    });
    this.setState({ userInput: queryArray[1], filterString: queryArray[1] });

    //add event listener for the enter key on the search input bar
    var input = document.getElementById("BigSearchBar");

    input.addEventListener("keyup", function (event) {
      //Update userInput onchange of input searchbar value
      that.setState({ userInput: event.target.value });
      event.preventDefault();
      if (event.keyCode === 13) {
        //Route to new search result page
        that.props.history.push(`/search?q=${that.state.userInput}`);
        let queryArray = that.props.location.search.split("=");
        that.setState({
          filterString: that.state.userInput,
          posts: filter(that.props.posts, queryArray[1].split(" ").join("%20"))
        });
      }
    });
  }

  createMarkup(str) {
    return { __html: str };
  }

  render() {

    let searchReel =
      this.state.filterString !== "" &&
        this.props.location.search &&
        this.state.posts.length > 0
        ? this.state.posts.map((val, index) => {
          let title = <div dangerouslySetInnerHTML={this.createMarkup(val.title)} />
          return <SearchCard
            authorName={`${val.firstname} ${val.lastname}`}
            body={val.body}
            title={title}
            img={val.thumbnailimg}
            date={val.date}
            key={index}
            id={val.id}
          />
        }
        )
        : "";

    return (
      <div className="search-page-main-div">
        <h1>Search</h1>

        <input
          autofocus="true"
          defaultValue={
            this.props.location.search
              ? this.props.location.search
                .split("=")[1]
                .split("%20")
                .join(" ")
              : "Search schMedium"
          }
          placeholder={"Search schMedium"}
          type="search"
          name="BigSearchBar"
          className="BigSearchBar"
          id="BigSearchBar"
        />
        <div className="search-page-stories-div">{searchReel}</div>
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

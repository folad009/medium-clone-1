import React, { Component } from "react";
import IoIconPack from "react-icons/lib/io";
import Bookmark from "react-icons/lib/io/android-bookmark";
import Notification from "react-icons/lib/io/android-notifications-none";
import SearchIcon from "react-icons/lib/io/search";
import logoLarge from "../../assets/mediumlogolarge.svg";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";
import { connect } from "react-redux";
import { getUser, getUserFollowing } from "../../ducks/reducer";
import ImageIcon from "./ImageIcon/ImageIcon";

//Connected with Redux

class MainHeader extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      following: []
    };
    this.focusMethod = this.focusMethod.bind(this);
  }
  componentDidMount() {
    this.props.getUser();
    var input = document.getElementById("SearchBar");
    const that = this;
    input.addEventListener("keyup", function(event) {
      //Update userInput onchange of input searchbar value
      that.setState({ userInput: event.target.value });
      event.preventDefault();
      if (event.keyCode === 13) {
        //Route to new search result page
        that.props.history.push(`/search?q=${that.state.userInput}`);
      }
    });
  }

  focusMethod() {
    if (document.getElementById("SearchBar").focus()) {
      return;
    }
    document.getElementById("SearchBar").focus();
  }
  render() {
    let loggedin = this.props.user.id ? (
      <ImageIcon />
    ) : (
      <a href={process.env.REACT_APP_LOGIN}>
        <button className="sign-in-btn">Sign In</button>
      </a>
    );
    return (
      <div className="main-header-component-main-div">
      <div style={{height:'100%',width:'20%',display:'flex',alignItems:'center'}}>
      <Link to="/new-story" style={{color:'#018f69'}}>
        Write Story
        </Link>
      </div>

        
          <div className="main-header-logo-div">
          <Link to="/">
            <img src={logoLarge} className="logo-large" />
          </Link>
          </div>
        

        <div className="main-header-icon-user-div">
          <div className="search-and-icon">
            <div>
              <SearchIcon
                className="story-header-icons"
                onClick={
                  this.state.userInput
                    ? () => {
                        this.props.history.push(
                          `/search?q=${this.state.userInput}`
                        );
                      }
                    : () => this.focusMethod()
                }
              />
            </div>
            <div>
              <input
                className="SearchBar"
                id="SearchBar"
                type="search"
                name="SearchBar"
                placeholder="Search shMedium"
              />
            </div>
          </div>
          <div className="book-and-note">
            {this.props.user.id ? (
              <Notification className="story-header-icons" />
            ) : (
              false
            )}
            {loggedin}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default withRouter(
  connect(mapStateToProps, { getUser, getUserFollowing })(MainHeader)
);

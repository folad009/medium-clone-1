import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class HomePageView extends React.Component {
  render() {
    return (
      <div>
        <Link to="/new-story">Write-Story</Link>
        <button
          onClick={() =>
            axios.get("/api/login").then(response => console.log(response.data))
          }
        >
          Login
        </button>
      </div>
    );
  }
}

export default HomePageView;

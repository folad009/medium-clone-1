<<<<<<< HEAD
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import AddStoryView from './Views/AddStoryView';
import StoryReadView from './Views/StoryReadView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StoryReadView/>        
      </div>
    );
=======
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddStoryView from "./Views/AddStoryView";
import routes from "./routes";

class App extends Component {
  render() {
    return <div className="App">{routes}</div>;
>>>>>>> master
  }
}

export default App;

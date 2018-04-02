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
  }
}

export default App;

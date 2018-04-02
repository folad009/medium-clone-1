import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddStoryView from './Views/AddStoryView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddStoryView/>        
      </div>
    );
  }
}

export default App;

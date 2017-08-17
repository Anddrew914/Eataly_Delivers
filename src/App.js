import React, { Component } from 'react';
import Header from './components/header.js';
import Section from './components/section.js'
import './App.css';
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        {Routes}
      </div>
    );
  }
}

export default App;

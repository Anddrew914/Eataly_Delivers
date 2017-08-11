import React, { Component } from 'react';
import Header from './components/header.js';
import Section from './components/section.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
      </div>
    );
  }
}

export default App;

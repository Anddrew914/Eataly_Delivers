import React, { Component } from 'react';
import Header from './components/header.js';
import Section from './components/section.js'
import FoodMenu from './components/FoodMenu.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Section/>
        <FoodMenu/>
      </div>
    );
  }
}

export default App;

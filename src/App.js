import React, { Component } from 'react';
import Header from './components/header.js';
import Section from './components/section.js'
import FoodMenu from './components/FoodMenu.js';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>

        <Route exact path='/' render={() => {
          return(
            <div>
              <Header />
              <Section />
              <FoodMenu />
            </div>
          )
        }}/>
        <Route exact path='/signin' render={() => {
          return(<SignIn />)}}
        />
        <Route exact path='/signup' render={() => {
          return(<SignUp />)}}
        />

      </div>
    );
  }
}

export default App;

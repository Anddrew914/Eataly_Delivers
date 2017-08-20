import React from 'react'
import Logo from '../images/Eataly-Logo.jpg'
import Waypoint from 'react-waypoint';
import NavigationBar from './NavigationBar';

class Header extends React.Component {
  render() {
    return(
      <header>
        <NavigationBar />
        <div className="hero-text-box">
          <h1>Eataly Delivers!</h1>
          <a className="btn btn-full" href="#">About us</a>
          <a className="btn btn-ghost" href="#">Menu</a> 
        </div> 
      </header>
    )
  }
}

export default Header;

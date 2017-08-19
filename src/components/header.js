import React from 'react'
import NavigationBar from './NavigationBar';

class Header extends React.Component {
  render() {
    return(
      <header className='header-component'>
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

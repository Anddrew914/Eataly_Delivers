import React from 'react'

class Header extends React.Component {
  render(){
    return(
      <header>
        <nav>
          <div className="row">
            <img src="/images/Eataly-Logo.jpg" alt="Eataly-Logo" className="logo" />
            <ul className="main-nav">
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">Admin</a></li>
              <li><a href="#">Cart</a></li>
            </ul>
          </div>
        </nav>
        <div className="hero-text-box">
          <h1> Eataly Delivers! </h1>
          <a className="btn btn-full" href="#">About us</a>
          <a className="btn btn-ghost" href="#">Menu</a>
        </div>
      </header>
    )
  }
}
export default Header

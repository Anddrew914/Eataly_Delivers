import React from 'react'
import Logo from '../images/Eataly-Logo.jpg'

class Header extends React.Component {
  render(){
    return(
      <header>
        <nav>
          <div className="row">
            <a href = "/"><img src={Logo} alt="Eataly-Logo" className="logo" /></a>
            <ul className="main-nav">
              <li><a href="signup">Sign Up</a></li>
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

export {Logo}

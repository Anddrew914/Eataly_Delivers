import React from 'react'
import Logo from '../images/Eataly-Logo.jpg'

class NavigationBar extends React.Component {
  render(){
    return(
        <nav>
          <div className="row">
            <a href="/">
              <img src={Logo}
                alt="Eataly-Logo"
                className="logo"
              />
            </a>
            <ul className="main-nav">
              <li><a href="signup">Sign Up</a></li>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">Admin</a></li>
              <li><a href="#">Cart</a></li>
            </ul>
          </div>
        </nav>
    )
  }
}
export default NavigationBar;
export {Logo}

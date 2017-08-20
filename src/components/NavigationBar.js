import React from 'react';
import Logo from '../images/Eataly-Logo.jpg';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
  render(){
    return(
      <nav>
        <div className="row">
          <Link to="/">
            <img src={Logo}
              alt="Eataly-Logo"
              className="logo"
            />
          </Link>
          <ul className="main-nav">
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><Link to='/signin'>Sign In</Link></li>
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

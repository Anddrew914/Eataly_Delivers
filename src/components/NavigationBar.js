import React from 'react';
import Logo from '../images/Eataly-Logo.jpg';
import { Link } from 'react-router-dom';
import Waypoint from 'react-waypoint';

class NavigationBar extends React.Component {


  constructor(props) {
    super(props);
    this.state = {'class': ''};
}

  render(){
    return(
      <div>
      <nav className = {this.state.class}>
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
      <Waypoint onLeave={({ previousPosition, currentPosition, event }) => {
        console.log('left')
      this.setState({class:'sticky'})}}
                onEnter={({ previousPosition, currentPosition, event }) => {
        console.log('enter')
      this.setState({class:''})}}/> 
      </div>
    )
  }
}

export default NavigationBar;
export {Logo}

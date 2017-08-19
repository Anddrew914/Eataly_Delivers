import React from 'react';
import NavigationBar from './NavigationBar';

class SignUp extends React.Component {
  render() {
    return(
      <header className='header-component'>
        <NavigationBar />
        <div className="hero-text-box">
          <h1>Sign Up</h1>
        </div>
      </header>
    )
  }
}

export default SignUp;

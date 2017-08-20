import React from 'react';
import NavigationBar from './NavigationBar';
import '../index.css';

class SignUp extends React.Component {
  render() {
    return(
      <header>
        <NavigationBar />

        <div className="hero-text-box">
          <h1>Sign Up</h1>
        </div>
      </header>
    )
  }
}

export default SignUp;

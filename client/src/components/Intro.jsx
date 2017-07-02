import React, { Component } from 'react'

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSignUpClick() {
    alert('Thank you for subscribing to our newsletter!');
  }

  render() {
    return (
      <div className='container'>
        <h1 className='header'>We're the best</h1>
        <p className='paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br/>
          <br/>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3
          id='newsletter-btn'
          onClick={this.onSignUpClick}
        >
          Sign up for our newsletter
        </h3>
      </div>
    );
  }
}
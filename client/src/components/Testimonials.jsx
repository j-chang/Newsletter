import React, { Component } from 'react'

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickTestimonialsButton() {
    location.reload();
  }

  render() {
    return (
      <div id='testimonials' className='container'>
        <h1 className='header'>Testimonials</h1>
        <blockquote className='blockquote'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br/>
          <br/>
          <span>- A satisfied customer</span>
        </blockquote>
        <div
          id='testimonials-btn'
          onClick={this.onClickTestimonialsButton}
        >
          <h3>Read all testimonials</h3>
        </div>
      </div>
    );
  }
}
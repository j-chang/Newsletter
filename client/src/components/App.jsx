import React, { Component } from 'react'
import Intro from './Intro.jsx'
import Testimonials from './Testimonials.jsx'
import Pricing from './Pricing.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='container-view'>
        <Intro />
        <Testimonials />
        <Pricing />
      </div>
    );
  }
}
import React, { Component } from 'react'

export default class PriceTableSection extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onClickSignUp() {
    location.reload();
  }

  render() {
    let {name, price, details} = this.props.plan;

    return (
      <div className='section'>
        <span className='plan-name'>{name + ' ' + price}</span>
        <br/>
        <span className='details'>{details}</span>
        <br/>
        <div
          id='signup-btn'
          style={{ maxWidth: '80px' }}
        >
          <h3 onClick={this.onClickSignUp}>Sign Up</h3>
        </div>
      </div>
    );
  }
}
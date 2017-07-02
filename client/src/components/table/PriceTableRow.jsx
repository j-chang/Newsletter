import React, { Component } from 'react'

export default class PriceTableRow extends Component {
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
      <tr>
        <td>
          <span className='plan-name'>
            {name}<br/>
            {price}
          </span>
        </td>
        <td>
          <span className='details'>{details}</span>
        </td>
        <td>
          <div id='signup-btn'>
            <h3 onClick={this.onClickSignUp}>Sign Up</h3>
          </div>
        </td>
      </tr>
    );
  }
}
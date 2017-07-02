import React, { Component } from 'react'
import PriceTable from './table/PriceTable.jsx'

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container'>
        <h1 className='header'>Pricing</h1>
        <PriceTable />
      </div>
    );
  }
}
import React, { Component } from 'react'
import PriceTableRow from './PriceTableRow.jsx'
import PriceTableSection from './PriceTableSection.jsx'
import MediaQuery from 'react-responsive'

export default class PriceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [
        {
          name: 'Demo',
          price: '(Free)',
          details: '10 dongles, 1 whatsit, 4 floops'
        },
        {
          name: 'Basic',
          price: '($10/mo)',
          details: '20 dongles, 5 whatsit, 10 floops'
        },
        {
          name: 'Premium',
          price: '($100/mo)',
          details: 'Unlimited dongles, 50 whatsit, 200 floops'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <MediaQuery query='(max-width: 480px)'>
          {this.state.plans.map( plan => <PriceTableSection plan={plan} /> )}
        </MediaQuery>
        <MediaQuery query='(min-width: 481px)'>
          <table>
            <col/>
            <col/>
            <col/>
            {this.state.plans.map( plan => <PriceTableRow plan={plan} /> )}
          </table>
        </MediaQuery>
      </div>
    );
  }
}
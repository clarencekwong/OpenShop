import React from 'react'
import PropTypes from 'prop-types'
import { StripeProvider } from 'react-stripe-elements'

import StripeCheckout from '../components/StripeCheckout'

class StripeContainer extends React.Component {
  render () {
    return(
      <StripeProvider apiKey="pk_test_12345">
        <StripeCheckout />
      </StripeProvider>
    )
  }
}

export default StripeContainer;

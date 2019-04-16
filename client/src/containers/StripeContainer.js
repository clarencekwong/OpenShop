import React from 'react'
import PropTypes from 'prop-types'
import { StripeProvider } from 'react-stripe-elements'

import StripeCheckout from '../components/StripeCheckout'

class StripeContainer extends React.Component {
  render () {
    return(
      <StripeProvider apiKey="pk_test_1wr3mrVO5ZvJn5eSsEM6lL25005ZEZD8YG">
        <StripeCheckout />
      </StripeProvider>
    )
  }
}

export default StripeContainer;

import React from 'react'

import CustomerRegistrationForm from '../components/CustomerRegistrationForm'
import VendorRegistrationForm from '../components/VendorRegistrationForm'

export default class RegisterContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CustomerRegistrationForm />
        <VendorRegistrationForm />
      </React.Fragment>
    )
  }
}

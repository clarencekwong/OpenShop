import React from 'react'

import CustomerLoginForm from '../components/CustomerLoginForm'
import VendorLoginForm from '../components/VendorLoginForm'

export default class LoginContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CustomerLoginForm />
        <VendorLoginForm />
      </React.Fragment>
    )
  }
}

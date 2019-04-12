import React from 'react'

import '../components/TransactionList'
import '../adapters/CartAdapter'

import { connect } from 'react-redux'

class TransactionContainer extends React.Component {

  componentDidMount() {
    CartAdapter.fetchTransactions(this.props.user.id)
  }

  render () {
    return (
      <TransactionList  />
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  }
}

export default TransactionContainer;

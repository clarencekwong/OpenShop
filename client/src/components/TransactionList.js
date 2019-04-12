import React from 'react'
import uuid from 'uuid'

import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux'

import Transaction from './Transaction'

const TransactionList = (props) => {

  renderTransaction = () => {
    return this.props.transactions.map(transaction => <Transaction key={uuid()} transaction={transaction} />)
  }

  return (
    <Item.Group divided>
      {renderTransaction()}
    </Item.Group>
  )
}

function mapStateToProps(state) {
  return {
    transactions: state.cart.transactions
  }
}

export default connect(mapStateToProps)(TransactionList)

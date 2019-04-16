import React from 'react'

import { Grid, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

class TotalVolume extends React.Component {

  totalSaleVolume = () => {
    if (this.props.storeOrders.length > 0) {
      return this.props.storeOrders.map(order => order.quantity).reduce((total,number) => total + number)
    }
  }

  totalNetIncome = () => {
    if (this.props.storeOrders.length > 0) {
      return this.props.storeOrders.map(order => order.quantity * order.cost).reduce((total,number) => total + number)
    }
  }

  render () {
    return(
      <Grid.Row textAlign='center'>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Total Sale Volume
          </Header>
          <Header as='h1'>{this.totalSaleVolume()} units</Header>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Total Net Income
          </Header>
          <Header as='h1'>${this.totalNetIncome()}</Header>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    storeOrders: state.user.storeOrders
  }
}

export default connect(mapStateToProps)(TotalVolume)

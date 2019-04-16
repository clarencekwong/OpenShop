import React from 'react'
import TotalVolume from '../components/TotalVolume'

import { Grid, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

class DashboardContainer extends React.Component {

  render () {
    return (
      <Container>
        <Grid celled='internally' columns='equal' stackable>
          {<TotalVolume />}
          <Grid.Row textAlign='center'>
            Cool times
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.user.vendor)
  return {
    vendor: state.user.vendor
  }
}

export default connect(mapStateToProps)(DashboardContainer)

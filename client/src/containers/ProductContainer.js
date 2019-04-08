import React from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import ProductList from '../components/ProductList'
import StoreAdapter from '../adapters/StoreAdapter'

class ProductContainer extends React.Component {

  componentDidMount() {
    console.log(this.props.selectedStore)
    if (this.props.selectedStore) {
      console.log('i fired when i mounted');
      return StoreAdapter.getStoreProducts(this.props.selectedStore.id)
    }
    return null

  }

  render() {
    return (
      <Container>
        <h1>{this.props.selectedStore ? this.props.selectedStore.name : null}</h1>
        <ProductList />
      </Container>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.stores.selectedStore)
  return {
    selectedStore: state.stores.selectedStore
  }
}

export default connect(mapStateToProps)(ProductContainer)

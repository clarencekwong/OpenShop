import React from 'react'
import uuid from 'uuid'

import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

import Product from './Product'

class ProductList extends React.Component {

  renderProducts = () => {
    console.log('inside the render products function',this.props)
    if (this.props.storeProducts && this.props.selectedStore) {
      return this.props.storeProducts.map(product => <Product key={uuid()} product={product}/>)
    }
    return null
  }

  render() {
    return (
      <Card.Group>
        {this.renderProducts()}
      </Card.Group>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedStore: state.stores.selectedStore,
    storeProducts: state.stores.storeProducts
  }
}

export default connect(mapStateToProps)(ProductList)

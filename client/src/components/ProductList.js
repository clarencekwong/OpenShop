import React from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'

import { Card } from 'semantic-ui-react'

import Product from './Product'

class ProductList extends React.Component {

  renderProducts = () => {
    return this.props.products.map(product => <Product key={uuid()} product={product}/>)
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
    products: state.products.products
  }
}

export default connect(mapStateToProps)(ProductList)

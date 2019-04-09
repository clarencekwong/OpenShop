import React from 'react'

import CartList from '../components/CartList'

import { Container } from 'semantic-ui-react'

const CartContainer = (props) => {
  return (
    <Container>
      <CartList />
    </Container>
  )
}

export default CartContainer

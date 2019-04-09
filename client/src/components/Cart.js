import React from 'react'
import { Table } from 'semantic-ui-react'

// import CardAdapter from '../adapters/CardAdapter'

const Cart = ({ cart }) => {
  const { quantity, product } = cart

  // const handleClick = (e) => {
  //   console.log(e.target.classList[0], 'clicked')
  // }

  return (
    <Table.Row>
      <Table.Cell>{product.name}</Table.Cell>
      <Table.Cell>{quantity}</Table.Cell>
      <Table.Cell>${product.cost * quantity}</Table.Cell>
    </Table.Row>
  )
}

export default Cart

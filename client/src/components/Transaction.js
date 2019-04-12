import React from 'react'

import { Item } from 'semantic-ui-react'

const Transaction = (props) => {
  console.log(props)
  return (
    <Item>
      {props.transaction.id}
      {props.transaction.cost}
    </Item>
  )
}

export default Transaction

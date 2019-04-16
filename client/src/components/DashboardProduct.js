import React from 'react'

import { Table } from 'semantic-ui-react'

const DashboardProduct = ({order}) => {
  return (
    <Table.Row>
      <Table.Cell>{order.name}</Table.Cell>
      <Table.Cell>{order.quantity}</Table.Cell>
      <Table.Cell>${order.cost * order.quantity}</Table.Cell>
    </Table.Row>
  )
}

export default DashboardProduct

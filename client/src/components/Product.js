import React from 'react'

import { Card, Image } from 'semantic-ui-react'

const Product = (props) => {
  return (
    <div>
      <Card>
        <Image src={props.product.imageUrl} />
        <Card.Content>
          <Card.Header>{props.product.name}</Card.Header>
          <Card.Description>{props.product.description}</Card.Description>
          <Card.Description>{props.product.cost}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  )
}

export default Product

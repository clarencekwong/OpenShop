import React from 'react'

import { Card, Image, Button, Icon, Label } from 'semantic-ui-react'

const Product = (props) => {
  return (
    <div>
      <Card>
        <Image src={props.product.imageUrl} />
        <Card.Content>
          <Card.Header>{props.product.name}</Card.Header>
          <Card.Description>{props.product.description}</Card.Description>
        </Card.Content>
        <Label basic>
          ${props.product.cost}
        </Label>
          <Button icon>
            <Icon name='shopping cart' />
          </Button>

      </Card>
    </div>
  )
}

export default Product

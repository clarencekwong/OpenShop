import React from 'react'

import { Card, Image, Button, Icon, Label } from 'semantic-ui-react'

import { connect } from 'react-redux'

const Product = (props) => {

  const createOrder = () => {
    const data = {
      user_id: props.user.id
    }
    fetch('http://localhost:3000/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accepts':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(order => localStorage.setItem('order_id', order.id))
  }

  const handleClick = () => {
    if (!localStorage.getItem('order_id')) {
      createOrder()
    }
    const data = {
      product_id: props.product.id,
      order_id: localStorage.getItem('order_id'),
    }

    fetch('http://localhost:3000/api/v1/items', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accepts':'application/json'
      },
      body: JSON.stringify(data)
    })
  }

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
          <Button icon onClick={handleClick}>
            <Icon name='shopping cart' />
          </Button>

      </Card>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(Product)

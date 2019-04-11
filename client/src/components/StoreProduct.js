import React from 'react'

import { Card, Image, Button, Icon, Label } from 'semantic-ui-react'

import { connect } from 'react-redux'

const StoreProduct = (props) => {

  const handleClick = () => {
    console.log('editting')
  }

  return (
    <div>
      <Card>
        <Image src={props.product.imageUrl} />
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"/>
        <Card.Content>
          <Card.Header>{props.product.name}</Card.Header>
          <Card.Description>{props.product.description}</Card.Description>
        </Card.Content>
        <Label basic>
          ${props.product.cost}
        </Label>
          <Button icon onClick={handleClick}>
            <Icon name='edit' />
          </Button>
      </Card>
    </div>
  )
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(StoreProduct)

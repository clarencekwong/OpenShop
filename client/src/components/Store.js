import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import StoreAdapter from '../adapters/StoreAdapter'

const Store = (props) => {
  
  const handleClick = () => {
    StoreAdapter.selectStore(props.store, props.history)
  }

  return (
    <div>
      <Card onClick={handleClick}>
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"/>
        <Card.Content>
          <Card.Header>{props.store.name}</Card.Header>
        </Card.Content>
      </Card>
    </div>
  )
}

export default Store

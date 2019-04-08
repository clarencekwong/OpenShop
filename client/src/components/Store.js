import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import StoreAdapter from '../adapters/StoreAdapter'
import ProductContainer from '../containers/ProductContainer'

const Store = (props) => {

  const handleClick = () => {
    // debugger

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

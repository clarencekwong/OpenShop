import React from 'react'

import { Card, Image } from 'semantic-ui-react'

const Store = (props) => {
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>{props.store.name}</Card.Header>
        </Card.Content>
      </Card>
    </div>
  )
}

export default Store

import React from 'react'
import {Route, Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Inventories = (props) => {

  // need to find the project id and assign that to a variable to use in the url below
  // let projectId = props.inventories[0].project_id
  // let projectId = props.inventories[props.match.params.id - 1]

  // console.log(projectId)

  return(
    <Card style={{ width: '24rem' }}>
      <Card.Title>Inventory</Card.Title>
        <ListGroup variant="flush">
          {props.inventories && props.inventories.map(inventory =>
              <div key={inventory.id}>
                <Link to={`/inventories/${inventory.id}`}>{inventory.name}</Link>
              </div>)}
        </ListGroup>
    </Card>
  )

}

export default Inventories

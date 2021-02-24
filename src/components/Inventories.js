import React from 'react'
import {Route, Link, useParams} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import InventoryShow from './InventoryShow'

const Inventories = (props) => {
  const params = useParams()


  return(
    <Card style={{ width: '24rem' }}>
      <Card.Title>Inventory</Card.Title>
        <ListGroup variant="flush">
          {props.inventories && props.inventories.map(inventory =>
              <div key={inventory.id}>
                <Link to={`/projects/${params.id}/inventories/${inventory.id}`}>{inventory.name}</Link>
              </div>)}
        </ListGroup>
    </Card>
  )

}

export default Inventories

import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import { useSelector } from 'react-redux'
import {deleteInventoryItem} from '../actions/deleteInventoryItem'

const Inventories = (props) => {
  const params = useParams()

  const handleDelete = (inventory) => {
    props.deleteInventoryItem(inventory.id, inventory.project_id)
  }

  return(
    <Card style={{ width: '24rem' }}>
      <Card.Title>Inventory</Card.Title>
        <ListGroup variant="flush">
          {props.inventories && props.inventories.map(inventory =>
              <div key={inventory.id}>
                <Link to={`/projects/${params.id}/inventories/${inventory.id}`}>{inventory.name} </Link>
                <Button variant="outline-secondary" onClick={() => handleDelete(inventory)}>X</Button>
              </div>)}
        </ListGroup>
    </Card>
  )

}

export default connect(null, {deleteInventoryItem})(Inventories)

import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteInventoryItem} from '../actions/deleteInventoryItem'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const InventoryShow = (props) => {

  const handleDelete = (inventory) => {
    props.deleteInventoryItem(inventory.id, inventory.project_id)
  }

  return(
    <Card style={{ width: '24rem' }}>
      <Card.Title>Inventory Details</Card.Title>
        <ListGroup variant="flush">
          {props.inventories && props.inventories.map(inventory =>
            <ListGroup.Item key={inventory.id}>#{inventory.id} - {inventory.name} <Button variant="outline-secondary" onClick={() => handleDelete(inventory)}>X</Button></ListGroup.Item>
          )}
        </ListGroup>
    </Card>
  )
}

export default connect(null, {deleteInventoryItem})(InventoryShow)

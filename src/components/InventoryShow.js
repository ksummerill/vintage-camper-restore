import React from 'react'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const InventoryShow = (props) => {

  return(
    <Card style={{ width: '24rem' }}>
      <Card.Title>Inventory Details</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item key={props.inventory.id}>#{props.inventory.id} - {props.inventory.name}: {props.inventory.description}</ListGroup.Item>
        </ListGroup>
    </Card>
  )
}

const mapStateToProps = (state, {match}) => {
  const project = state.projects.find(project => project.id === parseInt(match.params.projectId))
  return {
    inventory: project.inventories.find(inventory => inventory.id === parseInt(match.params.id))
  }
}

export default connect(mapStateToProps, null)(InventoryShow)

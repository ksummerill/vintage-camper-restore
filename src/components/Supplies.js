import React from 'react'
import {connect} from 'react-redux'
import {deleteSupplyItem} from '../actions/deleteSupplyItem'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Supplies = (props) => {

  // console.log(props)

  const handleDelete = (supply) => {
    props.deleteSupplyItem(supply.id, supply.project_id)
  }

  return(
    <Card style={{ width: '24rem' }}>
      <Card.Title>Supplies</Card.Title>
        <ListGroup variant="flush">
          {props.supplies && props.supplies.map(supply =>
            <ListGroup.Item key={supply.id}>{supply.item} <Button variant="outline-secondary" onClick={() => handleDelete(supply)}>X</Button></ListGroup.Item>
          )}
        </ListGroup>
    </Card>
  )

}

export default connect(null, {deleteSupplyItem})(Supplies)

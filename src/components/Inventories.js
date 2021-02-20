import React from 'react'
import {connect} from 'react-redux'
import {deleteInventoryItem} from '../actions/deleteInventoryItem'
// import Button from 'react-bootstrap/Button'

const Inventories = (props) => {

  const handleDelete = (inventory) => {
    props.deleteInventoryItem(inventory.id, inventory.project_id)
  }

  return(
    <div className="list-items">
      {props.inventories && props.inventories.map(inventory =>
        <li key={inventory.id}>#{inventory.id} - {inventory.name} - {inventory.description} <button onClick={() => handleDelete(inventory)}>X</button></li>
      )}
    </div>
  )

}

export default connect(null, {deleteInventoryItem})(Inventories)

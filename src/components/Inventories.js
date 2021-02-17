import React from 'react'
import {connect} from 'react-redux'
import {deleteInventoryItem} from '../actions/deleteInventoryItem'

const Inventories = (props) => {

  const handleDelete = (inventory) => {
    // debugger - inventory is grabbing the correct inventory item for deletion
    props.deleteInventoryItem(inventory.id, inventory.project_id)
  }

  return(
    <div>
      {props.inventories && props.inventories.map(inventory =>
        <li key={inventory.id}>{inventory.name} - {inventory.description} <button onClick={() => handleDelete(inventory)}>X</button></li>
      )}
    </div>
  )

}

export default connect(null, {deleteInventoryItem})(Inventories)

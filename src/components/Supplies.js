import React from 'react'
import {connect} from 'react-redux'
import {deleteSupplyItem} from '../actions/deleteSupplyItem'

const Supplies = (props) => {

  const handleDelete = (supply) => {
    // debugger - supply is getting the right item
    props.deleteSupplyItem(supply.id, supply.project_id)
  }

  return(
    <div>
      {props.supplies && props.supplies.map(supply =>
        <li key={supply.id}>{supply.item} <button onClick={() => handleDelete(supply)}>X</button></li>
      )}
    </div>
  )

}

export default connect(null, {deleteSupplyItem})(Supplies)

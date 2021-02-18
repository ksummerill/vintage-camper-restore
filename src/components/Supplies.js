import React from 'react'
import {connect} from 'react-redux'
import {deleteSupplyItem} from '../actions/deleteSupplyItem'

const Supplies = (props) => {

  const handleDelete = (supply) => {
    props.deleteSupplyItem(supply.id, supply.project_id)
  }

  return(
    <div className="list-items">
      {props.supplies && props.supplies.map(supply =>
        <li key={supply.id}>{supply.item} <button onClick={() => handleDelete(supply)}>X</button></li>
      )}
    </div>
  )

}

export default connect(null, {deleteSupplyItem})(Supplies)

import React from 'react'
import {connect} from 'react-redux'

const Supplies = (props) => {

  return(
    <div>
      {props.supplies && props.supplies.map(supply =>
        <li key={supply.id}>{supply.item} </li>
      )}
    </div>
  )

}

export default Supplies

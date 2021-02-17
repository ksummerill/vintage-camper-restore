import React from 'react'
import {connect} from 'react-redux'

const Supplies = (props) => {

  console.log(props)

  return(
    <div>
      {props.supplies.map(supply =>
        <li key={supplies.id}>{supply.item} </li>
      )}
    </div>
  )

}

export default Supplies

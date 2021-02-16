import React from 'react'

const Inventories  = (props) => {


  console.log(props)

  return(
    <div>
      {props.inventories && props.inventories.map(inventory =>
        <li key={inventory.id}>{inventory.name} - {inventory.description}</li>
      )}

    </div>

  )


}

export default Inventories
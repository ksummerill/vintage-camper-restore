import React from 'react'
import InventoryInput from '../components/InventoryInput'
import Inventories from '../components/Inventories'


class InventoriesContainer extends React.Component {


  render() {
    return (
      <div>
        <InventoryInput />
        <Inventories inventories={this.props.projects.inventories}/>
      </div>
    )
  }

}

export default InventoriesContainer

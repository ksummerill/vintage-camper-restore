import React from 'react'
import InventoryInput from '../components/InventoryInput'
import Inventories from '../components/Inventories'


class InventoriesContainer extends React.Component {

  render() {
    return (
      <div>
        <InventoryInput project={this.props.project}/>
        <Inventories inventories={this.props.project && this.props.project.inventories}/>
      </div>
    )
  }

}

export default InventoriesContainer

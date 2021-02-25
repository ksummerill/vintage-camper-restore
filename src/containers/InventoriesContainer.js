import React from 'react'
import InventoryInput from '../components/InventoryInput'
import Inventories from '../components/Inventories'
// import {connect} from 'react-redux'
// import {fetchInventory} from '../actions/fetchInventory'


import InventoryShow from '../components/InventoryShow'
import {Route, Switch} from 'react-router-dom'

class InventoriesContainer extends React.Component {

  render() {
    return (
      <div>
        <InventoryInput project={this.props.project}/><br></br>
        <Inventories inventories={this.props.project && this.props.project.inventories}/>
        
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     inventories: state.inventories
//   }
// }

export default InventoriesContainer

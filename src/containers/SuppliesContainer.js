import React from 'react'
import SupplyInput from '../components/SupplyInput'
import Supplies from '../components/Supplies'


class SuppliesContainer extends React.Component {

  render() {
    return (
      <div>
        <SupplyInput project={this.props.project}/>
        <Supplies supplies={this.props.project && this.props.project.supplies}/>
      </div>
    )
  }
}

export default SuppliesContainer

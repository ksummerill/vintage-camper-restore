import React from 'react'
import {connect} from 'react-redux'
import {addInventory} from '../actions/addInventory'
import Button from 'react-bootstrap/Button'

class InventoryInput extends React.Component {

  state = {
    name: '',
    description: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addInventory(this.state, this.props.project.id)
    this.setState({
      name: '',
      description: ''
    })
  }

  render() {
    return(
      <div>
        <h3>Inventory</h3>
        <h5>Add items to your Inventory</h5>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Item name"/><br></br>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="description"/><br></br>
            <br></br>
            <Button as="input" type="submit" value="Submit" />
          </form>
      </div>
    )
  }
}


export default connect(null, {addInventory})(InventoryInput)

import React from 'react'
import {connect} from 'react-redux'


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
        <h3>Inventory input</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Item name"/>
            <label>Description</label>
              <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="description"/>
            <input type="submit" value="Submit"/>
          </form>
      </div>
    )
  }
}



export default connect(null)(InventoryInput)

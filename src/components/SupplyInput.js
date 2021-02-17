import React from 'react'
import {connect} from 'react-redux'
import {addSupply} from '../actions/addSupply'


class SupplyInput extends React.Component {

  state = {
    item: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addSupply(this.state, this.props.project.id)
    this.setState({
      item: ''
    })
  }

  render() {
    return(
      <div>
        <h3>Supplies</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Item</label>
              <input type="text" name="item" value={this.state.item} onChange={this.handleChange} placeholder="Item name"/>
            <input type="submit" value="Submit"/>
          </form>
      </div>
    )
  }
}



export default connect(null, {addSupply})(SupplyInput)

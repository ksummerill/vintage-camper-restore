import React from 'react'
import {connect} from 'react-redux'
import {addSupply} from '../actions/addSupply'
import Button from 'react-bootstrap/Button'



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
        <h3>Add Supplies to your list</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="item" value={this.state.item} onChange={this.handleChange} placeholder="Supply item"/><br></br>
            <br></br>
            <Button as="input" type="submit" value="Submit" />
          </form>
      </div>
    )
  }
}



export default connect(null, {addSupply})(SupplyInput)

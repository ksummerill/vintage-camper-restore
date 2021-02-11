import React from 'react'
import {connect} from 'react-redux'
import {addProject} from '../actions/addProject'

class ProjectInput extends React.Component {

  state = {name: ''}

  handleChange = (event) => {
    this.setState({
        name: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addProject(this.state);
    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Project Name</label>
          <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)} placeholder="Project Name"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addProject})(ProjectInput)

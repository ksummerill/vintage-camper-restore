import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {addVote} from '../actions/addVote'

class Vote extends React.Component {

  // const [count, setCount] = useState(0);
  state = {
    count: 0
  }

  handleVote = () => {
    // debugger
    let newCount = this.state.count + 1
    // this.props.addVote(this.state, this.props.project.id)
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <div>
        <Button variant="outline-secondary" onClick={this.handleVote}>❤️</Button>
        <p>counter here</p>
      </div>
    );
  }
}

export default connect(null, {addVote})(Vote)

import React from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {addVote} from '../actions/addVote'

const Votes = (props) => {

  // props.votes.projects gives me an array of projects
  // find the project whose button was clicked and pass that project's id
  // to addVote via my handleVote function

  console.log(props)

  // let votedProject = props.projects[props.match.params.id - 1]

  // increment the count by 1 and call addVote with that new number
  const handleVote = (e) => {
    const buttonValue = parseInt(e.target.value)
    let newVoteCount = buttonValue + 1
    addVote(newVoteCount)
    // debugger
    // this.props.addVote(this.state, this.props.project.id)
  };


    return (
      <div>
        <Button variant="outline-secondary" onClick={handleVote} value={1}>❤️</Button>
        <p>counter here</p>
      </div>
    );

}

export default connect(null, {addVote})(Votes)

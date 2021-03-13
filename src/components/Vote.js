import React from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {addVote} from '../actions/addVote'

const Votes = (props) => {

  // increment the count by 1 and call addVote with that new number + project id
  const handleVote = (e) => {
    const buttonValue = parseInt(e.target.value)
    let newVoteCount = buttonValue + 1
    props.addVote(newVoteCount, props.project.id)
  };

  const voteTally = props.project.votes.length

    return (
      <div>
        <Button variant="outline-secondary" onClick={handleVote} value={1}>❤️</Button>
        <div>
          <p>{voteTally}</p>
        </div>
      </div>
    );
}

export default connect(null, {addVote})(Votes)

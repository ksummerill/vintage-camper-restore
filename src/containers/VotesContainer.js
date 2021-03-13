import React from 'react'
import Vote from '../components/Vote'


class VotesContainer extends React.Component {

  render() {
    return (
      <div>
        <Votes votes={this.props.project && this.props.project.votes}/>
      </div>
    )
  }
}

export default VotesContainer

export const addVote = (newVoteCount, projectId) => {

  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${projectId}/votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVoteCount)
    })
    .then(response => response.json())
    .then(project => dispatch({
      type: 'ADD_VOTE',
      payload: project
    }))
  }
}

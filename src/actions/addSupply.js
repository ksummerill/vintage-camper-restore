export const addSupply = (supply, projectId) => {

  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${projectId}/supplies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(supply)
    })
    .then(response => response.json())
    .then(project => dispatch({
      type: 'ADD_SUPPLY',
      payload: project
    }))
  }
}

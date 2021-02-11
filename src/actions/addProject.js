export const addProject = (data) => {

  // dispatch to the reducer
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/projects', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(project => dispatch({type: 'ADD_PROJECT', payload: project}))
  }
}

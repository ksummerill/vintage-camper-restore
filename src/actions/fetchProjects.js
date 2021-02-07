export function fetchProjects() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/projects')
    .then(resp => resp.json())
    .then(projects => dispatch({
      type: 'FETCH_PROJECTS',
      payload: projects
    }))
  }
}

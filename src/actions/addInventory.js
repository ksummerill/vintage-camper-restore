export const addInventory = (inventory, projectId) => {

  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${projectId}/inventories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inventory)
    })
    .then(response => response.json())
    .then(project => dispatch({
      type: 'ADD_INVENTORY',
      payload: project
    }))
  }
}

export const deleteInventoryItem = (projectId, inventoryId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/projects/${projectId}/inventories/${inventoryId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(project => dispatch({type: 'DELETE_INVENTORY_ITEM', payload: project})
    )
  }
}

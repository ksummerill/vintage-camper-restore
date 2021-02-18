export const deleteSupplyItem = (supplyId, projectId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/projects/${projectId}/supplies/${supplyId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(project => dispatch({type: 'DELETE_SUPPLY_ITEM', payload: project})
    )
  }
}

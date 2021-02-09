// responsible for handling the parts of the store that have to do with the Project

export default function projectReducer(state = {projects: []}, action) {

  switch (action.type) {
    case 'FETCH_PROJECTS':
      return {projects: action.payload}
    default:
      return state
  }

  return state


}

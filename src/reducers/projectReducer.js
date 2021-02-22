// responsible for handling the parts of the store that have to do with the Project

export default function projectReducer(state = {projects: []}, action) {

  switch (action.type) {
    case 'FETCH_PROJECTS':
      return {projects: action.payload}
    // case 'FETCH_INVENTORY':
    //   return {inventory: action.payload}
    case 'ADD_PROJECT':
      return {...state, projects: [...state.projects, action.payload]}
    case 'ADD_INVENTORY':
      let projects = state.projects.map(project => {
        if (project.id === action.payload.id) {
          return action.payload
        } else {
          return project
        }
      })
      return {...state, projects: projects}
    case 'DELETE_INVENTORY_ITEM':
      let projectsDelete = state.projects.map(project => {
        if (project.id === action.payload.id) {
          return action.payload
        } else {
          return project
        }
      })
      return {...state, projects: projectsDelete}
    case 'ADD_SUPPLY':
      let projectSupply = state.projects.map(project => {
        if (project.id === action.payload.id) {
          return action.payload
        } else {
          return project
        }
      })
      return {...state, projects: projectSupply}
    case 'DELETE_SUPPLY_ITEM':
      let supplyDelete = state.projects.map(project => {
        if (project.id === action.payload.id) {
          return action.payload
        } else {
          return project
        }
      })
      return {...state, projects: supplyDelete}
    default:
      return state

  }

  return state


}

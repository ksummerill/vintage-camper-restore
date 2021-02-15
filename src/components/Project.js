import React from 'react'
import InventoriesContainer from '../containers/InventoriesContainer'

// functional component
const Project = (props) => {

  let project = props.projects.filter(project => project.id == props.match.params.id)[0]

  return (
    <div>
      <h2>
        {project ? project.name : null}
      </h2>
      <InventoriesContainer project={project}/>
    </div>
  )

}

export default Project

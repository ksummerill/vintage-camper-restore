import React from 'react'
import InventoriesContainer from '../containers/InventoriesContainer'
import SuppliesContainer from '../containers/SuppliesContainer'

const Project = (props) => {

  let project = props.projects && props.projects[props.match.params.id - 1]

  return (
    <div>
      <h2>
        {project ? project.name : null}
      </h2>
      <InventoriesContainer project={project}/>
      <SuppliesContainer project={project}/>
    </div>
  )

}

export default Project

import React from 'react'

// functional component
const Projects = (props) => {

  return (
    <div>
      {props.projects.map(project =>
        <li key={project.id}>
          {project.name}
        </li>)}
    </div>
  )

}

export default Projects

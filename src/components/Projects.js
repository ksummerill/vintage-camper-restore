import React from 'react'
import Project from './Project'

// functional component
const Projects = (props) => {

// debugger
  return (
    <div>
      {props.projects.map(project =>
        <div key={project.id}><Project project={project}/></div>)}
    </div>
  )
}

export default Projects

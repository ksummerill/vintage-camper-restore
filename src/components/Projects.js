import React from 'react'
import {Route, Link} from 'react-router-dom'
import Project from './Project'

// functional component
const Projects = (props) => {

  return (
    <div>
      {props.projects.map(project =>
        <div key={project.id}>
          <Link to={`/projects/${project.id}`}>{project.name}</Link>
        </div>)}
    </div>
  )
}

export default Projects

import React from 'react'
import {Route, Link} from 'react-router-dom'
import Project from './Project'
import Vote from './Vote'

const Projects = (props) => {

  console.log(props)

  return (
    <div>
      {props.projects.map(project =>
        <div key={project.id}>
          <Link to={`/projects/${project.id}`}>{project.name}</Link>
          <Vote votes={props}/>
        </div>)}
    </div>
  )
}

export default Projects

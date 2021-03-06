import React from 'react'
import {Route, Link} from 'react-router-dom'
import Project from './Project'
import Button from 'react-bootstrap/Button'
import Vote from './Vote'

const Projects = (props) => {


  return (
    <div>
      {props.projects.map(project =>
        <div key={project.id}>
          <Link to={`/projects/${project.id}`}>{project.name}</Link>
          <Vote />
        </div>)}
    </div>
  )
}

export default Projects

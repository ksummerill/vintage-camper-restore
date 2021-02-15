import React from 'react'
import {Route} from 'react-router-dom'
import Project from './Project'

// functional component
const Projects = (props) => {

  console.log(props)

  return (
    <div>
      {props.projects.map(project =>
        <li key={project.id}>
          <Project project={project}/>
        </li>)}
    </div>
  )
}

export default Projects

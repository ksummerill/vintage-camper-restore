import React from 'react'
import {Route} from 'react-router-dom'
import Project from './Project'

// functional component
const Projects = (props) => {
console.log(props)
// debugger
  return (
    <div>
      {props.projects.data.map(project =>
        <li key={project.id}>
          <Project project={project}/>
        </li>)}
    </div>
  )
}

export default Projects

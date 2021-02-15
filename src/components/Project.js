import React from 'react'

// functional component
// `props` is already giving me all the projects
const Project = (props) => {

  let project = props.projects.filter(project => project.id == props.match.params.id)[0]

  return (
    <li>
      {project ? project.name : null}
    </li>
  )

}

export default Project

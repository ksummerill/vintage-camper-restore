import React from 'react'

// functional component
const Project = (props) => {

  let project = props.projects.filter(project => project.id == props.match.params.id)[0]

  return (
    <li>
      {project ? project.name : null}
    </li>
  )

}

export default Project

import React from 'react'

// functional component
const Project = (props) => {

  let project = props.projects.filter(project => project.id == props.match.params.id)[0]

  return (
    <h2>
      {project ? project.name : null}
    </h2>
  )

}

export default Project

import React from 'react'

// functional component
const Project = (props) => {

  let project = props.projects[props.match.params.id - 1]
  console.log(project)
  console.log(props)

  return (
    <li>
      {project ? project.name : null}
    </li>
  )

}

export default Project

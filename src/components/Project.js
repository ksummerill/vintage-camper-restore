import React from 'react'

// functional component
// `props` is already giving me all the projects
const Project = (props) => {

console.log(props)
  let project = props.match.params.id - 1
  console.log(project)


  return (
    <li>
      {project ? project.name : null}
    </li>
  )

}

export default Project

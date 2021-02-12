import React from 'react'

// functional component
const Project = (props) => {

console.log(props)
  return (
    <li>
      {props.projects.name}
    </li>
  )

}

export default Project

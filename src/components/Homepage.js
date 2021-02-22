import React from 'react'
import ProjectInput from './ProjectInput'
import {Link} from 'react-router-dom'

const Homepage = (props) => {

  return (
    <div>
      <h2>Vintage Camper Restore</h2>
          <Link to={'/projects'}>My Projects</Link><br></br>
          <Link to={'/projects/new'}>Create a new project</Link>
    </div>
  )

}

export default Homepage

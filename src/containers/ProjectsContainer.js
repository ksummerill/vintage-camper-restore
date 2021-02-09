import React from 'react'
import {connect} from 'react-redux'
import {fetchProjects} from '../actions/fetchProjects'
import Projects from '../components/Projects'
import ProjectInput from '../components/ProjectInput'

class ProjectsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    return (
      <div>
        <ProjectInput />
        <Projects projects={this.props.projects}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, {fetchProjects})(ProjectsContainer)

import React from 'react'
import {connect} from 'react-redux'
import {fetchProjects} from '../actions/fetchProjects'
import Projects from '../components/Projects'
import ProjectInput from '../components/ProjectInput'
import {Route} from 'react-router-dom'

class ProjectsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    return (
      <div>
        <Route path='/projects/new' component={ProjectInput}/>
        <Route path='/accounts/:id' />
        <Route exact path='/projects' render={(routerProps) => <Projects {...routerProps} projects={this.props.projects}/>}/>
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

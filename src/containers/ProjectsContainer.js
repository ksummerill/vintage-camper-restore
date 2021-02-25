import React from 'react'
import {connect} from 'react-redux'
import {fetchProjects} from '../actions/fetchProjects'
import Projects from '../components/Projects'
import Project from '../components/Project'
import Homepage from '../components/Homepage'
import ProjectInput from '../components/ProjectInput'
import InventoryShow from '../components/InventoryShow'
import {Route, Switch} from 'react-router-dom'

class ProjectsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/projects/new' component={ProjectInput}/>
          <Route path='/projects/:id' render={(routerProps) => <Project {...routerProps} projects={this.props.projects}/>}/>
          <Route path='/projects' render={(routerProps) => <Projects {...routerProps} projects={this.props.projects}/>}/>
          <Route exact path='/' render={(routerProps) => <Homepage {...routerProps} projects={this.props.projects}/>}/>
          <Route exact path='/projects/:id/inventories/:id' component={InventoryShow}/>
        </Switch>
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

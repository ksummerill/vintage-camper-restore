import React from 'react';
import {connect} from 'react-redux'
import {fetchProjects} from './actions/fetchProjects'
import './App.css';
import ProjectsContainer from './containers/ProjectsContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ProjectsContainer />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     projects: state.projects
//   }
// }

export default connect(null, {fetchProjects})(App);

import React from 'react';
import {connect} from 'react-redux'
import {fetchProjects} from './actions/fetchProjects'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        App
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

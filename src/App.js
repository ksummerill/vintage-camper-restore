import React from 'react';
import './App.css';
import ProjectsContainer from './containers/ProjectsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ProjectsContainer />
      </div>
    );
  }
}

export default App;

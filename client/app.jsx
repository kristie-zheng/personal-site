import React from 'react';
import ReactDOM from 'react-dom';
import ProjectList from './ProjectList.jsx';
import ProjectListEntry from './ProjectListEntry.jsx';

class App extends React.Component {
  render() {
    return (
      <div> 
      <ProjectList />
      </div>
    )
  }
} 


ReactDOM.render(<App />, document.getElementById('app'));

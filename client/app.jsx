import React from 'react';
import ReactDOM from 'react-dom';
import ProjectList from './ProjectList.jsx';
import ProjectListEntry from './ProjectListEntry.jsx';
import data from '../data.js';

class App extends React.Component {
  render() {
    return (
      <div> 
      <ProjectList data={data}/>
      </div>
    )
  }
} 


ReactDOM.render(<App />, document.getElementById('app'));

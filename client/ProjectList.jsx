import React from 'react';
import ProjectListEntry from './ProjectListEntry.jsx'
const ProjectList = (props) => {
  const data = props.data;
    return (
    <div>
    {data.map((project) =>
        <ProjectListEntry data={ project }/>
      )}
    </div>
  )
};

export default ProjectList;
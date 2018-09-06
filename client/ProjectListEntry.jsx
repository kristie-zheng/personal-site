import React from 'react';
import styled from 'styled-components';

const Entry = styled.span`
  display: block;
  border: 1px solid black;
  color: pink;
`

const ProjectListEntry = (props) => {
  const { data } = props;
  return (
    <div>
      <Entry>
        <div> 
          {data.title} 
        </div>
        <div> 
          {data.description} 
        </div>
      </Entry>
    </div>
  )
}

export default ProjectListEntry;
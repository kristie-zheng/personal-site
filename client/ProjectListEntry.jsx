import React from 'react';
import styled from 'styled-components';

const Entry = styled.span`
  display: block;
  border: 1px solid black;
  color: pink;
`

const ProjectListEntry = () =>{
  return (
    <div>
      <div> {thumbnail} </div>
      <div> {title} </div>
      <div> {description} </div>
    </div>
  )
}

export default ProjectListEntry;
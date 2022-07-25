import React from 'react';
import ProjectsPanel from 'components/projectsPanel';

const Projects = () => {
  const projects = [
    {
        id: '0001',
        title: 'Todo Website',
        description: 'Create a website like JIRA, but with less features',
    },
    {
        id: '0002',
        title: 'Todo Website',
        description: 'Create a website like JIRA, but with less features',
    },
    {
        id: '0003',
        title: 'Todo Website',
        description: 'Create a website like JIRA, but with less features',
    },
];
  return ( 
    <>
      <ProjectsPanel projects={projects}/>
    </>
  );
}
 
export default Projects;
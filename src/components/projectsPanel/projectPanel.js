import React from 'react';
import { Typography } from '@mui/material';
import ProjectItem from './projectItem/projectItem';

const ProjectsPanel = ({projects}) => {
    const handleEditProject = (id) => console.log("EDITED", id);
    const handleDeleteProject = (id) => console.log("REMOVED", id);
    return ( 
    <div className='flex flex-col m-4 items-center shadow-xl border-2 border-slate-200'>
        <Typography variant="h5" component="h5" className='w-full p-2 bg-slate-300'> 
            Projects
        </Typography>
        <div className="w-full p-4 bg-slate-100">
            {projects.map(project => <ProjectItem
                key={project.id}
                id={project.id}
                title={project.title}
                handleEdit={handleEditProject}
                handleDelete={handleDeleteProject}
            />)}
        </div>
  </div> );
}
 
export default ProjectsPanel;
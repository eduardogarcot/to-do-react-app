import React from 'react';
import { Typography } from '@mui/material';
import ProjectItem from './projectItem/projectItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeProjectById } from 'redux/slices/projects';
import { selectCurrentProject, setCurrentProject } from 'redux/slices/currentProject';
import http from 'services/http';

const ProjectsPanel = ({projects}) => {
    const dispatch = useDispatch();
    const currentProject = useSelector(selectCurrentProject);

    const handleEditProject = (id) => {
        console.log("EDITED", id);
    }
    const handleDeleteProject = (id) => {
        dispatch(removeProjectById({id}))
    }
    const handleSelectProject = (id) => {
        console.log("Selected", id);
        const url = `/project/${id}`;
        http.get(url)
            .then((response)=>{
                dispatch(setCurrentProject(response.data));
            })
            .catch(error=>{
                console.log(error);
            })
    }
    const checkProject = (id) => id === currentProject.id; 
    return ( 
    <div className='flex flex-col m-4 items-center shadow-xl border-2 border-slate-200'>
        <Typography variant="h5" component="p" className='w-full p-2 bg-slate-300'> 
            Projects
        </Typography>
        <div className="w-full p-4 bg-slate-100">
            {projects.map(project => <ProjectItem
                key={project.id}
                id={project.id}
                title={project.title}
                isSelected={checkProject(project.id)}
                handleEdit={handleEditProject}
                handleDelete={handleDeleteProject}
                handleSelectProject={handleSelectProject}
            />)}
        </div>
  </div> );
}
 
export default ProjectsPanel;
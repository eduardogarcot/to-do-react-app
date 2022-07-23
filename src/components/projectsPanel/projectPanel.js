import React from 'react';
import Icon from 'components/Icons';
import { Typography } from '@mui/material';


const HEADER_TITLE_CN = 'w-3/4 font-medium text-slate-500';
const CONTAINER_BUTTONS_CN='flex w-1/4 justify-end items-center';
const EDIT_BTN_CN = 'w-[2rem] h-[2rem] p-1 mr-[5%] border border-solid border-slate-800 bg-white rounded hover:bg-slate-200 hover:cursor-pointer';
const DELETE_BTN_CN = 'w-[2rem] h-[2rem] p-1 border border-solid border-slate-800 bg-red-500 rounded hover:bg-red-300 hover:cursor-pointer';
const CONTAINER_PROJECT_ITEM = 'flex p-4 border my-4 bg-slate-200 border-slate-400 first:mt-0 last:mb-0';

const ProjectsPanel = () => {
    const handleClick = () => console.log("REMOVED");
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
    <div className='flex flex-col m-4 items-center shadow-xl border-2 border-slate-200'>
        <Typography variant="h5" component="h5" className='w-full p-2 bg-slate-300'> 
            Projects
        </Typography>
        <div className="w-full p-4 bg-slate-100">
            {projects.map(project => <div className={CONTAINER_PROJECT_ITEM}>
                <Typography variant='h6' component='h6' className={HEADER_TITLE_CN}>{project.title}</Typography>
                <div className={CONTAINER_BUTTONS_CN}>
                    <Icon name='edit.png' containerClassName={EDIT_BTN_CN}/>
                    <Icon name='trash.png' containerClassName={DELETE_BTN_CN} handleClick={handleClick}/>
                </div>
            </div>)}
        </div>
  </div> );
}
 
export default ProjectsPanel;
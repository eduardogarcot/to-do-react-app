import React,{useState, useEffect} from 'react';
import ProjectsPanel from 'components/projectsPanel';
import http from 'services/http';
import { useDispatch, useSelector } from 'react-redux';

const Projects = () => {
  const [projects,setProjects] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    http.get('/projects')
      .then((response)=>{
        const {data} = response;
        setProjects(data);
      })
      .catch((error)=>{
        console.log(error);
        console.log("se murioooooooo");
      })
  },[dispatch])
  /*const projects = [
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
];*/

  return ( 
    <>
      <ProjectsPanel projects={projects}/>
    </>
  );
}
 
export default Projects;
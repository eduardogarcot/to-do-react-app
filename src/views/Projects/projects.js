import React, {useEffect} from 'react';
import ProjectsPanel from 'components/projectsPanel';
import http from 'services/http';
import { useDispatch, useSelector } from 'react-redux';
import { selectProjects, pushProjectsList } from 'redux/slices/projects';

const Projects = () => {
  const projects = useSelector(selectProjects);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    http.get('/projects')
      .then((response)=>{
        const {data} = response;
        dispatch(pushProjectsList(data));
      })
      .catch((error)=>{
        console.log(error);
        console.log("se murioooooooo");
      })
  },[dispatch])

  return ( 
    <>
      <ProjectsPanel projects={projects}/>
    </>
  );
}
 
export default Projects;
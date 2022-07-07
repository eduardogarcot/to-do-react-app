// IMPORTS
import React, { useEffect, useState } from 'react';
import BoardPanel from 'components/boardPanel';
import http from 'services/http';

// CLASSNAMES & CONSTANT
const CONTAINER_CN = 'flex flex-row w-full justify-around';

// COMPONENT
const Board = () => {
  // REQUEST PARA COMPONENTES
  const [task, setTasks] = useState({TO_DO:[],IN_PROGRESS:[],DONE:[]}); 
  useEffect(()=>{
    http.get('/tasks')
      .then((response)=>{
        const {data} = response;
        setTasks(data);
      })
      .catch((error)=>{
        console.log(error);
        console.log("se murioooooooo");
      })
  },[])
  return (<>
    <div className={CONTAINER_CN}>
      <BoardPanel name='TO DO' cards={task.TO_DO} />
      <BoardPanel name='IN PROGRESS' cards={task.IN_PROGRESS} />
      <BoardPanel name='DONE' cards={task.DONE} />
    </div>
  </>
  );
}
 
export default Board;
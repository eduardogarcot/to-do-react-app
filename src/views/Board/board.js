// IMPORTS
import React, { useEffect} from 'react';
import BoardPanel from 'components/boardPanel';
import http from 'services/http';
import { useDispatch, useSelector } from 'react-redux';
import { selectToDoList, pushToDo} from 'redux/slices/todoList';
import stringHelper from 'utils/strHelper';

// CLASSNAMES & CONSTANT
const CONTAINER_CN = 'flex flex-row w-full justify-around';

// COMPONENT
const Board = () => {
  const dispatch = useDispatch();
  const tasksLists = useSelector(selectToDoList);
  
  useEffect(()=>{
    http.get('/tasks')
      .then((response)=>{
        const {data} = response;
        dispatch(pushToDo(data));
      })
      .catch((error)=>{
        console.log(error);
        console.log("se murioooooooo");
      })
  },[dispatch])
  return (<>
    <div className={CONTAINER_CN}>
      {Object.keys(tasksLists).map(status => {
        const name = stringHelper.cleanStrWithUnderscore(status);
        const cards = tasksLists[status];
        return <BoardPanel name={name} cards={cards}/>
      })}
    </div>
  </>
  );
}
 
export default Board;
// IMPORTS
import React from 'react';
import TaskCard from './taskCard';
import {moveTaskTo} from 'redux/slices/todoList';
import { useDispatch } from 'react-redux';
// CLASSNAMES & CONSTANT
const CONTAINER_CN = 'flex flex-col items-center w-[30%] p-2 min-h-[30rem] shadow-xl border border-1 border-slate-200';
const PANEL_TITLE_CN = 'w-full text-xl font-medium text-slate-500 mb-2';

// COMPONENT
const BoardPanel = ({name, status, cards}) => {
  const dispatch=useDispatch();

  const handleDragOver = (e) => {
    e.preventDefault();
  }
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }
  const handleDrop = (e) => {
    const id = e.dataTransfer.getData('id');
    dispatch(moveTaskTo({id,status}));
  }

  return ( <>
    <div 
      className={CONTAINER_CN} 
      onDragOver={(e)=>handleDragOver(e)}
      //onDragLeave={(e)=>handleDragLeave(e)}
      onDrop={(e)=>handleDrop(e)}
    >
      <p className={PANEL_TITLE_CN}>{name}</p>
      {cards.map((card,index) =>{
        const {id, labelId, title, description, status} = card;
        return <TaskCard
          key={index+id} 
          id={id}
          labelId={labelId}
          title={title}
          description={description}
          status={status}
        />;
      })}
    </div> 
  </>
);
}
 
export default BoardPanel;
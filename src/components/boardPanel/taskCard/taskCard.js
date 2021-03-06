// IMPORTS
import React from 'react';
import Icon from 'components/Icons';
import { useDispatch } from 'react-redux';
import { removeToDoTaskById } from 'redux/slices/todoList';
// CLASSNAMES
const CONTAINER_CN='flex flex-col w-full mx-2 mb-2 border border-solid border-slate-300';
const CONTAINER_INFO_CN='flex justify-between w-full p-2 bg-slate-300';
const TITLE_CN = 'pr-1';
const CONTAINER_BUTTONS_CN='flex';
const EDIT_BTN_CN = 'w-[1.5rem] h-[1.5rem] p-1 mr-[5%] border border-solid border-slate-800 bg-white rounded hover:bg-slate-200 hover:cursor-pointer';
const DELETE_BTN_CN = 'w-[1.5rem] h-[1.5rem] p-1 border border-solid border-slate-800 bg-white rounded hover:bg-slate-200 hover:cursor-pointer';
const CONTAINER_DESCRIPTION_CN = 'flex flex-col w-full p-2 bg-slate-100 descrption';
const DESCRIPTION_CN = '';

// COMPONENT
const TaskCard = ({
  id,
  labelId,
  title,
  description,
  status
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeToDoTaskById({id}));
  }

  const handleDragStart = (e) => {
    e.stopPropagation();
    e.dataTransfer.setData('id', id);
    e.dataTransfer.effectAllowed = "copyMove";
  }

  return ( <>
    <div className={CONTAINER_CN} draggable onDragStart={(e)=>handleDragStart(e)}>
        <div className={CONTAINER_INFO_CN}>
          <p className={TITLE_CN}>{labelId}-{title}</p>
          <div className={CONTAINER_BUTTONS_CN}>
            <Icon name='edit.png' containerClassName={EDIT_BTN_CN}/>
            <Icon name='trash.png' containerClassName={DELETE_BTN_CN} handleClick={handleClick}/>
          </div>
        </div>
        <div className={CONTAINER_DESCRIPTION_CN}>
          <p className={DESCRIPTION_CN}>{description}</p>
        </div>
      </div>
  </> );
}
 
export default TaskCard;
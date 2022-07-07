// IMPORTS
import React from 'react';
import TaskCard from './taskCard';

// CLASSNAMES & CONSTANT
const CONTAINER_CN = 'flex flex-col items-center w-[30%] p-2 min-h-[30rem] shadow-xl border border-1 border-slate-200';
const PANEL_TITLE_CN = 'w-full text-xl font-medium text-slate-500 mb-2';

// COMPONENT
const BoardPanel = ({name, status, cards}) => {
  return ( <>
    <div className={CONTAINER_CN}>
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
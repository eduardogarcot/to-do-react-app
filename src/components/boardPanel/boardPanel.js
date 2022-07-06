// IMPORTS
import React from 'react';
import TaskCard from './taskCard';

// CLASSNAMES & CONSTANT
const CONTAINER_CN = 'flex flex-col items-center w-[30%] p-2 min-h-[30rem] shadow-xl border border-1 border-slate-200';
const PANEL_TITLE_CN = 'w-full text-xl font-medium text-slate-500 mb-2';
const mockCards = [{
  id:'00001',
  labelId:'P_01',
  title:'Design interface for board module',
  description:'Design interface for modules and submodules that will be used in Board view',
},
{
  id:'00002',
  labelId:'P_02',
  title:'Design interface for board module',
  description:'Design interface for modules and submodules that will be used in Board view',
},
{
  id:'00003',
  labelId:'P_03',
  title:'Design interface for board module',
  description:'Design interface for modules and submodules that will be used in Board view',
}]

// COMPONENT
const BoardPanel = ({name, cards}) => {
  const cardToUse = cards ?? mockCards;
  
  return ( <>
    <div className={CONTAINER_CN}>
      <p className={PANEL_TITLE_CN}>{name}</p>
      {cardToUse.map((card,index) =>{
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
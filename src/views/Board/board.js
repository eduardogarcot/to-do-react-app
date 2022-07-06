// IMPORTS
import React from 'react';
import BoardPanel from 'components/boardPanel';

// CLASSNAMES & CONSTANT
const CONTAINER_CN = 'flex flex-row w-full justify-around';

// COMPONENT
const Board = () => {
  // REQUEST PARA COMPONENTES
  return (<>
    <div className={CONTAINER_CN}>
      <BoardPanel name='TO DO' />
      <BoardPanel name='IN PROGRESS' cards={[]} />
      <BoardPanel name='DONE' cards={[]} />
    </div>
  </>
  );
}
 
export default Board;
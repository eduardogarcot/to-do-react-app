import React from 'react';

const Board = () => {
  return (<>
    <h2>This is the Board View</h2>
    <div class="flex flex-row w-full justify-around">
      <div className='flex w-[30%]  p-2 min-h-[30rem] border border-2 border-slate-600 rounded'>
        TO DO
      </div>
      <div className='flex w-[30%]  p-2 min-h-[30rem] border border-2 border-slate-600 rounded'>
        IN PROGRESS
      </div>
      <div className='flex w-[30%]  p-2 min-h-[30rem] border border-2 border-slate-600 rounded'>
        DONE
      </div>
    </div>
  </>
  );
}
 
export default Board;
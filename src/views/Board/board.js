import Icon from 'components/Icons';
import React from 'react';

const Board = () => {
  return (<>
    <h2>This is the Board View</h2>
    <div class="flex flex-row w-full justify-around">
      <div className='flex flex-col items-center w-[30%]  p-2 min-h-[30rem] shadow-xl border border-1 border-slate-200 '>
        <p className='text-xl font-medium text-slate-500 mb-2'>To Do</p>
        <div className='flex flex-col w-full mx-2 mb-2 border border-1 border-slate-300 item'>
          <div class="flex justify-between w-full p-2 bg-slate-300 info">
            <p className='id+title'>  Title</p>
            <div class="flex botones">
              <Icon name='edit.png' containerClassName='w-[1.5rem] p-1 mr-[5%] border border-solid border-slate-800 bg-white rounded'/>
              <Icon name='trash.png' containerClassName='w-[1.5rem] p-1 border border-solid border-slate-800 bg-white rounded'/>
            </div>
          </div>
          <div className='flex flexx-col w-full p-2 bg-slate-100 descrption'>
            <p>Hola Mundo en este ticket vamos a ver como funcionan las maquinas de vapor</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center w-[30%]  p-2 min-h-[30rem] shadow-xl border border-1 border-slate-200 '>
        <p className='text-xl font-medium text-slate-500'>In Progress</p>
      </div>
      <div className='flex flex-col items-center w-[30%]  p-2 min-h-[30rem] shadow-xl border border-1 border-slate-200 '>
        <p className='text-xl font-medium text-slate-500'>Done</p>
      </div>
    </div>
  </>
  );
}
 
export default Board;
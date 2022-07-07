import React from 'react';

const MainContent = ({children}) => {
  return ( <main className='flex flex-col mb-[5vh]'>
    {children}
  </main> );
}
 
export default MainContent;
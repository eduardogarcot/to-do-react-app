import React from 'react';

const MainContent = ({children}) => {
  return ( <main className='flex flex-col'>
    {children}
  </main> );
}
 
export default MainContent;
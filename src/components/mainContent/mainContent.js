import React from 'react';

const MainContent = ({children}) => {
  return ( <main className='px-2 py-16 md:px-16'>
    {children}
  </main> );
}
 
export default MainContent;
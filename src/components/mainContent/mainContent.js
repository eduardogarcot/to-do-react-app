import React from 'react';
import SideBar from 'components/SideBar';
const MainContent = ({children}) => {
  return ( <main className='flex flex-col md:flex-row md:min-h-[85vh]'>
    <SideBar/>
    <div className='px-2 py-16 md:px-16'>
      {children}
    </div>
  </main> );
}
 
export default MainContent;

import React from 'react';
import { Outlet, Navigate, useLocation } from "react-router-dom";
import SideBar from 'components/SideBar';
import auth from "services/auth";

const PrivateRoute = () => {
  const location = useLocation(); 
  if (!auth.isLoggedIn()) return <Navigate to='login' state={{from: location}}/>;
  
  return <>
    <div className='flex flex-col md:flex-row md:min-h-[85vh]'>
      <SideBar/>
      <div className='px-2 py-8 md:px-8 w-full'>
        <Outlet/>
      </div>
    </div>
    
  </>
}
 
export default PrivateRoute;

import React from 'react';
import { Outlet, Navigate, useLocation } from "react-router-dom";
import auth from "services/auth";

const PrivateRoute = () => {
  const location = useLocation(); 
  return (auth.isLoggedIn() ? <Outlet/> : <Navigate to='login' state={{from: location}}/>);
}
 
export default PrivateRoute;
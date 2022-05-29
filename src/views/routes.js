import React from 'react';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './privateRoute';
import LoginForm from './Login';
import Landing from './Landing';
import Dashboard from './Dashboard';


const RoutesComponent = () => {
  return ( <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='login' element={<LoginForm/>}/>
    <Route path='/' element={<PrivateRoute/>}>
      <Route path='/home' element={<Dashboard/>}/>
    </Route>
  </Routes> );
}
   
export default RoutesComponent;
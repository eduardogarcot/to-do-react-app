import React from 'react';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './privateRoute';
import LoginForm from './Login';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Projects from './Projects';
import Analytics from './Analytics';
import Board from './Board';
import Settings from './Settings';


const RoutesComponent = () => {
  return ( <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='login' element={<LoginForm/>}/>
    <Route path='/' element={<PrivateRoute/>}>
      <Route path='/home' element={<Dashboard/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/analytics' element={<Analytics/>}/>
      <Route path='/board' element={<Board/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Route>
  </Routes> );
}
   
export default RoutesComponent;
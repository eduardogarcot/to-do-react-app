
import React, { useState } from 'react';
import SideBarItems from './sideBarItems';

const items = [
  {label:'Home', iconName:'home.png', url:'/home'},
  {label:'Projects', iconName:'computer.png', url:'/board'},
  {label:'Board', iconName:'board.png', url:'/board'},
  {label:'Analytics', iconName:'performance.png', url:'/home'},
  {label:'Settings', iconName:'settings.png', url:'/home'}
];

const SideBar = (props) => {
  const [show, setShow] = useState(true);
  const getClassName = () => {
    return show ? 'md:w-[15%]' : 'md:w-[5%] md:items-center';
  }
  return ( <nav className={`flex md:flex-col min-h-[5vh] bg-cyan-700 ${getClassName()}`}>
    <button onClick={()=>setShow(!show)}>{show?'Hide':'Show'}</button>
    <SideBarItems items={items} show={show}/>
  </nav> );
}
 
export default SideBar;
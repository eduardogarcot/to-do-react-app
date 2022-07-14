
import React, { useState } from 'react';
import SideBarHandle from './sideBarHandle';
import SideBarItems from './sideBarItems';

const items = [
  {label:'Home', iconName:'home.png', url:'/home'},
  {label:'Projects', iconName:'computer.png', url:'/projects'},
  {label:'Board', iconName:'board.png', url:'/board'},
  {label:'Analytics', iconName:'performance.png', url:'/analytics'},
  {label:'Settings', iconName:'settings.png', url:'/settings'}
];

const SideBar = (props) => {
  const [show, setShow] = useState(true);
  const getClassName = () => {
    return show ? 'md:w-[15%]' : 'md:w-[5%] md:items-center';
  }
  const handleShow = () => setShow(!show);
  return ( <nav className={`flex justify-center md:justify-start md:flex-col min-h-[5vh] bg-slate-400 transition-[width] duration-300 ${getClassName()}`}>
    <SideBarHandle show={show} handleShow={handleShow} />
    <SideBarItems items={items} show={show} />
  </nav> );
}
 
export default SideBar;
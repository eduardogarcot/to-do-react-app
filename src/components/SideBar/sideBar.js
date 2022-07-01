import SideBarItem from 'components/SideBarItem';
import React, { useState } from 'react';

const SideBar = (props) => {
  const [show, setShow] = useState(true);
  const getClassName = () => {
    return show ? 'md:w-[20%]' : 'md:w-[5%]';
  }
  return ( <nav className={`min-h-[5vh] bg-cyan-700 ${getClassName()}`}>
    <button onClick={()=>setShow(!show)}>{show?'Hide':'Show'}</button>
    <SideBarItem label='Felipe el Cojo' show={show}/>
    <SideBarItem label='Alberto el militar' show={show}/>
  </nav> );
}
 
export default SideBar;
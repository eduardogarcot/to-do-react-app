import React, { useState } from 'react';

const SideBar = (props) => {
  const [show, setShow] = useState(true);
  const getClassName = () => {
    return show ? 'md:w-40' : 'md:w-12';
  }
  return ( <nav className={`w-full min-h-[5vh] bg-cyan-700 ${getClassName()}`}>
    <button onClick={()=>setShow(!show)}>{show?'Hide':'Show'}</button>
  </nav> );
}
 
export default SideBar;
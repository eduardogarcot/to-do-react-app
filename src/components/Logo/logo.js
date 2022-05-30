import React from 'react';
import {ReactComponent as ToDoLogo} from 'assets/images/todo-logo.svg';
const classNames = {
  login: { logoColor:'fill-sky-300', logoSize: 'w-[4rem] h-[4rem]', label: 'font-bold text-sky-300', bgColor:'' },
  navbar: { logoColor:'fill-white', logoSize: 'w-[3rem] h-[3rem]', label: 'font-normal text-white', bgColor:'' },
}
const Logo = ({theme}) => {
  const style = classNames[theme];
  return (<div className={`flex flex-row justify-center items-center ${style.bgColor}`}>
    <div className='flex' >
      <ToDoLogo className={`flex ${style.logoSize} ${style.logoColor}`} />
    </div>
    <h1 className={`flex font-logo text-lg ${style.label}`}> To Do List</h1>
  </div>);
}
 
export default Logo;


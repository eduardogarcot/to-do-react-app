import React from 'react';
import Icon from 'components/Icons';
const SideBarHandle = ({show, handleShow}) => {
  const iconName = show ? 'previous.png': 'next.png'; 
  const iconClassName = 'w-4 cursor-pointer';
  const containerClassName = 'md:flex md:w-full md:justify-end md:p-2 md:m-1 hidden';
  return ( <Icon 
    name={iconName}
    containerClassName={containerClassName }
    iconClassName={iconClassName}
    handleClick={handleShow}
  /> );
}
 
export default SideBarHandle;
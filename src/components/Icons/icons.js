import React from 'react';

const Icon = ({name, containerClassName, iconClassName, handleClick}) => {
  const path = `/images/icons/${name}`;
  const customHandleClick = () => {
    if (handleClick) handleClick();
  } 
  return (
    <div className={containerClassName}>
      <img src={path} className={iconClassName} alt="aka" onClick={customHandleClick}/>
    </div>
  );
};

export default Icon;
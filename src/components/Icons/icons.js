import React from 'react';

const Icon = ({name, containerClassName, iconClassName, url}) => {
  const path = `/images/icons/${name}`;
  const handleClick = () => {
    console.log("ve para : ", url);
  }
  return (
    <div className={containerClassName} onClick={handleClick}>
      <img src={path} className={iconClassName} alt="aka" />
    </div>
  );
};

export default Icon;
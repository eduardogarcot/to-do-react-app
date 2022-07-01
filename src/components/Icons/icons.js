import React from 'react';

const Icon = ({name, containerClassName, iconClassName}) => {
  const path = `/images/icons/${name}`;
  return (
    <div className={containerClassName}>
      <img src={path} className={iconClassName} alt="aka" />
    </div>
  );
};

export default Icon;
import Icon from 'components/Icons';
import React from 'react';

const ICON_CN='w-6';
const SHOW_CN='flex justify-start border-2 border-solid border-slate-300 rounded p-2 m-1';
const HIDE_CN='flex w-fit justify-start border-2 border-solid border-slate-300 rounded p-2 m-1'

const SideBarItem = ({label, iconName, url, show}) => {
  const handleClick = () => {
    console.log("ve para : ", url);
  }
  const getClassName = (show) => show ? SHOW_CN : HIDE_CN;
  return (<div className={getClassName(show)} onClick={handleClick}>
    <Icon 
      name={iconName}
      iconClassName={ICON_CN}
    />
    {show && <h3 className='ml-4'>{label}</h3>}
  </div>);
}
 
export default SideBarItem;
import Icon from 'components/Icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ICON_CN='w-8 md:w-6';
const SHOW_CN=' ';
const HIDE_CN=' w-fit';
const BASE_CN='flex justify-start items-center bg-slate-100 hover:bg-slate-300 border-2 border-solid border-slate-800 rounded p-1 md:p-2 m-1 cursor-pointer';


const SideBarItem = ({label, iconName, url, show}) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(url);
  const getClassName = (show) => (BASE_CN + (show ? SHOW_CN : HIDE_CN));
  return (<div className={getClassName(show)} onClick={handleClick}>
    <Icon 
      name={iconName}
      iconClassName={ICON_CN}
    />
    {show && <h3 className='hidden md:block md:ml-4'>{label}</h3>}
  </div>);
}
 
export default SideBarItem;
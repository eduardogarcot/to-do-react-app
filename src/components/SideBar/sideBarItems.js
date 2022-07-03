import React from 'react';
import SideBarItem from 'components/SideBarItem';

const SideBarItems = ({items, show}) => {
  return ( <>
  {items.map((item,index)=><SideBarItem key={index} label={item.label} iconName={item.iconName} url={item.url} show={show}/>)}
  </>)
}
 
export default SideBarItems;
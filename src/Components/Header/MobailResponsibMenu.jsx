import React from 'react';
import {NavLink} from 'react-router-dom'
const MobailResponsibMenu = ({active}) => {
  const links = [
    {id:1,path:"/",link:"হোম"},
    {id:2,path:"/about",link:"আমাদের সম্পর্কে"},
    {id:3,path:"/contact",link:"যোগাযোগ"},
    ]
  return (
    <div>
      {active && (
      <div className="container absolute top-10 left-0 p-6 z-50">
        {/*nav link*/}
        <div className="bg-orange-500 rounded-3xl p-6 block md:hidden text-md flex flex-col justify-center items-center gap-4 font-bold uppercase">
          {links.map(item => (
          <NavLink
          key={item.id} 
          to={item.path}
          className={({isActive})=> isActive?"text-blue-500":"text-white"}
          >{item.link}</NavLink>
          ))}
        </div>
      </div>
      )}
    </div>
  );
};

export default MobailResponsibMenu;
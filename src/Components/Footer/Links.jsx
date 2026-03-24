import React from 'react';
import {NavLink} from 'react-router-dom'
const Links = () => {
  const links = [
    {id:1,path:"/",link:"হোম"},
    {id:2,path:"/about",link:"আমাদের সম্পর্কে"},
    {id:3,path:"/contact",link:"যোগাযোগ"},
    ]
  return (
    <div>
      <div className="container">
        {/*nav link*/}
        <div className="p-6 text-md flex flex-col justify-center items-center md:items-start gap-4 font-bold uppercase">
          {links.map(item => (
          <NavLink
          key={item.id} 
          to={item.path}
          className={({isActive})=> isActive?"text-blue-500":""}
          >{item.link}</NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;
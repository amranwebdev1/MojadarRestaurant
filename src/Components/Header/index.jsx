import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import MobailRes from './MobailResponsibMenu';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [active,setActive] = useState(false)
  const links = [
    {id:1,path:"/",link:"হোম"},
    {id:2,path:"/about",link:"আমাদের সম্পর্কে"},
    {id:3,path:"/contact",link:"যোগাযোগ"},
    ]
  return (
    <header className="py-2 md:py-4">
      <nav className="flex justify-between items-center">
        {/*logo*/}
        <div>
          <h1 className="text-2xl font-bold md:text-5xl">মজাদার <span className="text-orange-500">রেস্টুরেন্ট</span></h1>
        </div>
        {/*nav link*/}
        <div className="hidden md:block md:text-lg md:flex md:justify-center md:items-center md:gap-4 md:font-bold md:uppercase">
          {links.map(item => (
          <NavLink
          key={item.id} 
          to={item.path}
          className={({isActive})=> isActive?"text-blue-500":""}
          >{item.link}</NavLink>
          ))}
        </div>
        {/*menu*/}
        {active?(<RxCross2
        className="md:hidden text-4xl"
        onClick={()=> setActive(!active)}
        />):(<IoMenu 
        className="md:hidden text-4xl font-bold"
        onClick={()=> setActive(!active)}
        />)}
      </nav>
      <MobailRes active={active}/>
    </header>
  );
};

export default Header;
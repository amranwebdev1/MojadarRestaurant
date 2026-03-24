import React,{useState,useEffect} from 'react';
import Btn from '../Btn';
import {herro} from '../../assets';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Follow from '../Footer/Follow'
import api from '../../Api';
const Herro = () => {
  const [followLink,setFollowLink] = useState(null)
  useEffect(()=>{
    const getData = async ()=>{
      try{
        const res = await api.get("/info");
        setFollowLink(res.data.data)
      }catch(err){
        console.log(err.message)
      }
    }
    getData()
  },[])
  return (
    <div className={`relative w-full h-[90vh] md:h-[600px] overflow-hidden flex justify-center items-center rounded-md`}>

      {/* Background Image */}
      <div 
      style={{backgroundImage:`url(${herro})`}}
      className="absolute inset-0 bg-cover bg-bottom"></div>

      {/* Dark Overlay (change /40 to /50 or /60 if want darker) */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center">

        <h1 className="text-3xl md:text-5xl text-white font-bold">
          আসসালামু আলাইকুম!
        </h1>

        <h2 className="text-2xl md:text-4xl text-white font-bold mt-2">
          মজাদার রেস্টুরেন্টে আপনাকে <span className="text-orange-500">স্বাগতম</span>
        </h2>
        <p className="text-2xl text-white font-bold mt-15  md:text-3xl">Follow Me</p>
        <MdKeyboardDoubleArrowDown className="text-3xl text-orange-500 mb-1 animate-ping"/>
        <Follow 
       facebook={followLink?.facebook || ""}
       tiktok={followLink?.tiktok || ""}
       youtub={followLink?.youtub || ""}
       />
      </div>
    </div>
  );
};

export default Herro;
import React,{useState,useEffect} from 'react';
import Links from './Links';
import { FaDownload } from "react-icons/fa6";
import Follow from './Follow'
import api from '../../Api'
import {herro} from '../../assets';
const Footer = () => {
  const [footerData,setFooterData] = useState(null)
  useEffect(()=>{
    const getData = async ()=>{
      try{
        const res = await api.get("/info");
        setFooterData(res.data.data)
      }catch(err){
        console.log(err.message)
      }
    }
    getData()
  },[])
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 py-10 bg-pink-50">
      {/*logi*/}
      <div>
        <h1 className="text-2xl font-bold text-center">মজাদার <span className="text-orange-500">রেস্টুরেন্ট</span></h1>
        <a 
        href="/mojadar_restaurant.apk"
        download
        className="flex justify-center items-center text-xl font-bold gap-2 mt-4  rounded-full bg-orange-500 text-white p-2 hover:bg-black mx-13">
          Download Apk <FaDownload className="text-2xl"/>
        </a>
      </div>
      {/*quik*/}
      <div>
        <Links />
      </div>
      {/*follow*/} 
      <div className="flex flex-col justify-center items-center gap-4 p-3 border-t-2 md:border-none">
        <h2 className="text-2xl font-bold">Follow Me</h2>
       <Follow 
       facebook={footerData?.facebook || ""}
       tiktok={footerData?.tiktok || ""}
       youtub={footerData?.youtub || ""}
       />
      </div>
    </div>
    <p className="p-4 text-center text-md md:text-lg font-bold text-white bg-black">@mojadar resturent - 2025</p>
    </div>
  );
};

export default Footer;
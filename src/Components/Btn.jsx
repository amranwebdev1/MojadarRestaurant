import React,{useState,useEffect} from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import api from '../Api';
const Btn = () => {
  const [btnLink,setBtnLink] = useState("")
  
  useEffect(()=>{
    const getBtnLink = async ()=>{
     const res = await api.get("/info");
     setBtnLink(res.data.data)
    }
    getBtnLink()
  },[])
  return (
    <div className="flex justify-center items-center gap-6 py-2 px-4 mt-3 rounded-full">
      <a href={`tel:${btnLink?.phone || ""}`} className="p-3 rounded-full bg-green-500">
        <FaPhoneVolume className="text-3xl md:text-5xl text-white"/>
      </a>
      <h2 className="text-2xl md:text-4xl font-bold text-orange-500">OR</h2>
      <a href={`https://wa.me/+88${btnLink?.whatsApp || ""}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-green-500">
      <BsWhatsapp className="text-3xl md:text-5xl text-white"/>
      </a>
    </div>
  );
};

export default Btn;
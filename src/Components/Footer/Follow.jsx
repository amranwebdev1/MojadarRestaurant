import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const Follow = ({facebook,tiktok,youtub}) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4">
         
          {facebook && (
          <a 
          href={facebook || ""} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 p-3 rounded-full">
          <FaFacebookF className="text-3xl text-white"/>
        </a>
        )}
       {tiktok && (
        <a 
        href={tiktok || ""}
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full">
          <FaTiktok className="text-3xl text-black"/>
        </a>
        )}
       {youtub && (
        <a 
        href={youtub || ""}
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full hover:bg-red-500">
          <IoLogoYoutube className="text-3xl text-red-500"/>
        </a>
        )}
       </div>
    </div>
  );
};

export default Follow;
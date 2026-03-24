import React from "react";
import { TbSoupFilled } from "react-icons/tb";
import { IoSparklesSharp } from "react-icons/io5";
import logoImg from "../assets/imonWet.jpg";

const FullScreenLoading = ({ logo }) => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col justify-center items-center z-50">
      
      {/* Center Logo */}
      <div className="mb-8">
        <img
          src={logoImg}
          alt="Logo"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg animate-pulse"
        />
      </div>

      {/* Spinner */}
      <div className="mb-6 border-8 border-gray-200 border-t-orange-500 rounded-full w-16 h-16 animate-spin"></div>

      {/* Animated Icons */}
      <div className="flex gap-6 mt-6">
        <TbSoupFilled className="text-5xl text-orange-500 animate-bounce" />
        <IoSparklesSharp className="text-5xl text-green-500 animate-pulse" />
      </div>

      {/* Loading Text */}
      <h2 className="text-2xl md:text-3xl font-bold mt-6">Loading...</h2>
      <p className="text-gray-500 text-sm md:text-base mt-2">
        দয়া করে অপেক্ষা করুন, ডাটা লোড হচ্ছে 
      </p>
    </div>
  );
};

export default FullScreenLoading;
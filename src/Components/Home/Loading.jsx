import React from "react";
import { FaUtensils } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="px-4 my-10 space-y-10">
      
      {/* ===== Menu Loading ===== */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">মেনু</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-2xl shadow-md animate-pulse bg-white"
            >
              {/* Image skeleton */}
              <div className="w-[100px] md:w-[130px] h-[80px] bg-gray-300 rounded-xl flex items-center justify-center">
                <FaUtensils className="text-gray-400 text-xl" />
              </div>

              {/* Text skeleton */}
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Product Loading ===== */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">প্রোডাক্ট</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-md overflow-hidden bg-white animate-pulse"
            >
              {/* Image */}
              <div className="w-full h-52 bg-gray-300 flex items-center justify-center">
                <FaUtensils className="text-gray-400 text-2xl" />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>

                {/* Button */}
                <div className="flex justify-end">
                  <div className="h-8 w-20 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Loading;
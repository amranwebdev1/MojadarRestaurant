import React from "react";

const Loading = () => {
  return (
    <div className="w-full mt-20 px-4 animate-pulse">
      
      {/* Title */}
      <div className="h-6 w-40 bg-gray-300 rounded mx-auto mb-6"></div>

      {/* Image + Text Layout */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        
        {/* Image Skeleton */}
        <div className="w-40 h-40 md:w-52 md:h-52 bg-gray-300 rounded-full"></div>

        {/* Text Skeleton */}
        <div className="flex-1 w-full space-y-3">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>

      </div>

      {/* Caption Skeleton */}
      <div className="mt-8 border-l-4 border-gray-300 bg-gray-100 p-4 rounded-xl">
        <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>

    </div>
  );
};

export default Loading;
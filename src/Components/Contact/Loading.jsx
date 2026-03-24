import React from "react";

const ContactInfoLoading = () => {
  return (
    <div className="grid grid-cols-1 gap-4 my-10 justify-center items-center shadow-xl inset-shadow-sm p-4 rounded-3xl animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-64 bg-gray-300 rounded-2xl md:h-80"></div>

      {/* Text Skeleton */}
      <div className="text-center md:text-left space-y-4 mt-4">
        <div className="h-6 w-3/4 bg-gray-300 rounded mx-auto md:mx-0"></div>
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
      </div>

      {/* Button Skeletons */}
      <div className="flex justify-center md:justify-start gap-4 mt-4">
        <div className="h-10 w-24 bg-gray-300 rounded-full"></div>
        <div className="h-10 w-24 bg-gray-300 rounded-full"></div>
      </div>
      
    </div>
  );
};

export default ContactInfoLoading;
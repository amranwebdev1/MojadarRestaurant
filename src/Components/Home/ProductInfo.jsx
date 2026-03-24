import React from "react";
import Btn from "../Btn";

const Products = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 my-10 px-4">
      {items?.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item?.image}
                alt=""
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                {item?.title}
              </h2>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {item?.desc}
              </p>

              {/* Button */}
              <div className="flex justify-between items-center">
                
                <Btn />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
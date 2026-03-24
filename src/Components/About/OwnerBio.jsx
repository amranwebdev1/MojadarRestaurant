import React from 'react';

const Owner = ({image,bio}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20 justify-center items-center shadow-xl inset-shadow-sm p-4 rounded-3xl">
      {image && (<img src={image} alt="" className="w-full"/>)}
      <div className="text-left">
        
        <p 
        className="text-lg md:text-xl"
        dangerouslySetInnerHTML={{ __html: bio || "" }}
        >
        </p>
      </div>
    </div>
  );
};

export default Owner;
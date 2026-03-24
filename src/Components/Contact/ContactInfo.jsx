import React from 'react';
import ContactBtn from './ContactBtn';

const ContactInfo = ({image,title,desc,phone,whatsApp}) => {
  return (
    <div className="grid grid-cols-1 gap-4 my-10 justify-center items-center shadow-xl inset-shadow-sm p-4 rounded-3xl">
      <img src={image || ""} alt="" className="w-full"/>
      <div className="text-center md:text-left">
        <h2 className="text-lg md:text-2xl font-bold">{title || ""}</h2>
        <p className="text-md md:text-xl"
        dangerouslySetInnerHTML={{ __html:desc|| "" }}
        ></p>
        <ContactBtn 
        phone={phone}
        whatsApp={whatsApp}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
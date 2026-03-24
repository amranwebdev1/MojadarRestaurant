import React,{useState,useEffect} from 'react';

import ContactInfo from './ContactInfo';
import Loading from './Loading';
import api from '../../Api'
const Contact = () => {
  const [contactData,setContactData] = useState(null)
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    const getData = async ()=>{
      setLoading(true)
      try{
        const res = await api.get("/info");
        setContactData(res.data.data)
        setLoading(false)
      }catch(err){
        console.log(err.message)
      }
    }
    getData()
  },[])
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold mt-7">যুগাযুগ করুন</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2 md:gap-6">
      {loading ? (
      <Loading />
      ):(
      <>
        {contactData?.contact && contactData.contact.map(item => (
      <ContactInfo 
      key={item._id}
      image={item?.image || ""}
      title={item?.title || ""}
      desc={item?.desc || ""}
      phone={item?.phone || ""}
      whatsApp={item?.whatsApp || ""}
      />
      ))}
      </>
      )}
    </div>
    </div>
  );
};

export default Contact;
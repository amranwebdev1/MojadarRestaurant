import React,{useState,useEffect} from 'react';
import { TbSoupFilled } from "react-icons/tb";
import { IoSparklesSharp } from "react-icons/io5";
import { FaTag } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

import Owner from './OwnerBio'
import Loading from './Loading'
import api from '../../Api'
const About = () => {
  const [aboutData,setAboutData] = useState(null)
  const [loading,setLoading] = useState(false)
  const items = [
    {id:1,text:"প্রতিদিন ফ্রেশ খাবার",icon:<TbSoupFilled className="text-5xl text-orange-500"/> },
    {id:5,text:"পরিষ্কার ও হাইজেনিক রান্না",icon:<IoSparklesSharp className="text-5xl text-orange-500"/> },
    {id:2,text:"সাশ্রয়ী দাম",icon:<FaTag className="text-5xl text-orange-500"/> },
    {id:3,text:"দ্রুত ও বন্ধুসুলভ সার্ভিস",icon:<IoTimerSharp className="text-5xl text-orange-500"/> },
    {id:4,text:"১০০% স্বাদের গ্যারান্টি",icon:<FaStar className="text-5xl text-orange-500"/> },
    ]
    
    
  //get data 
  
  useEffect(()=>{
    const getData = async ()=>{
      setLoading(true)
      try{
        const res = await api.get("/info");
        setAboutData(res.data.data)
        setLoading(false)
      }catch(err){
        console.log(err.message)
      }
    }
    getData()
  },[])
  return (
    <section className="my-20">
      <div>
        <div className="flex flex-col justify-center items-center my-10">
          <h2 className="text-3xl font-bold my-5">আমাদের সম্পর্কে</h2>
          <p
  className="text-lg md:text-xl"
  dangerouslySetInnerHTML={{ __html: aboutData?.aboutUs || "" }}
></p>
          
        </div>
        {/*আমাদের বিশেষত্ব/*/}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold md:text-4xl my-12">আমাদের বিশেষত্ব</h2> 
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
            {items.map(item => (
            <div key={item.id} className="p-4 rounded-3xl inset-shadow-xs shadow-lg flex flex-col justify-center items-center">
              {item.icon}
              <p className="text-lg font-bold text-center">{item.text}</p>
            </div>))}
          </div>
          {/*Owner bio*/}
          {loading ? (
          <Loading />
          ):(
          <>
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center">Owner Bio</h2>
            <Owner 
            image={aboutData?.ownerImg || ""} 
            bio={aboutData?.ownerbio || ""}
            />
          </div>
          {/*____*/}
         {aboutData?.caption && ( <div className="border-l-4 border-green-500 rounded-2xl bg-[#f9fdfb] p-2 my-4">
            <p className="text-lg font-bold">{aboutData.caption || ""}</p>
          </div>

          )}
        </>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
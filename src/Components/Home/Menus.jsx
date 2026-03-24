import React,{useState,useEffect} from 'react';
import api from '../../Api';
const Menus = ({item}) => {
  const [homeData,setHomeData] = useState(null)
  useEffect(()=>{
    const getData = async ()=>{
      try{
        const res = await api.get("/info");
        setHomeData(res.data.data)
      }catch(err){
        console.log(err.message)
      }
    }
    getData()
  },[])
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold mt-4 md:text-5xl my-4">মেনু</h1>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {homeData?.menus && homeData.menus.map((item)=> (  
        <div
        key={item._id}
        className="flex justify-center items-center gap-4 shadow-lg inset-shadow-xs p-4 rounded-2xl"
        >
         {item?.image &&( <img src={item?.image || ""} alt="" className="w-[100px] md:w-[130px]"/>)}
          <div>
            <h2 className="text-lg md:text-xl font-bold text-orange-500">{item.price} টাকা</h2>
            <p className="text-md md:text-lg">{item.name}</p>
          </div>
        </div>
        ))} 
      </div>
    </div>
  );
};

export default Menus;
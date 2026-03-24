import React,{useEffect,useState} from 'react';
import Herro from './Herro';
import Menus from './Menus';
import Products from './ProductInfo';
import Loading from './Loading';

import api from '../../Api';
const Home = () => {
  const [homeData,setHomeData] = useState(null)
  const [loading,setLoading] = useState(false)
  
  useEffect(()=>{
    setLoading(true)
    const getData = async ()=>{
      try{
        const res = await api.get("/info");
        setHomeData(res.data.data)
        setLoading(false)
      }catch(err){
        console.log(err.message)
      }
    }
    getData()
  },[])
  return (
    <section>
      <Herro />
     
      <Menus />

    {loading ? (
  <Loading />
) : homeData?.product?.length > 0 ? (
  <Products items={homeData.product} />
) : (
  <p>No data found</p>
)}
    </section>
  );
};

export default Home;
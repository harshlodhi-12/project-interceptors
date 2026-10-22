import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { axiosInstance } from '../config/axoisInstance'

const Productspage = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let getProductsData = async () => {
    try{
      let res = await axiosInstance.get("/products");
      console.log(res.data);
      setProductsData(res.data)
      setIsLoading(false)

    }
    catch(err){
      console.log("error in products api", err)
    }
  }
  useEffect(() => {
    getProductsData();
  }, []);
  
  if(isLoading) return <div className="text-center text-2xl font-bold">Loading...</div>

  return (
    <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
     {
      productsData.map((val)=>{
        return <ProductCard key={val.id} product={val}/>
      })
     }
    </div>
  )
}

export default Productspage

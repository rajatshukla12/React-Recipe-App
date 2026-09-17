import axios from '../utils/axios';
import React, { useEffect } from 'react'

const Home = () => {
  const getproduct = async ()=>{

    try{
      const response = await axios.get("/products"
    );

      console.log(response.data);

      /*const strdata = await fetch("https://fakestoreapi.com/products");
      const jsondata = await strdata.json();
      console.log(jsondata);*/

    }

    catch(error){
      console.log(error);
    }
}

useEffect(() =>{

    getproduct();


}, [])

  return (
    <div>
    <h1>Home</h1>
    <button onClick = {getproduct}>Get Products</button>
    </div>
  )
}

export default Home
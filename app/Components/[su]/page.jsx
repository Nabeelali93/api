"use client"
import React from 'react'
import axios from 'axios'

import { useEffect,useState } from 'react'




function page({params}) {

  const [allUsers,setallUsers] = useState("")



  useEffect(()=>{
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:3000/api/spdata/${params.su}`,
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      // console.log(response.data);

if(response!=null){
  setallUsers(response.data.data[0])

}


    })
    .catch((error) => {
      console.log(error);
    });
    
  },[])


  return (
   
   

    <>
    <h1>{allUsers.name}</h1>
    <h1>{allUsers. fname}</h1>
    <h1>{allUsers.id}</h1>
    <h1>{allUsers.Age}</h1>
    <h1>{allUsers.education}</h1>



    </>




  )
}

export default page
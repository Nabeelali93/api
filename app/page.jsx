"use client"
import React from 'react'
import axios from 'axios'

import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
// import { setInterval } from 'timers/promises'
function Home() {

  let [allusers, setalluser] = useState([])
  let [inp, setinp] = useState("")



const valset= ()=>{
 
  search()
}

const search = ()=>{
  setalluser([])

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/api/sreach',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : {name:inp}
  };
  
  axios.request(config)
  .then( (response) => {
    console.log(JSON.stringify(response.data));
   setalluser(response.data.data)
  })
  .catch((error) => {
    console.log(error);
  });



}





console.log(inp)



  useEffect(()=>{
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/test',
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data);

      setalluser(response.data.data)
    })
    .catch((error) => {
      console.log(error);
    });

  },[])

  return (
    <>


    <div className='flex justify-center'>
    <input onChange={(e) => setinp(e.target.value)} value={inp}

class="appearance-none block w-96 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 h-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter Sindh City"/>

    <button  onClick={()=>valset()} className=" bg-transparent hover:bg-blue-500  text-blue-700 font-semibold hover:text-white py-2 h-10 px-4 border border-blue-500 hover:border-transparent rounded ">
  Search
</button>
    </div>
      

{



                allusers.length == 0 ?

                
                  <div role="status" className='flex justify-center my-36'>
                  <svg aria-hidden="true" class="inline w-24 h-24 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span class="sr-only">Loading...</span>
              </div>
             
               
                    
                    
                    :
                    
                    allusers.map((v, i) => {
                        return (
                            <div className="border-2 mx-auto w-1/2 text-center p-2 m-2">
                                <h1>Name : {v["name"]}</h1>
                                <h1>Father Name : {v["fname"]}</h1>
                                <h1>Education : {v["education"]}</h1>
                                <h1>Age : {v["Age"]}</h1>


                            </div>

                        )
                    })
            }


         

 
    
    </>
  )
}

export default Home
import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import axios from "axios"
import Router from 'next/router'

export default function Index() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const handleSubmit = async ()=>{
    try{
       const response = await axios.post("/api/login",{
        username, password
       })
       if(response.data == "successful"){
        Router.push("/dashboard")
       }
    }catch(err){
       setError(true);
    }
  }
  return (
    <div className='h-[100vh]'>
        <Header />
        <div className='min-h-[100%] w-[100%]'>
        <Navbar />
        <div className='w-[100%] my-[20px] flex flex-col items-center justify-center'>
            <p className='text-[25px] font-[700]'>LOGIN TO DASHBOARD</p>
            <div className='w-[80%] flex flex-col items-center justify-center'>
                <div className='flex flex-col w-[100%] my-[10px]'>
                    <label className='font-[600]'>Username</label>
                    <input type="text" onChange={(e)=>setUsername(e.target.value)} className="border border-[#e8e8e8] outline-0 rounded-sm" />
                </div>
                <div className='flex flex-col w-[100%]'>
                    <label className='font-[600]'>Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="border border-[#e8e8e8] outline-0 rounded-sm" />
                </div>
                <button onClick={handleSubmit}  className='bg-[#9b0000] rounded-sm w-[100%] my-[10px] p-[10px] text-[white] font-[700] '>LOGIN</button>
                {error && <span className='text-[red] font-[600]'>Invalid Credentials</span>}
            </div>
        </div>
            <div className='absolute bottom-0 w-[100%]'>
              <Footer />
            </div>
        </div>
    </div>
  )
}

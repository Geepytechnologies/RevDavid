import  Router  from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Custom404() {
    return (
        <>
         <Header />
         <div className='h-[100vh]'>
         <div className='min-h-[100%] w-[100%] relative'>
            <Navbar />
            <div className='w-[100%] h flex items-center justify-center'>
                <div className='text-center py-[20px]'>
                    <h1 className="text-[50px] font-[700]">Oops!!!</h1>
                    <h2 className='font-[600]'>404 - PAGE NOT FOUND</h2>
                    <h2 className=''>The page you are looking for might have been removed, had its name changed or it's temporarily unavailable</h2>
                    <button className='bg-[#9b0000] my-[10px] text-[white] py-[10px] px-[15px]' onClick={()=>Router.push('/')}>Go to Homepage</button>
                </div>
            </div>
            <div className='bottom-[0px] absolute w-[100%]'>
              <Footer />
            </div>
         </div>
         </div>
        </>
    )
  }
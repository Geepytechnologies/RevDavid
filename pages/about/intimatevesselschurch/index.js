import React from 'react'
import Header from '../../../components/Header'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import 'animate.css';

export default function Index() {
  const Aboutheader = ()=>(
    <div className=" bg-[url('/img-3.jpg')] h-[400px] w-[100%] bg-cover relative ">
        <div className='absolute top-0 overlay'></div>
        <div className='w-[100%] absolute left-0 bottom-[50px] h-[80px]'>
          <div className='relative w-[50%] md:w-[30%] flex items-center h-[100%] pl-[20px] ml-[5px]'>
            <div className='animatedcon animate__animated  animate__fadeInLeft'></div>
            <p className='mytext text-white font-[600] text-[30px] animate__animated  animate__fadeInLeft'>About</p>
          </div>
        </div>
    </div>
  )
  const Biography = ()=>(
    <div>
      <p className='font-[35px] font-[600] '>Intimate Vessels church Worldwide</p>
    </div>
  )
  return (
    <div>
       <Header />
       <Navbar />
       <Aboutheader />
       <Biography />
       <Footer />
    </div>
  )
}

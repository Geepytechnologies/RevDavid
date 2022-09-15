import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function Index() {
  const Eventsheader = ()=>(
    <div className=" bg-[url('/img-3.jpg')] h-[400px] w-[100%] bg-cover relative ">
        <div className='absolute top-0 overlay'></div>
        <div className='w-[100%] absolute left-0 bottom-[50px] h-[80px]'>
          <div className='relative w-[50%] md:w-[30%] flex items-center h-[100%] pl-[20px] ml-[5px]'>
            <div className='animatedcon animate__animated  animate__fadeInLeft'></div>
            <p className='mytext text-white font-[600] text-[30px] animate__animated  animate__fadeInLeft'>Events</p>
          </div>
        </div>
    </div>
  )
  const Events = ()=>(
    <div>
      <div className='flex flex-col items-center justify-center' >
        <h2>Upcoming Events</h2>
        <div className='example w-[90%] md:w-[80%] flex flex-row items-center justify-between overflow-x-scroll '>
          <div className='min-w-[300px] min-h-[300px] relative rounded-lg '>
            <Image src='/bgg2.jpg' alt="" layout='fill' className='rounded-xl' />
          </div>
          <div className='min-w-[300px] min-h-[300px] relative '>
            <Image src='/img-2.jpg' alt="" layout='fill' className='rounded-xl'  />
          </div>
          <div className='min-w-[300px] min-h-[300px] relative '>
            <Image src='/img-3.jpg' alt="" layout='fill' className='rounded-xl' />
          </div>
          <div className='min-w-[300px] min-h-[300px] relative '>
            <Image src='/img-3.jpg' alt="" layout='fill' className='rounded-xl' />
          </div>
          <div className='min-w-[300px] min-h-[300px] relative '>
            <Image src='/img-3.jpg' alt="" layout='fill' className='rounded-xl' />
          </div>
          <div className='min-w-[300px] min-h-[300px] relative '>
            <Image src='/img-3.jpg' alt="" layout='fill' className='rounded-xl' />
          </div>
        </div>
      </div>
      <div>
        <h2>Most Recent Events</h2>
        <div className='example w-[90%] md:w-[80%] flex flex-row items-center overflow-x-scroll '>
          <div className='w-[250px] h-[250px] relative '>
            <Image src='/img-1.jpg' alt="" layout='fill' />
          </div>
          <div className='w-[250px] h-[250px] relative '>
            <Image src='/img-2.jpg' alt="" layout='fill' />
          </div>
          <div className='w-[250px] h-[250px] relative '>
            <Image src='/img-3.jpg' alt="" layout='fill' />
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div>
       <Header />
       <Navbar />
       <Eventsheader />
       <Events />
       <Footer />
    </div>
  )
}

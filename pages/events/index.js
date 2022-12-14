import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { GiAlarmClock } from 'react-icons/gi'
import { FcLock } from 'react-icons/fc'
import $ from 'jquery';
window.jQuery = $;
if(typeof window !== "undefined"){
  window.$ = window.jquery = require("jquery")
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CountdownTimer from '../../components/CountdownTimer'

const Owl = dynamic(()=> import("react-owl-carousel"),{ssr:false});
export default function Index() {
  const settings = {
    items: 1,
    autoplay: false,
    nav: true,
    mouseDrag: true,
    dots: true,
    animateOut: 'fadeOut',
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      }
   },
    navText : [
      "<p class='mynav bg-[rgba(0,0,0,0.8)] rounded-sm font-[700] text-[20px] m-[5px] p-[6px] px-[12px]  text-white absolute top-[50%] left-0' aria-hidden='true'>&#60;</p>",
      "<p class='mynav bg-[rgba(0,0,0,0.8)] rounded-sm font-[700] text-[20px] m-[5px] p-[6px] px-[12px] text-white absolute top-[50%] right-0' aria-hidden='true'>&#62;</p>",
    ]
  }
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
  const upcoming = [
    {
      id: 0,
      url: '/bgg2.jpg',
      date: 'Oct 23, 2022 20:03:25'
    },
    {
      id: 1,
      url: '/bgg2.jpg',
      date: 'Oct 24, 2022 20:03:25'
    },
    {
      id: 2,
      url: '/bgg2.jpg',
      date: 'Oct 25, 2022 20:03:25'
    },

  ]
  const recent = [
    
  ]
  return (
    <div>
       <Header />
       <Navbar />
       <Eventsheader />
       {/* Events section */}
        <div className='mt-[10px]'>
          <div className='flex flex-col  items-center justify-center pb-[30px] w-[100%]' >
          {upcoming.length !== 0 ? <h2 className='text-[20px] font-[600] p-[7px]'>Upcoming Events</h2> : null}
            <div className=' flex flex-row w-[90%] overflow-x-scroll '>
              {upcoming.map((event,index)=>
              <div key={index} className='min-w-[80%] md:min-w-[70%] mr-[10px] rounded-xl  relative'>
                <Image src={event.url} alt="" layout='responsive' width="100%" height="100%" className='rounded-xl' objectFit='cover' />
                <div className='opacity-0 rounded-xl hover:opacity-100 bg-[rgba(0,0,0,0.6)] h-[100%] w-[100%] absolute top-0 flex flex-col items-center justify-center '>
                  <FcLock className='text-[40px]' />
                  <div className='flex flex-row items-center justify-center' >
                    <GiAlarmClock className='text-white text-[35px] ' /><CountdownTimer countDownDate={event.date} />
                  </div>
                </div>
              </div>)}
              {/* <div className='min-w-[80%] md:min-w-[70%] rounded-xl relative'>
                <Image src='/bgg2.jpg' alt="" layout='responsive' width="100%" height="100%" className='rounded-xl' objectFit='cover' />
                <div className='opacity-0 rounded-xl hover:opacity-100 bg-[rgba(0,0,0,0.6)] h-[100%] w-[100%] absolute top-0 flex flex-col items-center justify-center '>
                  <FcLock className='text-[40px]' />
                  <div className='flex flex-row' >
                  <GiAlarmClock className='text-white text-[35px] ' /><CountdownTimer countDownDate="Jan 5, 2024 15:37:25" />
                  </div>
                </div>
              </div>
              <div className='min-w-[80%] md:min-w-[70%] rounded-xl  relative'>
                <Image src='/bgg2.jpg' alt="" layout='responsive' width="100%" height="100%" className='rounded-xl' objectFit='cover' />
                <div className='opacity-0 rounded-xl hover:opacity-100 bg-[rgba(0,0,0,0.6)] h-[100%] w-[100%] absolute top-0 flex flex-col items-center justify-center '>
                  <FcLock className='text-[40px]' />
                  <div className='flex flex-row' >
                  <GiAlarmClock className='text-white text-[35px] ' /><CountdownTimer countDownDate="Jan 5, 2024 15:37:25" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className='flex flex-col items-center justify-center' >
            {recent.length !== 0 ? <h2 className='text-[20px] font-[600] p-[7px]'>Most Recent Events</h2> : null}
            <div className=' flex flex-row w-[90%] overflow-x-scroll '>
              {recent.map((event,index)=>
              <div key={index} className='min-w-[80%] md:min-w-[70%] mr-[10px] rounded-xl  relative'>
                <Image src={event.url} alt="" layout='responsive' width="100%" height="100%" className='rounded-xl' objectFit='cover' />
              </div>)}
            </div>
          </div>
        </div>
    <Footer />
    </div>
  )
}

import React from 'react'
import dynamic from 'next/dynamic'
// var $ = require("jquery");
import $ from 'jquery';
window.jQuery = $;
if(typeof window !== "undefined"){
  window.$ = window.jquery = require("jquery")
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'next/image';
import 'animate.css';
import Navbar from './Navbar';
import {FaBible, FaFacebookF} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import Link from 'next/link';



const Owl = dynamic(()=> import("react-owl-carousel"),{ssr:false});
export default function About() {
  const settings = {
    items: 1,
    autoplay: true,
    nav: false,
    mouseDrag: false,
    dots: false,
    animateOut: 'fadeOut',
    navText : [
      "<p class='mynav bg-[rgba(0,0,0,0.6)] rounded-sm font-[700] text-[20px] m-[5px] py-[3px] px-[12px]  text-white absolute top-[50%] left-0' aria-hidden='true'>&#60;</p>",
      "<p class='mynav bg-[rgba(0,0,0,0.6)] rounded-sm font-[700] text-[20px] m-[5px] py-[3px] px-[12px] text-white absolute top-[50%] right-0' aria-hidden='true'>&#62;</p>",
    ]
  }
  return (
    <div className='relative'>
          <Owl className='owl-theme' loop  {...settings} >
            <div className='item w-[100%] relative'>
                <Image src='/go9.jpg' layout='responsive' height='100%' width='100%' objectFit='cover'     />
                <div className='absolute top-0 overlay'></div>
                <div className='w-[100%] h-[100%] absolute top-[0px] flex flex-col items-center justify-center '>
                  <p className='line text-center text-white text-[25px]'>Preaching the</p> <span className='text-[28px] text-center text-white font-[700] line2 '>word of Faith</span>
                </div>
            </div>
            <div className='item  w-[100%] relative'>
                <Image src='/go2.jpg' layout='responsive' height='100%' width='100%' objectFit='cover'   />
                <div className='absolute top-0 overlay'></div>
                <div className='w-[100%] h-[100%] flex-col absolute top-[0px] flex items-center justify-center '>
                <p className='line text-center text-white text-[25px]'>Intimacy in</p> <span className='text-[28px] text-center text-white font-[700] line2 '>God&apos;s presence</span>
                </div>
            </div>
            <div className='item  w-[100%] relative'>
                <Image src='/go10.jpg' layout='responsive' height='100%' width='100%' objectFit='cover'     />
                <div className='absolute top-0 overlay'></div>
                <div className='w-[100%] h-[100%] absolute flex-col top-[0px] flex items-center justify-center '>
                  <p className='line text-center text-white text-[25px]'>God&apos;s Divine</p><span className='text-[28px] text-center text-white font-[700] line2 '>Purpose</span>
                </div>
            </div>
          </Owl>
          <div className='bg-[#9b0000] h-[auto] sm:h-[90px] w-[100%] flex flex-col sm:flex-row justify-around items-center '>
            <div className='flex flex-col items-center'>
              <div className='text-white text-center text-[20px] font-[600] flex flex-row items-center justify-center '><FaBible /><p>Join Rev David Akanwa</p></div>
              <div className='text-white text-[17px] font-[400] '>Stream Live</div>
           </div>
            <div className='flex flex-row  min-w-[40%] sm:w-[20%] items-center justify-around p-[5px]'>
              <Link href=''><AiFillYoutube className=' text-[30px] sm:text-[40px] border-2 border-white rounded-lg p-[5px] bg-[red] text-[white]' /></Link>
              <Link href=''><FaFacebookF className='text-[30px] sm:text-[40px] text-[white] border-2 border-white rounded-lg p-[5px] bg-[blue]' /></Link>
            </div>
        </div>
    </div>
  )
}


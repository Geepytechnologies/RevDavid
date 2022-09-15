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
import {FiYoutube , FiFacebook} from 'react-icons/fi'
import {ImYoutube2} from 'react-icons/im'



const Owl = dynamic(()=> import("react-owl-carousel"),{ssr:false});
export default function About() {
  const settings = {
    items: 1,
    autoplay: false,
    nav: true,
    mouseDrag: false,
    dots: false,
    animateOut: 'fadeOut',
    navText : [
      "<p class='mynav bg-[rgba(0,0,0,0.8)] rounded-sm font-[700] text-[20px] m-[5px] p-[6px] px-[12px]  text-white absolute top-[50%] left-0' aria-hidden='true'>&#60;</p>",
      "<p class='mynav bg-[rgba(0,0,0,0.8)] rounded-sm font-[700] text-[20px] m-[5px] p-[6px] px-[12px] text-white absolute top-[50%] right-0' aria-hidden='true'>&#62;</p>",
    ]
  }
  return (
    <div className='relative'>
          <Owl className='owl-theme' loop margin={10} {...settings} >
            <div className='item h-[500px] w-[100%] relative'>
                <Image src='/bgg2.jpg' layout='fill' objectFit='cover' className='image1'    />
                <div className='absolute top-0 overlay'></div>
                <p className='line absolute top-[50%] left-[20%] text-white text-[25px]'>Laboris incididunt cupidatat ut occaecat dolor non elit ipsum excepteur quis incididunt velit.</p>
            </div>
            <div className='item h-[500px] w-[100%] relative'>
                <Image src='/home-bg.jpg' layout='fill' objectFit='cover' objectPosition='90% 10%'  />
                <div className='absolute top-0 overlay'></div>
                <p className='line absolute top-[50%] left-[50%] text-white text-[25px]'>Laboris incididunt cupidatat ut occaecat dolor non elit ipsum excepteur quis incididunt velit.</p>
            </div>
            <div className='item h-[500px] w-[100%] relative'>
                <Image src='/img-3.jpg' layout='fill' objectFit='cover' className='image'    />
                <div className='absolute top-0 overlay'></div>
                <p className='line absolute top-[50%] left-[20%] text-white text-[25px]'>Laboris incididunt cupidatat ut occaecat dolor non elit ipsum excepteur quis incididunt velit.</p>
            </div>
            <div className='item h-[500px] w-[100%] relative'>
                <Image src='/img-2.jpg' layout='fill' objectFit='cover' className='image'    />
                <div className='absolute top-0 overlay'></div>
                <p className='line absolute top-[50%] left-[20%] text-white text-[25px]'>Laboris incididunt cupidatat ut occaecat dolor non elit ipsum excepteur quis incididunt velit.</p>
            </div>
          </Owl>
          <div className='bg-[#9b0000] h-[90px] w-[100%] flex flex-row justify-around items-center '>
           <div className='text-white'>Join Rev David Akanwa</div>
           <div className='text-white'>
            <div className='flex flex-row items-center justify-around'>
              <ImYoutube2 className='text-[30px] text-[white]' />
              <FiFacebook className='text-[30px]' />
            </div>
           </div>
        </div>
    </div>
  )
}


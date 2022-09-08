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



const Owl = dynamic(()=> import("react-owl-carousel"),{ssr:false});
export default function About() {
  const settings = {
    items: 1,
    autoplay: false,
    nav: true,
    mousedrag: false,
    dots: false,
    navText : [
      "<p class='bg-[rgba(0,0,0,1)] rounded-sm font-[700] text-[20px] m-[5px] p-[6px]  text-white absolute top-[50%] left-0' aria-hidden='true'>&#60;</p>",
      "<p class='bg-[black] rounded-sm font-[700] text-[20px] m-[5px] p-[6px] text-white absolute top-[50%] right-0' aria-hidden='true'>&#62;</p>",
    ]
  }
  return (
    <div className='relative'>
          <Owl className='owl-theme' loop margin={10} {...settings} >
            <div className='item h-[500px] w-[100%] relative'>
                <Image src='/bgg2.jpg' layout='fill' objectFit='cover' className='image'    />
                <p className='line absolute top-[50%] left-[20%] text-white text-[25px]'>Laboris incididunt cupidatat ut occaecat dolor non elit ipsum excepteur quis incididunt velit.</p>
            </div>
            <div className='item h-[500px] w-[100%] relative'>
                <Image src='/home-bg.jpg' layout='fill' objectFit='cover' objectPosition='90% 10%'  />
                <p className='line absolute top-[50%] left-[50%] text-white text-[25px]'>Laboris incididunt cupidatat ut occaecat dolor non elit ipsum excepteur quis incididunt velit.</p>
            </div>
            <div className='item'>
            <p className='line absolute top-[50%] left-[50%] text-white text-[25px]'>Laboris incididunt cupidatat ut occaecat dolor non elit ipsum excepteur quis incididunt velit.</p>
            </div>
            <div className='item'>
              <p className='line absolute top-[50%] left-[50%] text-white text-[25px]'>Laboris incididunt cupidatat ut occaecat dolor non elit ipsum excepteur quis incididunt velit.</p>
            </div>
          </Owl>
          <div className='bg-[#9b0000] h-[90px] w-[100%] flex flex-row justify-around items-center '>
           <div className='text-white'>Join Rev David Akanwa</div>
           <div className='text-white'>social media icons</div>
        </div>
    </div>
  )
}


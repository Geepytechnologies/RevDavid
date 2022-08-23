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
import Navbar from './Navbar';



const Owl = dynamic(()=> import("react-owl-carousel"),{ssr:false});
export default function About() {
  const settings = {
    items: 1,
    nav: true,
    dots: false,
    navText : [
      "<p class='bg-[rgba(0,0,0,1)] rounded-sm font-[700] text-[20px] m-[5px] p-[6px]  text-white absolute top-[50%] left-0' aria-hidden='true'>&#60;</p>",
      "<p class='bg-[black] rounded-sm font-[700] text-[20px] m-[5px] p-[6px] text-white absolute top-[50%] right-0' aria-hidden='true'>&#62;</p>",
    ]
  }
  return (
    <div className='bg-[red] relative'>
          <Owl className='owl-theme' loop margin={10} {...settings} >
            <div className='item h-[500px] w-[100%] relative'>
                <Image src='/bgg2.jpg' layout='fill' objectFit='cover' className='image'    />
            </div>
            <div className='item h-[500px] w-[100%] relative'>
                <Image src='/home-bg.jpg' layout='fill' objectFit='cover' objectPosition='90% 10%'  />
            </div>
            <div className='item'>
                <h4>3</h4>
            </div>
            <div className='item'>
                <h4>4</h4>
            </div>
          </Owl>
    </div>
  )
}


import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { BsFillPenFill } from 'react-icons/bs'
import Image from 'next/image'


export default function Index() {
  const Blogheader = ()=> (
    <div className=" bg-[url('/img-3.jpg')] h-[400px] w-[100%] bg-cover relative ">
        <div className='absolute top-0 overlay'></div>
        <div className='w-[100%] absolute left-0 bottom-[50px] h-[80px]'>
          <div className='relative w-[50%] md:w-[30%] flex items-center h-[100%] pl-[20px] ml-[5px]'>
            <div className='animatedcon animate__animated  animate__fadeInLeft'></div>
            <p className='mytext text-white font-[600] text-[30px] animate__animated  animate__fadeInLeft'>Blog</p>
          </div>
        </div>
    </div>
  );
  const Articles = ()=>(
    <div>
      <div className='flex flex-row items-center justify-center my-[6px]'>
        <BsFillPenFill className='text-[25px]' />
        <h1 className='text-[20px]'>From the Desk of the Reverend</h1>
      </div>
      <div className='w-[100%] flex items-center justify-center'>
      <div className='flex flex-col md:flex-row items-center justify-between w-[100%] md:w-[80%]'>
        <div>
          <div className='w-[250px] h-[250px] relative '>
            <Image src='/img-1.jpg' layout='fill' alt='' />
          </div>
          <div>Title</div>
          <div>Author</div>
        </div>
        <div>
          <div className='w-[250px] h-[250px] relative '>
            <Image src='/img-2.jpg' layout='fill' alt='' />
          </div>
          <div>Title</div>
          <div>Author</div>
        </div>
        <div>
          <div className='w-[250px] h-[250px] relative '>
            <Image src='/img-3.jpg' layout='fill' alt='' />
          </div>
          <div>Title</div>
          <div>Author</div>
        </div>
       
      </div>
      </div>
    </div>
  )
  return (
    <div>
       <Header />
       <Navbar />
       <Blogheader />
       <Articles />
       <Footer />
    </div>
  )
}

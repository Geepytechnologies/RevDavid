import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ReactPlayer from 'react-player'

export default function Index() {
  const Imageheader = ()=> (
    <div className=" bg-[url('/img-3.jpg')] h-[400px] w-[100%] bg-cover relative ">
        <div className='absolute top-0 overlay'></div>
        <div className='w-[100%] absolute left-0 bottom-[50px] h-[80px]'>
          <div className='relative w-[50%] md:w-[30%] flex items-center h-[100%] pl-[20px] ml-[5px]'>
            <div className='animatedcon animate__animated  animate__fadeInLeft'></div>
            <p className='mytext text-white font-[600] text-[30px] animate__animated  animate__fadeInLeft'>Media</p>
          </div>
        </div>
    </div>
  );
  const VideoGallery = ()=> (
    <div className='mb-[50px]'>
      <p className='font-[600] text-[35px] text-center '>Video Gallery</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
        <div className='w-[350px] h-[350px] '>
          <ReactPlayer controls pip={true} url='/video.mp4' height='100%' width='100%' />
        </div>
        <div className='w-[350px] h-[350px] '>
          <ReactPlayer controls pip={true} url='/video.mp4' height='100%' width='100%' />
        </div>
        <div className='w-[350px] h-[350px] '>
          <ReactPlayer controls pip={true} url='/video.mp4' height='100%' width='100%' />
        </div>
      </div>
    </div>
  )
  const ImageGallery = ()=> (
    <div className='mb-[40px]'>
     <p className='font-[600] text-[35px] text-center '>Image Gallery</p>
    </div>
  )
  const Books = ()=> (
    <div>
      <p className='font-[600] text-[35px] text-center '>Books</p>
    </div>
  )
  return (
    <div>
       <Header />
       <Navbar />
       <Imageheader />
       <VideoGallery />
       <ImageGallery />
       <Books />
       <Footer />
    </div>
  )
}

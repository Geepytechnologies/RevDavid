import React, {useRef, useState} from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ReactPlayer from 'react-player/youtube'
import Image from 'next/image'
import { IoMdHeartEmpty } from 'react-icons/io'
import {BiSearchAlt2} from 'react-icons/bi'
import { RotatingLines } from 'react-loader-spinner'

export default function Index() {
  const images = [
    {
      id: 1,
      url: '/img-1.jpg',
    },
    {
      id: 2,
      url: '/img-1.jpg',
    },
    {
      id: 3,
      url: '/img-1.jpg',
    },
    {
      id: 4,
      url: '/img-3.jpg',
    },
    {
      id: 5,
      url: '/img-1.jpg',
    },
    {
      id: 6,
      url: '/img-2.jpg',
    },
  ]
  const settings = {
    strokeColor: "grey",
    width: "80",
    strokeWidth: "5"
  }
  const [loading, setLoading] = useState(true);
  const search = useRef();
  const theimage = useRef();
  const imgpic = false;
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
  // https://www.youtube.com/watch?v=W8UsgDOk8Aw
  const VideoGallery = ()=> (
    <div className='mb-[50px]'>
      <p className='font-[600] text-[35px] text-center '>Video Gallery</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center'>
        <div className='w-[350px] h-[350px] relative '>
          {loading ? <RotatingLines {...settings} className="absolute top-[50%] left-[50%] " /> : null }
          <ReactPlayer onReady={()=>setLoading(false)} controls pip={true} url='http://www.youtube.com/watch?v=W8UsgDOk8Aw' height='100%' width='100%' className='absolute top-0' />
          {/* <p>Title</p> */}
        </div>
        <div className='w-[350px] h-[350px] '>
          <ReactPlayer controls pip={true} url='' height='100%' width='100%' />
          <p>Title</p>
        </div>
        <div className='w-[350px] h-[350px] '>
          <ReactPlayer controls pip={true} url='' height='100%' width='100%' />
          <p>Title</p>
        </div>
      </div>
    </div>
  )
  const ImageGallery = ()=> (
    <div className='mb-[40px]'>
     <p className='font-[600] text-[35px] text-center '>Image Gallery</p>
     <div className='flex items-center justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
      {images.map((item,index)=>(
        <div key={index}  className='w-[300px] h-[300px] relative cursor-pointer' >
          <Image src={item.url} alt='images' layout='fill' className='hover:bg-[red] '   />
          <div className='book opacity-0 hover:opacity-100 bg-[rgba(0,0,0,0.6)] h-[100%] w-[100%] absolute top-0 flex items-center justify-center '>
            <BiSearchAlt2 className='text-white text-[25px] ' />
          </div>
        </div>
       ) 
      )} 
      </div>
     </div>
    </div>
  )
  const Books = ()=> (
    <div>
      <p className='font-[600] text-[35px] text-center '>Books</p>
    </div>
  )
  const AudioMessages = ()=>(
    <div className='flex flex-col items-center'>
      <p className='font-[600] text-[35px] text-center '>Audio Streaming</p>
      <div className='grid gap-2 grid- grid-cols-2 md:grid-cols-4 justify-between bg-[grey] w-[90%] md:w-[80%] h-[200px] p-[20px] '>
        <div className='bg-[white] rounded-lg h-[100%] w-[150px] md:w-[250px] relative'>
          <Image src='/podcast-soundcloud.png' alt='img3' layout='fill' />
        </div>
        <div className='bg-[white] rounded-lg h-[100%] w-[150px] md:w-[250px] relative'>
          <Image src='/Spotify_logo.png' alt='img3' layout='fill' />
        </div>        
        <div className='bg-[white] rounded-lg h-[100%] w-[150px] md:w-[250px] relative'>
          <Image src='/applepodcast.png' alt='img2' layout='fill'  />
        </div>        
        <div className='bg-[white] rounded-lg h-[100%] w-[150px] md:w-[250px] relative'>
          <Image src='/audiomack.png' alt='img' layout='fill' />
          {/* <div className="bg-[url('/audiomack.png')] bg-cover h-[auto] w-[100%] "></div> */}
        </div>
      </div>
    </div>
  )
  return (
    <div>
       <Header />
       <Navbar />
       <Imageheader />
       <VideoGallery />
       <ImageGallery />
       <AudioMessages />
       <Books />
       <Footer />
    </div>
  )
}

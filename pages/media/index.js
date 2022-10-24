import React, {useEffect, useRef, useState} from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import { IoMdHeartEmpty } from 'react-icons/io'
import {BiSearchAlt2} from 'react-icons/bi'
import { RotatingLines } from 'react-loader-spinner'
import Slider from '../../components/Slider'

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
  const [playlist, setPlaylist] = useState('')
  const search = useRef();
  const video = useRef();
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
  const url = "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cid%2C%20player&channelId=UCNU64bSdhSdlMfBfHNQP79g&maxResults=25&key=AIzaSyCfRPpHvF9GWWeNa4c5_LJiCGXHc190x00";

  const LoadVideos = async ()=>{
    await fetch(url)
    .then((response)=>response.json())
    .then((data) => setPlaylist(data))
  }

  useEffect(()=>{
     LoadVideos();
     console.log(playlist)
     console.log(process.env.NEXT_PUBLIC_API_KEY)
  },[])
  const VideoGallery = ()=> (
    <div className='mb-[50px]'>
      <p className='font-[600] text-[35px] text-center '>Videos</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center'>
        <div ref={video} className='w-[350px] h-[350px] relative '>
          {/* {loading ? <RotatingLines {...settings} className="absolute top-[50%] left-[50%] " /> : null } */}
         <iframe  width="100%" height="100%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
         </iframe>
          {/* <ReactPlayer onReady={()=>setLoading(false)} controls pip={true} url='http://www.youtube.com/watch?v=W8UsgDOk8Aw' height='100%' width='100%' className='absolute top-0' /> */}
          {/* <p>Title</p> */}
        </div>
        {/* <div>{playlist}</div> */}
      </div>
    </div>
  )
  const ImageGallery = ()=> (
    <div className='mb-[40px]'>
     <p className='font-[600] text-[35px] text-center '>Image Gallery</p>
     <Slider />
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
      <div className='grid gap-2 grid-cols-2 md:grid-cols-4 justify-between footer w-[90%] md:w-[80%]  p-[20px] '>
        <div className='bg-[white] rounded-lg h-[100%] w-[100%] relative'>
          <Image src='/podcast-soundcloud.png' alt='img3' layout='responsive' width="100%" height="100%" objectFit='contain' />
        </div>
        <div className='bg-[white] rounded-lg h-[100%] w-[100%]  relative'>
          <Image src='/podcast-soundcloud.png' alt='img3' layout='responsive' width="100%" height="100%" objectFit='contain'/>
        </div>        
        <div className='bg-[white] rounded-lg h-[100%] w-[100%]  relative'>
          <Image src='/podcast-soundcloud.png' alt='img2' layout='responsive' width="100%" height="100%" objectFit='contain'  />
        </div>        
        <div className='bg-[white] rounded-lg h-[100%] w-[100%]  relative'>
          <Image src='/podcast-soundcloud.png' alt='img' layout='responsive' width="100%" height="100%" objectFit='contain' />
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

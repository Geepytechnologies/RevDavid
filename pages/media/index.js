import React, {useEffect, useRef, useState, useCallback} from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import { IoMdHeadset, IoMdHeartEmpty, IoMdMusicalNotes } from 'react-icons/io'
import {HiOutlineMusicalNote} from 'react-icons/hi'
import { RotatingLines } from 'react-loader-spinner'
import Slider from '../../components/Slider'
import { FaSpotify } from 'react-icons/fa'
import { GrSoundcloud } from 'react-icons/gr'
import { SiApplepodcasts, SiAudiomack } from 'react-icons/si'
import { AiOutlineDownload } from 'react-icons/ai'

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
    <div className=" h-[400px] w-[100%] relative ">
        <Image src='/media.jpg' alt="RevDavid" placeholder='blur' blurDataURL='/media.jpg'  layout='fill' height='100%' width='100%' objectFit='cover' objectPosition="50% 50%"    />
        {/* <div className='absolute top-0 overlay'></div> */}
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
  
  /* useEffect(()=>{
     LoadVideos();
     console.log(playlist)
  },[]) */
  const VideoGallery = useCallback(()=> (
    <div className='py-[40px] bg-[#f8f8f8] relative'>
      <IoMdMusicalNotes className='text-[50px] animate__animated animate__infinite	infinite animate__heartBeat text-[rgba(0,0,0,0.2)] shadow-sm absolute top-[0px] z-[1]' />
      <IoMdMusicalNotes className='text-[50px] animate__animated animate__heartBeat animate__infinite	infinite  text-[rgba(0,0,0,0.2)] shadow-sm absolute bottom-[0px] z-[1] ' />
      <IoMdMusicalNotes className='text-[50px] animate__animated animate__heartBeat animate__infinite	infinite text-[rgba(0,0,0,0.2)] shadow-sm absolute top-[50%] left-[50%] z-[1]' />
      <IoMdMusicalNotes className='text-[50px] animate__animated animate__heartBeat animate__infinite	infinite text-[rgba(0,0,0,0.2)] shadow-sm absolute right-[20px] top-0 z-[1]' />
      <IoMdMusicalNotes className='text-[50px] animate__animated animate__heartBeat animate__infinite	infinite text-[rgba(0,0,0,0.2)] shadow-sm absolute right-[20px] bottom-0 z-[1]' />
      {/* <p className='font-[600] text-[35px] text-center text-white '>Videos</p> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 z-[10]  gap-2 justify-items-center'>
        <div ref={video} className='w-[350px] h-[350px] border border-white shadow-2xl relative '>
          {/* {loading ? <RotatingLines {...settings} className="absolute top-[50%] left-[50%] " /> : null } */}
          {/* src="https://www.youtube.com/embed/tgbNymZ7vqY"> */}

         <iframe  width="100%" height="100%"
            src="https://www.youtube.com/embed/W8UsgDOk8Aw">
         </iframe>
          {/* <ReactPlayer onReady={()=>setLoading(false)} controls pip={true} url='http://www.youtube.com/watch?v=W8UsgDOk8Aw' height='100%' width='100%' className='absolute top-0' /> */}
          {/* <p>Title</p> */}
        </div>
        {/* <div>{playlist}</div> */}
      </div>
    </div>
  ))

  const ImageGallery = ()=> (
    <div className='mb-[40px] bg-[#f7f7f7]'>
     <p className='font-[600] font-tang text-[35px] text-center '>Image Gallery</p>
     <Slider />
    </div>
  )
  const Books = ()=>{
    const books = [1,2,3];
  return(
    <div className='flex items-center justify-center flex-col'>
      <div>
        <p className='font-[600] font-tang text-[35px] text-center '>Books</p>
      </div>
      {books.map((index)=><div key={index} className='w-[100%] flex flex-col items-center justify-center md:w-[70%] p-[10px] '>
        <div className='flex bg-[#e8e8e8] p-[5px] mb-[10px] rounded-2xl  shadow-[0px_-35px_20px_-35px_rgba(0,0,0,0.2)] flex-row w-[100%] md:w-[70%] '>
          <div className='mr-[10px] rounded-l-2xl shadow-2xl w-[40%]'>
            <div className='relative rounded-l-2xl border-2 border-white w-[100%] h-[100%]'>
               <Image src='/bgg2.jpg' alt='' width="100%" height="100%" layout="responsive" objectFit='cover' objectPosition="50% 50%" className='rounded-l-2xl' />
            </div>
          </div>
          <div className='flex flex-col w-[60%]'>
            <h2 className='my-[5px] font-[600] text-[20px]'>Breaking Bondages</h2>
            <p className='my-[5px]'>By Rev David Akanwa</p>
            <a href='/bgg2.jpg' download><div className='flex flex-row cursor-pointer items-center rounded-md my-[5px] w-[60%] p-[9px] bg-[#38a169]'>
              <p className='mr-[5px] text-[white]'>Download</p>
              <AiOutlineDownload className='text-[30px] text-[white]' />
            </div></a>
          </div>
        </div>
      </div>)}
    </div>
  )}
  const AudioMessages = ()=>(
    <div className='flex flex-col items-center mb-[20px]'>
      <div className='flex flex-row items-center justify-center '>
         <IoMdHeadset className='mr-[8px] text-[40px]' />
         <p className='font-[700] font-tang text-[35px] text-center '>Audio Streaming</p>
      </div>
      <p className='mb-[5px]'>Listen to life changing and Inspirational Messages</p>
      <div className='grid gap-2 grid-cols-2 md:grid-cols-4 justify-between footer w-[90%] md:w-[80%]  p-[20px] '>
        <div className='bg-[white] p-[5px] flex flex-col items-center justify-center rounded-lg w-[100%] relative'>
          <SiAudiomack className='text-[80px] text-[#faa405]  ' />
          <p>Audiomack</p>
        </div>
        <div className='bg-[white] p-[5px] flex flex-col items-center justify-center rounded-lg w-[100%]  relative'>
          <SiApplepodcasts className='text-[80px] text-[#9036cb]  ' />
          <p>Apple Podcasts</p>
        </div>        
        <div className='bg-[white] p-[5px] flex flex-col items-center justify-center rounded-lg w-[100%]  relative'>
          <GrSoundcloud className='text-[80px] text-[#f96e0e]' />
          <p>Soundcloud</p>
        </div>        
        <div className='bg-[white] p-[5px] flex flex-col items-center justify-center rounded-lg w-[100%]  relative'>
          <FaSpotify className='text-[80px] text-[#1dd960] ' />
          <p>Spotify</p>
        </div>
      </div>
    </div>
  )
  return (
    <div className='relative'>
      {/* mymodal */}
      {/* <div className='w-[100vw] flex items-center justify-center absolute top-0 z-[999] h-[100vh] bg-[rgba(0,0,0,1)]'>
         <p className='text-white'>Hello mate</p>
      </div> */}
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

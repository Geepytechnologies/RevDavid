import React,{useEffect} from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useForm } from "react-hook-form";

export default function Index() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const Contactheader = ()=>(
    <div className=" bg-[url('/img-3.jpg')] h-[400px] w-[100%] bg-cover relative ">
        <div className='absolute top-0 overlay'></div>
        <div className='w-[100%] absolute left-0 bottom-[50px] h-[80px]'>
          <div className='relative w-[50%] md:w-[30%] flex items-center h-[100%] pl-[20px] ml-[5px]'>
            <div className='animatedcon animate__animated  animate__fadeInLeft'></div>
            <p className='mytext text-white font-[600] text-[30px] animate__animated  animate__fadeInLeft'>Contact</p>
          </div>
        </div>
    </div>
  )
  const Testimoniesandprayer = ()=>(
    <div>
      <div>
        <h2>Testimonies and Prayer Requests</h2>
      </div>
    </div>
  )
  const Makeadonation = ()=>(
    <div>
      <div>
        <h2>Make a Donation</h2>
      </div>
    </div>
  )
   const Map = ()=>(
    <div className='w-[100vw] h-[auto] flex items-center justify-center '>
        <iframe className='w-[90%] h-[450px] border-2 border-white'
          width="400"
          height="450"
          // style="border:0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCfRPpHvF9GWWeNa4c5_LJiCGXHc190x00
            &q=Intimate+vessels+church,awka+nigeria">
        </iframe>
    </div>
   )
    
  return (
    <div>
       <Header />
       <Navbar />
       <Contactheader />
       <div className=' flex flex-col h-[auto] '>
         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-[100%] " >
          <div>
            <label>Firstname</label>
            <input {...register("firstName")} placeholder="Greg"  />
          </div>
          <div>
            <label>Surname</label>
            <input {...register("surname")} placeholder="Jill"/>
          </div>
          <div>
            <label>Email</label>
            <input {...register("myemail")} placeholder="Gregjill@me.com" />
          </div>
          <div>
            <label>Phone</label>
            <input {...register("phone")} />
          </div>
          <div>
            <label>Testimonies and Prayer Requests</label>
            <input {...register("message")} />
          </div>
          <input type="submit" style={{backgroundColor: '#7b0000', color: 'white' }}  />
         </form>
       </div>
       <Testimoniesandprayer />
       <Makeadonation />
       <Map />
       <Footer />
    </div>
  )
}

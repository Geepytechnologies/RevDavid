import React,{useEffect,useState,useMemo, useCallback} from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { country } from '../../data/country';
import { GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import axios from 'axios'
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import Seeds from '../../components/Seeds';
import Passion5 from '../../components/Passion5';
import Success from '../../components/Success';
import { BsCheckLg } from 'react-icons/bs';





export default function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [selectedcountry,setSelectedcountry] = useState('Afghanistan')
  const [value, setValue] = useState();
  const onSubmit = async (data) =>{ 
    const res = await axios.post("http://localhost:3000/api/contacts",{
      firstname: data.firstname,
      surname: data.surname,
      email: data.myemail,
      country: data.country,
      phone: data.phone, 
      testimonies: data.testimony,
      prayerRequest: data.prayerRequest
    })
    res && setLoading(true);
  }
  const Contactheader = useCallback(()=>(
    <div className=" bg-[url('/img-3.jpg')] h-[400px] w-[100%] bg-cover relative ">
        <div className='absolute top-0 overlay'></div>
        <div className='w-[100%] absolute left-0 bottom-[50px] h-[80px]'>
          <div className='relative w-[50%] md:w-[30%] flex items-center h-[100%] pl-[20px] ml-[5px]'>
            <div className='animatedcon animate__animated  animate__fadeInLeft'></div>
            <p className='mytext text-white font-[600] text-[30px] animate__animated  animate__fadeInLeft'>Get In Touch</p>
          </div>
        </div>
    </div>
  ),[])
 

 
    
  const Makeadonation = ()=>(
    <div className='flex flex-col md:flex-row w-[100vw] items-center justify-around mb-[70px]'>
      <Seeds />
      <Passion5 />
    </div>
  )
   const Map = useCallback(()=>(
    <div className='w-[100vw] py-[10px] mb-[10px] flex items-center justify-center '>
    <div className='w-[90%] h-[auto] flex items-center justify-center '>
        <iframe className='w-[100%] h-[450px] border-2 border-[#e6e6e6] '
          width="400"
          // height="450"
          // style="border:0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
            src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCfRPpHvF9GWWeNa4c5_LJiCGXHc190x00&q=Intimate+vessels+church,awka+nigeria"
            >
        </iframe>
    </div>
    </div>
   ),[])
    
  return (
    
    <div className='relative'>
       <Header />
       <Navbar />
       <Contactheader />
       <div className='w-[100%] mt-[20px] flex items-center justify-center '>
       <div className=' flex flex-col h-[auto] p-[10px] w-[100%] md:w-[70%]  '>
         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-[100%] " >
          <div className="flex flex-col">
            <label>Firstname</label>
            <input type='text' {...register("firstname",{ required: {value: true, message:"Firstname is required"}, maxLength: {value:15, message:"Firstname shouldn't be more than 15 characters"} })} placeholder="Greg" className="border p-[8px] border-[#e8e8e8] rounded-sm"  />
            {errors.firstname && <p className='text-[red]'>{errors.firstname?.message}</p>}
          </div>
          <div className="flex flex-col">
            <label>Surname</label>
            <input {...register("surname",{ required: {value: true, message:"Surname is required"}, maxLength: {value:15, message:"Surname shouldn't be more than 15 characters"} })} type='text' placeholder="Jill" className="border p-[8px] border-[#e8e8e8] rounded-sm" />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input {...register("myemail",{required: {value: true, message: "Please Input your Email"}})} type='email' placeholder="Gregjill@me.com" className="border p-[8px] border-[#e8e8e8] rounded-sm" />
            {errors.myemail && <p className='text-[red]'>{errors.myemail?.message}</p>}
          </div>
          <div className="flex flex-col">
            <label>Country</label>
            <select className='p-[8px]' selected="Nigeria" {...register("country",{required: true})} onChange={(e)=>setSelectedcountry(e.currentTarget.value)} >
              {
                country.map((item,index)=>(
                  <option value={item} key={index}>{item}</option>
                ))
              }
            </select>
          </div>
          <div className="flex flex-col">
            <label>Phone</label>
            <PhoneInput
            international
            defaultCountry="NG"
              placeholder="Enter phone number"
              value={value}
              {...register("phone")}
              onChange={setValue}
              className="border p-[8px] border-[#e8e8e8] rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <label>Testimonies</label>
            <textarea className="min-h-[100px] border border-[#e8e8e8] rounded-sm " {...register("testimony",{maxLength: {value: 200, message:"Characters should not be more 200"}})} ></textarea>
            {errors.message && <p className='text-[red]'>{errors.message?.message}</p>}
          </div>
          <div className="flex flex-col">
            <label>Prayer Requests</label>
            <textarea className="min-h-[100px] border border-[#e8e8e8] rounded-sm " {...register("prayerRequest",{maxLength: {value: 200, message:"Characters should not be more 200"}})} ></textarea>
            {errors.message && <p className='text-[red]'>{errors.message?.message}</p>}
          </div>
          {loading === false ? <button type="submit" className='mysubmit rounded-lg mt-[5px] p-[10px] text-[18px] font-[700] ' style={{backgroundColor: '#7b0000', color: 'white' }}>Submit</button> : <button className='mysubmit flex flex-row items-center justify-center rounded-lg mt-[5px] p-[10px] text-[18px] font-[700] ' style={{backgroundColor: '#38a169', color: 'white' }}><span className='mr-[4px]'>Message sent </span><AiOutlineCheckCircle className='text-[white] text-[30px]' /></button> }
         </form>
       </div>
       </div>
       <Makeadonation />
       <Map />
       <Footer />
    </div>
  )
}


import React, {useRef, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane, FaBars} from 'react-icons/fa'
import {RiCloseCircleLine} from 'react-icons/ri'
import Sidenav from './Sidenav'
import About from './About'
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillYoutube } from 'react-icons/ai'



export default function Navbar(props) {
    const router = useRouter();
    const transnav = useRef();
    const socials = useRef();
    const wrapper = useRef();
    const logo = useRef();
    const side = useRef();
    const menu = useRef();
    const close = useRef();
    const show = () => {
        const solid = window.scrollY > 50
        document.body.style.overflow = 'hidden';
        menu.current.style.display = 'none';
        close.current.style.display = 'flex';
        side.current.style.maxHeight = 'calc(100vh - 10px)';
        side.current.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
        transnav.current.classList.add('solidnav')
            socials.current.classList.add('text-[#9b0000]')
            wrapper.current.classList.remove('bg-[#9b0000]')
            wrapper.current.classList.add('bg-[white]')
            logo.current.style.color = "#bfccd4";
        
    }
    const hide = () => {
        document.body.style.overflow = 'scroll';
        menu.current.style.display = 'flex';
        close.current.style.display = 'none';
        side.current.style.maxHeight = '0px';
        side.current.style.borderBottom = '0px';
        side.current.style.borderTop = '0px';
    }
    useEffect(()=>{
       const handleScroll = ()=>{
        const solid = window.scrollY > 50
        if(solid){
            transnav.current.classList.add('solidnav')
            socials.current.classList.add('text-[#9b0000]')
            wrapper.current.classList.remove('bg-[#9b0000]')
            wrapper.current.classList.add('bg-[white]')
            logo.current.style.color = "#bfccd4";
            
        }else {
            transnav.current.classList.remove('solidnav')
            socials.current.classList.remove('text-[#9b0000]')
            socials.current.classList.add('text-[#bfccd4]')
            wrapper.current.classList.add('bg-[#9b0000]')
            logo.current.style.color = "#9b0000"
            
        }
       }
       document.addEventListener('scroll', handleScroll)
       return ()=>{
        document.removeEventListener('scroll',handleScroll)
       }
    },[])
  return (
    <>
      <div ref={transnav} className='transnav'>
            {/* logo section */}
            <div onClick={()=>{router.push('/')}} className='flex items-center basis-[70%] sm:basis-[50%] md:basis-[30%] lg:[25%]'>
                <p ref={logo} className='font-allura pl-[5px] font-[700] text-[20px] sm:text-[30px] text-[#9b0000] '>Rev David Akanwa</p>
            </div>
            {/* end of logo section */}
            {/* menu section */}
            <div className='basis-[30%] hidden md:block md:basis-[70%] lg:basis-[50%]'>
                <div className=''>
                    <ul className='flex justify-around text-[white]  text-[19px] '>
                            <li className='dtext inline cursor-pointer font-[poppins]'><Link href='/'><a>Home</a></Link></li>
                            
                            <li className='dtext inline  cursor-pointer font-[poppins]'><Link href='/about'><a>About</a></Link></li>
                            
                            <li className='dtext inline  cursor-pointer font-[poppins]'><Link href='/media'><a>Media</a></Link></li>
                            
                            <li className='dtext inline  cursor-pointer font-[poppins]'><Link href='/events'><a>Events</a></Link></li>
                            
                            <li className='dtext inline  cursor-pointer font-[poppins]'><Link href='/blog'><a>Blog</a></Link>
                            </li>
                            
                            <li className='dtext inline  cursor-pointer font-rob'><Link href='/'><a>Contact</a></Link></li>
                            
                    </ul>
                </div>
            </div>
            {/* end of menu section */}
            {/* social icons */}
            <div className='lg:basis-[25%] lg:flex lg:justify-end hidden lg:block animate__animated animate__bounce animate__infinite	infinite '>
                <div ref={wrapper} className='w-[70%] p-[10px] bg-[#9b0000] mr-[4px] rounded-xl socialshadow border-2 border-white'>
                <ul ref={socials} className='flex justify-around text-[#bfccd4]'>
                    <li className='inline'>
                        <Link href='' target='_blank' rel='noreferrer'><a><FaTwitter  /></a></Link>
                    </li>
                    
                    <li className='inline'>
                        <Link href='/' target='_self' rel='noreferrer'><a><AiFillYoutube  /></a></Link>
                    </li>
                    <li className='inline'>
                        <Link href='' target='_self' rel='noreferrer'><a><FaFacebook /></a></Link>
                    </li>
                    <li className='inline'>
                        <Link href='' target='_blank' rel='noreferrer'><a><FaInstagram /></a></Link>
                    </li>
                </ul>
                </div>
            </div>
            {/* end of social icons */}
            {/* menu icon */}
            <div ref={menu} onClick={show} className='flex justify-end basis-[50%] cursor-pointer sm:basis-[50%] text-[25px] pr-[10px] md:!hidden'>
                <FaBars className='border-2 text-white  rounded-md p-[4px]' /> 
            </div>
            <div ref={close} onClick={hide} className='basis-[50%] hidden cursor-pointer sm:basis-[50%] text-[25px] pr-[10px] flex justify-end  md:!hidden'>
                <RiCloseCircleLine style={{fill: 'white'}} />
            </div>
            {/* end of menu icon */}
        </div>
        <div ref={side} className='w-[70vw] fixed sidenav  border-none  top-[90px] text-white right-[0px] overflow-hidden sidenavglass max-h-[0px] h-[100vh] md:!hidden transition-[max-height] duration-500 ease-in-out'><Sidenav /></div>
    {/* solid navbar */}
    
    </>
  )
}

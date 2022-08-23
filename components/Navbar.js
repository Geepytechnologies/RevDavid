import React, {useRef, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane, FaBars} from 'react-icons/fa'
import {RiCloseCircleLine} from 'react-icons/ri'
import Sidenav from './Sidenav'

export default function Navbar(props) {
    const router = useRouter();
    const [navBackground, setNavBackground] = useState('transparent');
    const nav = useRef();
    const side = useRef();
    const menu = useRef();
    const close = useRef();
    const home = useRef();
    const courses = useRef();
    const about = useRef();
    const contact = useRef();
    const blog = useRef();
    const show = () => {
        document.body.style.overflow = 'hidden';
        menu.current.style.display = 'none';
        close.current.style.display = 'flex';
        side.current.style.maxHeight = 'calc(100vh - 10px)';
        side.current.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
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
       if(props && props.active == 'home'){
       home.current.classList.remove('w-[0px]')
       home.current.classList.add('bg-[hsl(34,100%,47%)]')
       home.current.classList.add('w-[90%]')
       }
       if(props && props.active == 'courses'){
       courses.current.classList.remove('w-[0px]')
       courses.current.classList.add('bg-[hsl(34,100%,47%)]')
       courses.current.classList.add('w-[90%]')
       }
       if(props && props.active == 'about'){
       about.current.classList.remove('w-[0px]')
       about.current.classList.add('bg-[hsl(34,100%,47%)]')
       about.current.classList.add('w-[90%]')
       }
       if(props && props.active == 'contact'){
       contact.current.classList.remove('w-[0px]')
       contact.current.classList.add('bg-[hsl(34,100%,47%)]')
       contact.current.classList.add('w-[90%]')
       }
       if(props && props.active == 'blog'){
       blog.current.classList.remove('w-[0px]')
       blog.current.classList.add('bg-[hsl(34,100%,47%)]')
       blog.current.classList.add('w-[90%]')
       }
       const handleScroll = ()=>{
        const solid = window.scrollY > 100
        if(solid) {
            nav.current.style.backgroundColor = 'green';
        }else {
            nav.current.style.backgroundColor = 'transparent';
        }
       }
       document.addEventListener('scroll', handleScroll)
       return ()=>{
        document.removeEventListener('scroll',handleScroll)
       }
    },[])
  return (
    <div ref={nav} className='text-white w-[100%] border-b shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)] border-b-[#f7f7f7] h-[90px] flex items-center relative sticky top-[0px]   z-[100]'>
        {/* logo section */}
        <div onClick={()=>{router.push('/')}} className='flex items-center basis-[50%] sm:basis-[50%] md:basis-[30%] lg:[25%]'>
              <p className='font-allura font-[700] text-[25px] text-[#9b0000]'>Rev David Akanwa</p>
        </div>
        {/* end of logo section */}
        {/* menu section */}
        <div className='basis-[50%] hidden md:block md:basis-[70%] lg:basis-[50%]'>
            <div className=''>
                <ul className='flex justify-around'>
                        <li className='dtext inline text-[black] cursor-pointer font-[poppins]'><Link href='/'><a>Home</a></Link></li>
                        
                        <li className='dtext inline text-[black] cursor-pointer font-[poppins]'><Link href='/courses'><a>About</a></Link></li>
                        
                        <li className='dtext inline text-[black] cursor-pointer font-[poppins]'><Link href='/'><a>Media</a></Link></li>
                        
                        <li className='dtext inline text-[black] cursor-pointer font-[poppins]'><Link href='/about'><a>Events</a></Link></li>
                        
                        <li className='dtext inline text-[black] cursor-pointer font-[poppins]'><Link href='/'><a>Blog</a></Link>
                        </li>
                        
                        <li className='dtext inline text-[black] cursor-pointer font-rob'><Link href='/'><a></a></Link>Donate
                        </li>
                        
                        <li className='dtext inline text-[black] cursor-pointer font-rob'><Link href='/'><a>Contact</a></Link></li>
                        
                </ul>
            </div>
        </div>
        {/* end of menu section */}
        {/* social icons */}
        <div className='lg:basis-[25%] lg:flex lg:justify-end hidden lg:block '>
            <div className='w-[70%] p-[5px]'>
            <ul className='flex justify-between pr-[20px]'>
                <li className='inline'>
                    <Link href='https://twitter.com/XYZ_ACADEMY1?t=Ag7TKGl4s1wzijAQhPtYoA&s=09' target='_blank' rel='noreferrer'><a><FaTwitter style={{fill: '#15255b'}} /></a></Link>
                </li>
                
                <li className='inline'>
                    <Link href='/' target='_self' rel='noreferrer'><a><FaTelegramPlane style={{fill: '#15255b'}}/></a></Link>
                </li>
                <li className='inline'>
                    <Link href='/' target='_self' rel='noreferrer'><a><FaFacebook style={{fill: '#15255b'}}/></a></Link>
                </li>
                <li className='inline'>
                    <Link href='https://instagram.com/officialxyzacademy?igshid=YmMyMTA2M2Y=' target='_blank' rel='noreferrer'><a><FaInstagram style={{fill: '#15255b'}}/></a></Link>
                </li>
                <li className='inline'>
                    <Link href='https://www.linkedin.com/in/xyz-academy-894959242' target='_blank' rel='noreferrer'><a><FaLinkedin style={{fill: '#15255b'}}/></a></Link>
                </li>
            </ul>
            </div>
        </div>
        {/* end of social icons */}
        {/* menu icon */}
        <div ref={menu} onClick={show} className='flex justify-end basis-[50%] cursor-pointer sm:basis-[50%] text-[25px] pr-[10px] md:!hidden'>
            <FaBars style={{fill: '#9b0000'}} />
        </div>
        <div ref={close} onClick={hide} className='basis-[50%] hidden cursor-pointer sm:basis-[50%] text-[25px] pr-[10px] flex justify-end  md:!hidden'>
            <RiCloseCircleLine style={{fill: 'hsl(34,100%,47%)'}} />
        </div>
        {/* end of menu icon */}
        <div ref={side} className='w-[100vw] fixed bg-[#15255b]  border-none z-[100] top-[90px] text-white right-[0px] overflow-hidden absolute sidenavglass max-h-[0px] h-[100vh] md:!hidden transition-[max-height] duration-500 ease-in-out'><Sidenav /></div>
    </div>
  )
}

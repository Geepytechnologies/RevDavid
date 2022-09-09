import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane, FaBars} from 'react-icons/fa'
import {AiOutlineCopyright, AiFillContacts} from 'react-icons/ai'
import {FaHome,FaBloggerB } from 'react-icons/fa'
import {MdMiscellaneousServices } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import Link from 'next/link';

export default function Sidenav() {
  return (
    <div className=''>
        <div className='text-white flex flex-col justify-around w-[100vw]'>
            <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[70%] hover:scale-[1.02]  py-[5px] rounded-r-lg my-[10px]'>
                <div className='mr-[5px]'><FaHome style={{fill: 'hsl(34,100%,47%)'}}/></div>
                <div><Link href='/'><a>Home</a></Link></div>
            </div>
            <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[70%] hover:scale-[1.02]  py-[5px] rounded-r-lg my-[10px]'>
                <div className='mr-[5px]'><MdMiscellaneousServices style={{fill: 'hsl(34,100%,47%)'}}/></div>
                <div className=''><Link href='/courses'><a>About</a></Link></div>
            </div>
            <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[70%] hover:scale-[1.02] py-[5px] rounded-r-lg my-[10px]'>
                <div className='mr-[5px]'><AiFillContacts style={{fill: 'hsl(34,100%,47%)'}}/></div>
                <div><Link href='/contact'><a>Media</a></Link></div>
            </div>
            <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[70%] hover:scale-[1.02] py-[5px] rounded-r-lg my-[10px]'>
                <div className='mr-[5px]'><IoIosContacts style={{fill: 'hsl(34,100%,47%)'}}/></div>
                <div className=''><Link href='/about'><a>Events</a></Link></div>
            </div>
            <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[70%] hover:scale-[1.02]  py-[5px] rounded-r-lg my-[10px]'>
                <div className='mr-[5px]'><FaBloggerB style={{fill: 'hsl(34,100%,47%)'}}/></div>
                <div><Link href='/blog'><a>Blog</a></Link></div>
            </div>
            <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[70%] hover:scale-[1.02]  py-[5px] rounded-r-lg my-[10px]'>
                <div className='mr-[5px]'><FaBloggerB style={{fill: 'hsl(34,100%,47%)'}}/></div>
                <div><Link href='/blog'><a>Donate</a></Link></div>
            </div>
            <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[70%] hover:scale-[1.02]  py-[5px] rounded-r-lg my-[10px]'>
                <div className='mr-[5px]'><FaBloggerB style={{fill: 'hsl(34,100%,47%)'}}/></div>
                <div><Link href='/blog'><a>Contact</a></Link></div>
            </div>
        </div>
        <div>
            <div className='w-[100%] p-[5px] flex items-center justify-center'>
                <ul className='flex justify-around pr-[20px] w-[80%]'>
                    <li className='inline hover:text-[hsl(34,100%,47%)]'>
                        <Link href='https://twitter.com/XYZ_ACADEMY1?t=Ag7TKGl4s1wzijAQhPtYoA&s=09' target='_blank' rel='noreferrer'><a><FaTwitter /></a></Link>
                    </li>
                    
                    <li className='inline hover:text-[hsl(34,100%,47%)]'>
                        <Link href='/' target='_self' rel='noreferrer'><a><FaTelegramPlane /></a></Link>
                    </li>
                    <li className='inline hover:text-[hsl(34,100%,47%)]'>
                        <Link href='/' target='_self' rel='noreferrer'><a><FaFacebook /></a></Link>
                    </li>
                    <li className='inline hover:text-[hsl(34,100%,47%)]'>
                        <Link href='https://instagram.com/officialxyzacademy?igshid=YmMyMTA2M2Y=' target='_blank' rel='noreferrer'><a><FaInstagram /></a></Link>
                    </li>
                    <li className='inline hover:text-[hsl(34,100%,47%)]'>
                        <Link href='https://www.linkedin.com/in/xyz-academy-894959242' target='_blank' rel='noreferrer'><a><FaLinkedin  /></a></Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex items-center justify-center mt-[10px]'><AiOutlineCopyright style={{paddingRight: '3px'}}/>Copyright 2022</div>
    </div>
  )
}

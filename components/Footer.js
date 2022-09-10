import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane, FaBars} from 'react-icons/fa'
import {AiFillHeart, AiOutlineCopyright} from 'react-icons/ai'
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowDropdownCircle } from 'react-icons/io';


export default function Footer() {
  return (
    <div className='h-[auto] pb-[50px] sm:pb-[0px] flex flex-col items-center justify-center bg-[#15255b] '>
        <div className='w-[60%] flex flex-col items-center justify-center'>
            <div className='flex w-[100%] items-center justify-center sm:justify-center'>
                <div onClick={()=>{router.push('/')}} className='flex items-center basis-[50%] sm:basis-[50%] md:basis-[30%] lg:[25%]'>
                    <p className='font-allura font-[700] text-[25px] text-[#9b0000]'>Rev David Akanwa</p>
                </div>
            </div>
        </div>
        {/* Navigation Links */}
        <div className='flex flex-col md:flex-row items-center justify-around w-[100%] '>
            {/* first row */}
            <div>
                <div className='flex flex-row items-center'>
                    <p className='mr-[8px]'>Quick Links</p>
                    <IoMdArrowDropdownCircle className='slide-bottom' />
                </div>
              <ul className='mylist'>
                <li>Mollit dolore velit fugiat sit magna esse mollit in aute.</li>
                <li>Mollit dolore velit fugiat sit magna esse mollit in aute.</li>
                <li>Mollit dolore velit fugiat sit magna esse mollit in aute.</li>
              </ul>
            </div>
            {/* second row */}
            <div>
                <div className='flex flex-row items-center'>
                    <p className='mr-[8px]'>Media</p>
                    <IoMdArrowDropdownCircle className='slide-bottom' />
                </div>                
                <ul className='mylist'>
                    <li>Mollit dolore velit fugiat sit magna esse mollit in aute.</li>
                    <li>Mollit dolore velit fugiat sit magna esse mollit in aute.</li>
                    <li>Mollit dolore velit fugiat sit magna esse mollit in aute.</li>
                </ul>
            </div>
            {/* third row */}
            <div>
                <div className='flex flex-row items-center'>
                    <p className='mr-[8px]'>Contact</p>
                    <IoMdArrowDropdownCircle className='slide-bottom' />
                </div>                
                <ul className='mylist'>
                    <li>Mollit dolore velit fugiat sit magna esse mollit in aute.</li>
                    <li>Mollit dolore velit fugiat sit magna esse mollit in aute.</li>
                    <li>Mollit dolore velit fugiat sit magna esse mollit in aute.</li>
                </ul>
            </div>
        </div>
        <div className='w-[100%] items-center justify-center flex'>
            <div className='w-[60%] p-[5px] flex items-center justify-around'>
                <ul className='flex justify-around w-[100%] text-white'>
                    <li className='inline border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='https://twitter.com/XYZ_ACADEMY1?t=Ag7TKGl4s1wzijAQhPtYoA&s=09' target='_blank' rel='noreferrer'><a><FaTwitter /></a></Link>
                    </li>
                    
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='/' target='_self' rel='noreferrer'><a><FaTelegramPlane /></a></Link>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='/' target='_self' rel='noreferrer'><a><FaFacebook /></a></Link>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='https://instagram.com/officialxyzacademy?igshid=YmMyMTA2M2Y=' target='_blank' rel='noreferrer'><a><FaInstagram /></a></Link>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='https://www.linkedin.com/in/xyz-academy-894959242' target='_blank' rel='noreferrer'><a><FaLinkedin /></a></Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='font-[roboto] text-[14px] pb-[20px] flex flex-col items-center justify-center mt-[10px] text-white'>
            <div className='flex flex-row items-center justify-center'><AiOutlineCopyright style={{paddingRight: '3px', fontSize: 20}}/>Copyright 2022 - Rev David Akanwa</div>
            <p>All rights reserved</p>
            <p className='flex flex-row items-center justify-center'>Made with <span className='mx-[2px]'><AiFillHeart /></span> by Geepy</p>
        </div>
    </div>
  )
}

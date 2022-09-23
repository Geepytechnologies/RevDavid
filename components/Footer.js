import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import {AiFillHeart, AiOutlineCopyright} from 'react-icons/ai'
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import 'animate.css';


export default function Footer() {
  return (
    <div className='footer1'>
    <div className='h-[auto] pb-[50px] sm:pb-[0px] flex flex-col items-center justify-center footer '>
        <div className='w-[100%] mb-[15px] flex flex-col items-center justify-center'>
            <div className='flex w-[100%] items-center justify-center sm:justify-center'>
                {/* <div onClick={()=>{router.push('/')}} className='flex items-center w-[100%] pl-[7px] py-[5px] '>
                    <p className='font-allura font-[700] text-[25px] text-[#bfccd4]'>Rev David Akanwa</p>
                </div> */}
            </div>
        </div>
        {/* Navigation Links */}
        <div className='flex flex-col md:flex-row pt-[15px] items-center justify-around w-[100%] '>
            {/* first row */}
            <div>
                <div className='flex flex-row items-center animate__animated animate__bounce animate__infinite	infinite'>
                    <p className='mr-[8px] text-[white] font-[600] '>Quick Links</p>
                    <IoMdArrowDropdownCircle className='animate__animated animate__bounce text-[white]' />
                </div>
              <ul className='mylist'>
                <li><Link href='/'>Mission</Link></li>
                <li><Link href='/blog'>Blog</Link></li>
                <li><Link href='/media'>Media</Link></li>
                <li><Link href='/contact'>Make a Donation</Link></li>
                <li><Link href='/about/intimatevesselschurch'>Intimate Vessels Church</Link></li>
              </ul>
            </div>
        </div>
        <div className='w-[100%] items-center justify-center flex'>
            <div className='w-[60%] p-[5px] flex items-center justify-around'>
                <ul className='flex justify-around w-[100%] text-white'>
                    <li className='inline border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='' target='_blank' rel='noreferrer'><a><FaTwitter /></a></Link>
                    </li>
                    
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='/' target='_self' rel='noreferrer'><a><FaFacebook /></a></Link>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='' target='_blank' rel='noreferrer'><a><FaInstagram /></a></Link>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='' target='_blank' rel='noreferrer'><a><FaYoutube /></a></Link>
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
    </div>
  )
}

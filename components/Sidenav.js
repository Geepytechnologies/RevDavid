import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane, FaBars} from 'react-icons/fa'
import {AiOutlineCopyright, AiFillContacts, AiFillYoutube} from 'react-icons/ai'
import { BsBook } from "react-icons/bs";
import Link from 'next/link';
import {useRouter} from 'next/router'

export default function Sidenav() {
  return (
    <div className='flex flex-col w-[100%] h-[100%]'>
        <div className='flex flex-row items-center justify-center pt-[10px]'>
            <BsBook className='text-[20px] mr-[3px]' />
            <p className='font-allura pl-[5px] font-[700] text-[20px] sm:text-[30px] text-[white] '>Rev David Akanwa</p>
        </div>
        <div className='text-white flex flex-col justify-around  basis-[70%] w-[100vw]'>
            <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[40%] hover:scale-[1.02] hover:text-[18px] font-[600]  hover:text-[white] hover:rounded-lg  ml-[6px] p-[5px] my-[10px]'>
                <div><Link href='/'>Home</Link></div>
            </div>
            <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[40%] hover:scale-[1.02] hover:text-[18px] font-[600]  hover:text-[white]  hover:rounded-lg  ml-[6px] p-[5px] my-[10px]'>
                <div className=''><Link href='/about'>About</Link></div>
            </div>
            <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[40%] hover:scale-[1.02] hover:text-[18px] font-[600]  hover:text-[white] hover:rounded-lg  ml-[6px] p-[5px] my-[10px]'>
                <div><Link href='/media'>Media</Link></div>
            </div>
            <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[40%] hover:scale-[1.02] hover:text-[18px] font-[600]  hover:text-[white] hover:rounded-lg  ml-[6px] p-[5px] my-[10px]'>
                <div className=''><Link href='/events'>Events</Link></div>
            </div>
            <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[40%] hover:scale-[1.02] hover:text-[18px] font-[600]  hover:text-[white]  hover:rounded-lg  ml-[6px] p-[5px] my-[10px]'>
                <div><Link href='/blog'>Blog</Link></div>
            </div>
            <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[40%] hover:scale-[1.02] hover:text-[18px] font-[600]  hover:text-[white] hover:rounded-lg  ml-[6px] p-[5px] my-[10px]'>
                <div><Link href='/contact'>Contact</Link></div>
            </div>
        </div>
        <div className='basis-[30%] items-center pt-[40px] flex flex-col'>
            <div className='w-[100%] p-[5px] flex items-center justify-center'>
                <ul className='flex justify-around text-[white] text-[20px] pr-[20px] w-[80%]'>
                    <li className='inline rounded-full border border-white p-[5px] hover:text-[rgba(255,255,255,0.6)] hover:border-[rgba(255,255,255,0.6)]'>
                        <Link href='' target='_blank' rel='noreferrer'><a><FaTwitter /></a></Link>
                    </li>
                    <li className='inline rounded-full border border-white p-[5px] hover:text-[rgba(255,255,255,0.6)] hover:border-[rgba(255,255,255,0.6)]'> 
                        <Link href='' target='_self' rel='noreferrer'><a><FaFacebook /></a></Link>
                    </li>
                    <li className='inline rounded-full border border-white p-[5px] hover:text-[rgba(255,255,255,0.6)] hover:border-[rgba(255,255,255,0.6)]'>
                        <Link href='' target='_blank' rel='noreferrer'><a><FaInstagram /></a></Link>
                    </li>
                    <li className='inline rounded-full border border-white p-[5px] hover:text-[rgba(255,255,255,0.6)] hover:border-[rgba(255,255,255,0.6)]'>
                        <Link href='' target='_blank' rel='noreferrer'><a><AiFillYoutube  /></a></Link>
                    </li>
                </ul>
            </div>
        <div className='flex items-center text-[white] justify-center mt-[10px]'><AiOutlineCopyright style={{paddingRight: '3px'}}/>Copyright 2022</div>
        </div>
    </div>
  )
}

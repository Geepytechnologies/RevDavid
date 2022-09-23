import Image from 'next/image';
import React from 'react'

function Theman() {
  return (
    <div className='mt-[10px]'>
      <h2 className='text-[25px] text-center md:hidden'>About the Revolutionary</h2>
      <div className='flex flex-col md:flex-row w-[100%] mb-[40px] p-[20px]'>
        <div className='basis-[50%] flex items-center justify-center'>
          <div className="w-[90%] ">
          <Image src='/go14.jpg' layout='responsive' width='100%' height='100%' objectFit='cover' />
          </div>
        </div> 
        <div className='basis-[50%]'>
          <h2 className='text-[25px] text-center hidden md:block'>About the Revolutionary</h2>
          <p className=''>Occaecat esse ut proident nostrud ea exercitation exercitation pariatur reprehenderit minim do occaecat. Cillum esse cillum irure officia Lorem anim sunt minim cupidatat.</p>
        </div>
      </div>
    </div>
  )
}

export default Theman;
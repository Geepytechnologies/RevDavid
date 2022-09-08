import React from 'react'

function Theman() {
  return (
    <div className='flex flex-row w-[100%] mb-[40px] p-[20px]'>
       <div className='basis-[50%]'>
         <div className="w-[90%] h-[500px] bg-[url('/img-1.jpg')] bg-cover "></div>
       </div> 
       <div className='basis-[50%]'>
         <h2 className='text-[25px]'>About the Revolutionary</h2>
         <p>Occaecat esse ut proident nostrud ea exercitation exercitation pariatur reprehenderit minim do occaecat. Cillum esse cillum irure officia Lorem anim sunt minim cupidatat.</p>
       </div>
    </div>
  )
}

export default Theman;
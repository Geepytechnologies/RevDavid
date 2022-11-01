import React, { useEffect, useRef } from 'react'
import { useForm } from "react-hook-form";


const VideoModal = React.forwardRef((props,modal)=> {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const CloseModal = ()=>{
        modal.current.style.display = "none";
        document.body.style.overflow = "scroll";
    }
    
    const onSubmit = async (data) =>{ 
       
    }
  return (
    <div ref={modal} className='bg-[rgba(0,0,0,0.4)] hidden absolute top-0 z-[999] w-[100vw] min-h-[100vh] flex items-center justify-center'>
        <div className='w-[30%] rounded-xl flex items-center justify-center bg-[white] '>
       <div className=' flex flex-col h-[auto] p-[10px] w-[100%] md:w-[100%]  '>
        <div className='w-[100%] flex justify-end'>
           <button onClick={CloseModal} className='text-[18px] shadow-xl bg-[#9b0000] text-white rounded-md px-[10px] py-[5px]'>Close</button>
        </div>
         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-[100%] " >
          <div className="flex flex-col">
            <label>Name</label>
            <input type='text' {...register("videoname",{ required: {value: true, message:"Videoname is required"} })} placeholder="Intimacy" className="border p-[8px] border-[#e8e8e8] rounded-sm"  />
            {errors.videoname && <p className='text-[red]'>{errors.videoname?.message}</p>}
          </div>
          <div className="flex flex-col">
            <label>Description</label>
            <input {...register("description")} type='text' placeholder="Inspirational" className="border p-[8px] border-[#e8e8e8] rounded-sm" />
          </div>
          <div className="flex flex-col">
            <label>Author</label>
            <input {...register("author",{required: {value: true, message: "Please Input Author"}})} type='text' placeholder="Rev David Akanwa" className="border p-[8px] border-[#e8e8e8] rounded-sm" />
            {errors.author && <p className='text-[red]'>{errors.author?.message}</p>}
          </div>
          <div className="flex flex-col">
            <label>Image Cover Url</label>
            <input className="border p-[8px] border-[#e8e8e8] rounded-sm " {...register("imgcoverurl")} />
          </div>
          <div className="flex flex-col">
            <label>Video Url</label>
            <input {...register("videourl",{ required: {value: true, message:"Please put in a Video Url"} })} type='text' className="border p-[8px] border-[#e8e8e8] rounded-sm" />
            {errors.videourl && <p className='text-[red]'>{errors.videourl?.message}</p>}
          </div>
          <button type="submit" className='mysubmit rounded-lg mt-[5px] p-[10px] text-[18px] font-[700] ' style={{backgroundColor: '#7b0000', color: 'white' }}>Submit</button>
         </form>
       </div>
       </div>
    </div>
  )
})


export default VideoModal;

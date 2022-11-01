import React, { useEffect, useRef } from 'react'
import { useForm } from "react-hook-form";

export const ModalContext = React.createContext('');

const Modal = React.forwardRef((props,modal)=> {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const CloseModal = ()=>{
        modal.current.style.display = "none";
    }
    
    const onSubmit = async (data) =>{ 
       
    }
  return (
    <div ref={modal} className='bg-[rgba(0,0,0,0.4)] hidden absolute top-0 z-[999] w-[100%] h-[100vh] flex items-center justify-center'>
        <div className='w-[30%] rounded-xl flex items-center justify-center bg-[white] '>
       <div className=' flex flex-col h-[auto] p-[10px] w-[100%] md:w-[100%]  '>
        <div className='w-[100%] flex justify-end'>
           <button onClick={CloseModal} className='text-[18px] shadow-xl bg-[#9b0000] text-white rounded-md px-[10px] py-[5px]'>Close</button>
        </div>
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
            <label>Testimonies</label>
            <textarea className="min-h-[100px] border border-[#e8e8e8] rounded-sm " {...register("testimony",{maxLength: {value: 200, message:"Characters should not be more 200"}})} ></textarea>
            {errors.message && <p className='text-[red]'>{errors.message?.message}</p>}
          </div>
          <div className="flex flex-col">
            <label>Prayer Requests</label>
            <textarea className="min-h-[100px] border border-[#e8e8e8] rounded-sm " {...register("prayerRequest",{maxLength: {value: 200, message:"Characters should not be more 200"}})} ></textarea>
            {errors.message && <p className='text-[red]'>{errors.message?.message}</p>}
          </div>
          <button type="submit" className='mysubmit rounded-lg mt-[5px] p-[10px] text-[18px] font-[700] ' style={{backgroundColor: '#7b0000', color: 'white' }}>Submit</button>
         </form>
       </div>
       </div>
    </div>
  )
})


export default Modal;

import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { country } from '../data/country';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import Image from 'next/image';

const Passion5 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [selectedcountry,setSelectedcountry] = useState('Afghanistan')
  const [value, setValue] = useState();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <div className=' w-[300px] h-[300px] border-2 border-[white] '>
       <Image src="/img-1.jpg" alt="" layout='responsive' height="100%" width="100%" objectFit='cover'  />
      </div>
       <p>Passion5</p>
      <Button onClick={onOpen}>Give</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
          <div className='w-[100%] flex items-center justify-center '>
       <div className=' flex flex-col h-[auto] p-[10px] w-[100%] md:w-[70%]  '>
         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-[100%] " >
          <div className="flex flex-col">
            <label>Firstname</label>
            <input type='text' {...register("firstname",{ required: true, maxLength: {value:20, message:'number is too short'} })} placeholder="Greg" className="border border-[#e8e8e8] rounded-sm"  />
            {errors.firstname && <p className='text-[red]'>{errors.firstname?.message}</p>}
          </div>
          <div className="flex flex-col">
            <label>Surname</label>
            <input {...register("surname")} type='text' placeholder="Jill" className="border border-[#e8e8e8] rounded-sm" />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input {...register("myemail")} type='email' placeholder="Gregjill@me.com" className="border border-[#e8e8e8] rounded-sm" />
            {errors.myemail && <p className='text-[red]'>{errors.myemail?.message}</p>}
          </div>
          <div className="flex flex-col">
            <label>Country</label>
            <select selected="Nigeria" {...register("country",{required: true})} onChange={(e)=>setSelectedcountry(e.currentTarget.value)} >
              {
                country.map((item,index)=>(
                  <option value={item} key={index}>{item}</option>
                ))
              }
            </select>
          </div>
          <div className="flex flex-col">
            <label>Phone</label>
            <PhoneInput
            international
            defaultCountry="NG"
              placeholder="Enter phone number"
              value={value}
              {...register("phone")}
              onChange={setValue}
              className="border border-[#e8e8e8] rounded-sm"
            />
          </div>
          <input type="submit" className='rounded-lg mt-[5px] p-[10px] text-[18px] font-[700] ' style={{backgroundColor: '#7b0000', color: 'white' }}  />
         </form>
       </div>
       </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Passion5
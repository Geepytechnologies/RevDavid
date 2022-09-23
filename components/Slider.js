import Image from 'next/image'
import React, {useRef, useState, useEffect} from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import styles from "../styles/Slider.module.css"


export default function Slider(){
    const bottom = useRef({});
    const slide = useRef();
    const [index, setIndex] = useState(0);
    const [bottomimage, setBottomimage] = useState(0)
    const topimages = [
        {
          id: 0,
          url: '/go1.jpg'
        },
        {
          id: 1,
          url: '/go2.jpg'
        },
        {
          id: 2,
          url: '/go3.jpg'
        },
        {
          id: 3,
          url: '/go4.jpg'
        },
        {
            id: 4,
            url: '/img-1.jpg'
        },
        {
            id: 5,
            url: '/img-2.jpg'
        },
        {
            id: 6,
            url: '/img-3.jpg'
        },
        {
            id: 7,
            url: '/go5.jpg'
        },
        {
            id: 8,
            url: '/go6.jpg'
        },
        {
            id: 9,
            url: '/go7.jpg'
        },
        {
            id: 10,
            url: '/go8.jpg'
        },
        {
            id: 11,
            url: '/go9.jpg'
        },
        {
            id: 12,
            url: '/go10.jpg'
        },
        {
            id: 13,
            url: '/go11.jpg'
        },
        {
            id: 14,
            url: '/go12.jpg'
        },
        {
            id: 15,
            url: '/go13.jpg'
        },
    ]
    const images = topimages.length;
    const handleArrow =(direction)=>{
        if(direction === "l"){
            setIndex(index !== 0 ? index-1 : images-1 )
        }
        if(direction === "r"){
            setIndex(index !== images-1 ? index+1 : 0)
        }
    }
    useEffect(()=>{
        const windowWidth = window.innerWidth;
        const element = bottom.current[index];
        const coord = element.getBoundingClientRect();
        const diff = coord.right - windowWidth;
        const actualdiff = windowWidth-diff;
        const myarray = Object.values(bottom.current);
        const a = myarray.filter((e,i)=> i !== index);
        if(index !== null){
            bottom.current[index].classList.add('border-2','border-[white]');  
            a.forEach(btn => {
                btn.classList.remove('border-2','border-[white]');
            });
        }
        // making the slider to be in view
        if(coord.left < 0 && index !== 0){
            slide.current.scrollLeft = coord.left * -1;
        }
        if(coord.left < 0 && index == 0){
            slide.current.scrollLeft = 0;
        }
        if(coord.left > 0 && diff > 0){
            slide.current.scrollLeft = 150 * index;
        }
        if(coord.left < 0 && diff < 0){
            slide.current.scrollLeft = 150 * index;
        }

        // console.log([index])
    },[index])
    const handleSlider = (i)=>{
        setIndex(()=>i) 
    }
    return(
        <div className=''>
          {/* Top slider */}
          <div className='overflow-hidden'>
            <div className="  bg-[white] border-t-2 border-white  flex flex-row " style={{transform:`translateX(${-100*index}vw)`, width: `${images * 100}vw` }}>
                {topimages.map((item,index)=>(
                <div key={index} className='relative w-[100vw]  '>
                <AiOutlineLeft onClick={()=>handleArrow('l')} className='absolute top-[0] bottom-[0] m-[auto]  text-[white] text-[45px] font-[600] left-[5%] z-[999]  cursor-pointer' />
                <Image src={item.url} alt='' width="100%" height="100%" layout="responsive" objectFit='cover'  />
                <AiOutlineRight onClick={()=>handleArrow('r')} className='absolute top-[0] bottom-[0] m-[auto] text-[white] text-[45px] font-[600] right-[5%] z-[999] cursor-pointer ' />
                </div>
                ))}
            </div>
          </div>
          {/* bottom slider */}
          <div ref={slide} className={styles.gallery}>
            <div className='flex flex-row items-center px-[6px] '>
            {topimages.map((item,i)=>(
                <div ref={(element) => bottom.current[i] = element} value='me' key={i} onClick={()=>handleSlider(i)} className='min-w-[150px] min-h-[150px] my-[3px] mr-[10px] relative' >
                    {/* <div className='w-[150px] h-[150px] relative'> */}
                      <Image src={item.url} alt='' layout='fill' objectFit='cover' />
                    {/* </div> */}
                </div>
            ))}
            </div>
          </div>
        </div>
    )
}
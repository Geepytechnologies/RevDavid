import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import Image from "next/image";

export default function swiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="relative w-[300px] h-[300px] ">
            <Image src="/img-3.jpg" alt='' layout='fill' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-[300px] h-[300px] ">
            <Image src="/img-1.jpg" alt='' layout='fill' />
          </div>        
          </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-[300px] h-[300px] ">
            <Image src="/img-1.jpg" alt='' layout='fill' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-[300px] h-[300px] ">
            <Image src="/img-2.jpg" alt='' layout='fill' />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="relative w-[300px] h-[300px] ">
            <Image src="/img-1.jpg" alt='' layout='fill' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-[300px] h-[300px] ">
            <Image src="/img-1.jpg" alt='' layout='fill' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-[300px] h-[300px] ">
            <Image src="/img-1.jpg" alt='' layout='fill' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-[300px] h-[300px] ">
            <Image src="/img-2.jpg" alt='' layout='fill' />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

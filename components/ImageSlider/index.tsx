"use client";

import React from "react";
import type SwiperType from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useState } from "react";
import Image from "next/image";

import "swiper/css";

interface ImageSliderProps {
  urls: string[];
}

export default function ImageSlider({ urls }: ImageSliderProps) {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);

  return (
    <div className="relative">
      <div>
        <button onClick={() => swiper?.slideNext()} aria-label="next image">
          {">"}
        </button>
        <button onClick={() => swiper?.slidePrev()} aria-label="previous image">
          {"<"}
        </button>
      </div>

      <Swiper
        slidesPerView={1}
        className="h-[100px] w-[200px]"
        onSwiper={setSwiper}
      >
        {urls.map((url, i) => (
          <SwiperSlide key={i} className="-z-10 relative h-[100px] w-[200px]">
            <Image
              fill
              loading="eager"
              className="-z-10 h-full w-full object-cover object-center"
              src={url}
              alt="Car image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

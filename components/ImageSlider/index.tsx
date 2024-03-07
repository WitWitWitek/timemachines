"use client";

import React from "react";
import type SwiperType from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ImageSliderProps {
  urls: string[];
}

export default function ImageSlider({ urls }: ImageSliderProps) {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: swiper && !swiper.destroyed ? swiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-96 w-full rounded-lg"
      >
        {urls.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={url}
                alt={`Car image ${index}`}
                className="block h-full w-full object-cover"
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setSwiper}
        modules={[FreeMode, Thumbs]}
        pagination={{ type: "fraction" }}
        loop={true}
        spaceBetween={12}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumbs mt-3 h-32 w-full rounded-lg"
      >
        {urls.map((url, index) => (
          <SwiperSlide key={index}>
            <button className="flex h-full w-full items-center justify-center">
              <Image
                fill
                loading="eager"
                className="-z-10 h-full w-full object-cover object-center rounded-lg"
                src={url}
                alt={`Car image ${index}`}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

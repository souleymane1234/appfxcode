"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousell() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/images/slides1.jpg"
            alt="Forest"
            style={{ height: 420, aspectRatio: 1 / 1 }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slides2.jpg"
            alt="Forest"
            style={{ height: 420, aspectRatio: 1 / 1 }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slides3.jpg"
            alt="Forest"
            style={{ height: 420, aspectRatio: 1 / 1 }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

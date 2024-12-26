"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function CarousellRfip() {
  const [size, setSize] = useState();
  useEffect(() => {
    const sizes = window.innerWidth;
    setSize(sizes)
}, []);
  return (
    <>
      <section className="flex flex-row m-2 sm:flex-none md:flex-none gap-2 bg-white">
        <iframe
          style={{ width: size / 2 }}
          src="https://booztech.tv/embed.php?type=channel&id=19&nobtback=1&nobtfwd=1&nobtplist=1&nopbar=1&noduration=0&nobtpause=1&notime=1&dontuseposter=0&autoplay=1&muted=1"
          allow="autoplay;"
          allowFullScreen
          width="100%"
          height="420"
        ></iframe>
        <Swiper
          style={{ width: size }}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
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
      </section>
    </>
  );
}

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
import { Autoplay } from "swiper/modules";

export default function CarousellProduct() {
  return (
    <div style={{ padding: "100px" }}>
      <h2 className="text-3xl font-bold text-center font-serif p-100 text-green-500">
        Annuaire des prix de produit
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <div className="backAnnuaire"></div> */}
          <img
            src="/images/newCapture.png"
            alt="Forest"
            style={{ alignSelf: "center", margin: "auto", }}
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="/images/newCapture.png" alt="Forest" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

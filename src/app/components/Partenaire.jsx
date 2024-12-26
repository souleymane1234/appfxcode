import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Sample logo data
const logos = [
  "/images/1-removebg-preview.png",
  "/images/3-removebg-preview.png",
  "/images/4-removebg-preview.png",
  "/images/5-removebg-preview.png",
  "/images/7-removebg-preview.png",
];

const Partenaire = () => {
  return (
    <div style={{ width: "100%", padding: "20px 0" }}>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              style={{
                width: "50%",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partenaire;

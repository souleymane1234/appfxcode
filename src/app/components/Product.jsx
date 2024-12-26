import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./styles.css";

const Product = () => {
  return (
    <div style={{ width: "100%", padding: "20px", }}>
    <h2 className="text-3xl font-bold text-center mb-16 mt-8 font-serif text-green-500">
        Les produits du mois
      </h2>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
          <img src="/images/cacao.png" className="back1"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/ananas.jpg" className="back1"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/aubergine.jpg" className="back1"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/porc.jpg" className="back1"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/ananas.jpg" className="back1"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/mangue.jpg" className="back1"/>
      </SwiperSlide>
    </Swiper>
  </div>
  );
};

export default Product;

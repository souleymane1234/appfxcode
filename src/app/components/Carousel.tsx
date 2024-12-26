"use client";
import { useState } from "react";

const images = [
  "/images/foret1.jpg",
  "/images/foret2.jpg",
  "/images/foret3.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="Forest"
        className="w-full h-full object-cover transition-transform duration-500"
      />
      <button
        onClick={nextSlide}
        className="absolute right-4 bottom-4 bg-green-800 text-white p-2 rounded-full"
      >
        Suivant
      </button>
    </div>
  );
};

export default Carousel;

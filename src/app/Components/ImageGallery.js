"use client"
import React, { useState } from 'react';
import class1 from "@/app/assets/classroom/class1.jpg"
import class2 from "@/app/assets/classroom/class2.jpg"
import class3 from "@/app/assets/classroom/class3.jpg"
import Image from 'next/image';
import { BsArrowLeftCircleFill } from "react-icons/bs";

const ImageCarousel = () => {
  const images = [
    { src: class1, alt: 'First slide' },
    { src: class2, alt: 'Second slide' },
    { src:class3, alt: 'Third slide' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto p-4">
      <div className="relative aspect-video bg-gray-100  ">
        {/* Current Image */}
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
          aria-label="Previous slide"
        >
          {/* <ChevronLeft className="w-6 h-6 text-gray-800" /> */}
          <BsArrowLeftCircleFill className=' text-[2rem] text-blue-600'/>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute -right-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
          aria-label="Next slide"
        >
          {/* <ChevronRight className="w-6 h-6 text-gray-800" /> */}
          <BsArrowLeftCircleFill className=' rotate-180 text-[2rem] text-blue-600'/>

        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 overflow-hidden rounded-xl">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
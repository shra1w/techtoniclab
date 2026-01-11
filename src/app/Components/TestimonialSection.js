"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    content: "Thanks to Techtonic Lab's expert training and strong industry connections, I got placed at InfoKrafts in no time!",
    rating: 5,
    name: "Pranal Rewatkar",
    company: "InfoKrafts",
    package: "",
    image: "/api/placeholder/40/40"
  },
  {
    id: 2,
    content: "Techtonic Lab has helped me restart my career after a long career gap.",
    rating: 5,
    name: "Chinmay Pande",
    company: "Infosys",
    package: "₹6.5 LPA",
    image: "/api/placeholder/40/40"
  },
  {
    id: 3,
    content: "I am very much thankfull to techtonic lab for helping me to get into real quick with non IT background.",
    rating: 5,
    name: "Avinash Bawane",
    company: "Lighthouse Info Systems",
    package: "₹5.2 LPA",
    image: "/api/placeholder/40/40"
  },
  {
    id: 4,
    content: "I was a Home Maker and from Non-IT Education background. Techtonic Lab helped me get start my journey in IT in Nagpur. The technical training and corporate grooming is planned in such way that it will make you Hero from Zero.",
    rating: 5,
    name: "Rupali Tekade",
    company: "GIF Technologies",
    package: "",
    image: "/api/placeholder/40/40"
  },
  {
    id: 5,
    content: "A B.Com graduate, Aman transitioned from an SAP End User to an SAP Consultant and secured placement at TCS, Nagpur by clearing just two interview rounds, supported by our industry-focused Corporate Grooming sessions. Aman secured his placement at TCS, Nagpur by clearing just two interview rounds, made possible through our effective Corporate Grooming sessions that focused on industry readiness, confidence, and practical skills.",
    rating: 5,
    name: "Aman Pathan",
    company: "TCS Nagpur",
    package: "",
    image: "/api/placeholder/40/40"
  },
  {
    id: 6,
    content: "I am happy to share that I have been placed at Lighthouse as a Functional Consultant. This opportunity marks an important milestone in my professional journey, and I’m grateful for the guidance, learning, and support that helped me achieve this.",
    rating: 5,
    name: "Sneha Ashokrao Khubalkar",
    company: "Lighthouse",
    package: "",
    image: "/api/placeholder/40/40"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonials.length;
        console.log(`Moving from testimonial ${prevIndex+1} to ${nextIndex+1}`);
        return nextIndex;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Header Section - Responsive */}
      <h1 className='uppercase font-medium mb-2 sm:mb-3 text-white text-xs sm:text-sm tracking-wider'>
        Testimonials
      </h1>
      
      {/* Title - Fully Responsive with proper line heights */}
      <div className='w-full sm:w-[90%] md:w-[80%] lg:w-[60%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center leading-tight sm:leading-tight md:leading-tight lg:leading-tight mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-white px-2'>
        Real Stories. Real Impact. Zero Hype.
      </div>

      {/* Main Carousel Container */}
      <div className="max-w-4xl w-full mx-auto">
        {/* Rating Display - Responsive spacing */}
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <div className="text-xl sm:text-2xl font-bold text-white mb-1">
            {currentTestimonial.rating.toFixed(1)}
          </div>
          <div className="flex gap-0.5 sm:gap-1">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
            Student Success Stories
          </div>
        </div>
        
        {/* Testimonial Content - Dynamic height based on content */}
        <div className="relative min-h-[280px] sm:min-h-[240px] md:min-h-[220px] w-full mb-6 sm:mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <div className="bg-emerald-500/30 bg-opacity-10 border border-emerald-700 border-opacity-20 rounded-lg p-4 sm:p-6 md:p-8 text-center relative overflow-hidden">
                {/* Company and Package - Responsive text */}
                <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-400 leading-snug px-2'>
                  {`Placed at ${currentTestimonial.company}${currentTestimonial.package ? ` • ${currentTestimonial.package}` : ''}`}
                </h1>
                
                {/* Testimonial Content - Responsive text */}
                <p className="text-white text-xs sm:text-sm md:text-md leading-relaxed mb-3 sm:mb-4 px-2">
                  &quot;{currentTestimonial.content}&quot;
                </p>
                
                {/* Author Name - Responsive text */}
                <div className="text-emerald-300 text-xs sm:text-sm font-medium">
                  — {currentTestimonial.name}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Profile Section - Responsive sizing */}
        <div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-10">
          {/* Profile Images Row - Responsive icon sizes */}
          <div className="flex rounded-full items-center justify-center mb-3 sm:mb-4 gap-1 sm:gap-2">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={testimonial.id}
                  onClick={() => goToTestimonial(index)}
                  className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full grid place-items-center bg-zinc-100 transition-all duration-300 ${
                    isActive ? 'z-10 scale-100' : 'opacity-60 scale-75'
                  } hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-emerald-400`}
                  aria-label={`View testimonial from ${testimonial.name}`}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.75,
                      opacity: isActive ? 1 : 0.6,
                      y: isActive ? -5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaUserTie className='text-base sm:text-xl md:text-2xl text-zinc-950'/>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full"
                      />
                    )}
                  </motion.div>
                </button>
              );
            })}
          </div>
          
          {/* Current User Name - Responsive text */}
          <motion.div
            key={`name-${currentTestimonial.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white font-medium text-sm sm:text-base text-center px-4"
          >
            {currentTestimonial.name}
          </motion.div>
        </div>
        
        {/* Indicator Dots - Responsive sizing and spacing */}
        <div className="flex justify-center mt-4 sm:mt-5 gap-1.5 sm:gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-emerald-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-zinc-950`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import bankOfAmerica from '@/app/assets/partners/bankOfAmerica.svg';
import barclay from '@/app/assets/partners/barclay.svg';
import BMCSoftware from '@/app/assets/partners/BMCSoftware.svg';
import capgeminiLogo from '@/app/assets/partners/capgeminiLogo.svg';
import cognizant from '@/app/assets/partners/cognizant.svg';
import hp5 from '@/app/assets/partners/hp5.svg';
import ibm from '@/app/assets/partners/ibm.svg';
import namco from '@/app/assets/partners/namco.svg';
import TCS from '@/app/assets/partners/TCS.svg';
import Image from 'next/image';

// Logo Carousel Component
const LogoCarousel = ({ logos, direction, speed }) => {
  // Duplicate logos to create seamless infinite scroll effect
  const duplicatedLogos = [...logos, ...logos, ...logos]; // Triple the logos for better continuity
  
  // Animation duration based on speed (lower speed = longer duration)
  // Using much higher value to make it slower
  const duration = 300 / speed; 
  
  // Define animation
  const animate = {
    x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
    transition: {
      x: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }
    }
  };

  const containerRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      {/* Left fade mask */}
      <div className={`absolute top-0 left-0 h-full z-10 md:bg-gradient-to-r from-white to-transparent ${direction === "left" ? "w-[20vw]" : "w-[10vw]"}`}></div>
      
      <motion.div 
        className="flex items-center"
        animate={animate}
        style={{ 
          width: 'fit-content', // Ensure the container expands to fit all logos
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div 
            key={`${logo.id}-${index}`} 
            className="flex-shrink-0 mx-4 md:mx-8 relative" // Increased margin for better spacing
            style={{ width: `${logo.id===3?"220px":"180px"}`, height: '90px' }} // Slightly larger for better visibility
          >
            <div className=" rounded-lg  p-4 h-full flex items-center justify-center transition-all hover:border-emerald-500 hover:shadow-emerald-500/20">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                className={` ${logo.id===4?"scale-[150%]":logo.id===6?"scale-[120%] object-contain":"object-cover"} max-w-[130%] max-h-full `}
              />
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Right fade mask */}
      <div className={`absolute top-0 right-0 h-full z-10 md:bg-gradient-to-l from-white to-transparent ${direction === "left" ? "w-[20vw]" : "w-[10vw]"}`}></div>
    </div>
  );
};

// Main Trusted Partners Component
const TrustedPartners = () => {
  // Using imported images from @/app/assets/partners
  const Logos = [
    { id: 1, alt: "bankOfAmerica", src: bankOfAmerica },
    { id: 2, alt: "barclay", src: barclay },
    { id: 3, alt: "BMCSoftware", src: BMCSoftware },
    { id: 4, alt: "capgeminiLogo", src: capgeminiLogo },
    { id: 5, alt: "cognizant", src: cognizant },
    { id: 6, alt: "hp5", src: hp5 },
    { id: 7, alt: "ibm", src: ibm },
    { id: 8, alt: "namco", src: namco },
    { id: 9, alt: "TCS", src: TCS }
  ];
  
  // Fixed logos for the second row - reversed order instead of random
  const secondRowLogos = [
    { id: 1, alt: "bankOfAmerica", src: bankOfAmerica },
    { id: 2, alt: "barclay", src: barclay },
    { id: 3, alt: "namco", src: namco },
    { id: 4, alt: " capgeminiLogo", src:  capgeminiLogo },
    { id: 5, alt: "cognizant", src: cognizant },
    { id: 6, alt: "hp5", src: hp5 },
    { id: 7, alt: "ibm", src:  ibm },
    { id: 8, alt: "BMCSoftware", src: BMCSoftware },
    { id: 9, alt: "TCS", src: TCS }
  ].reverse(); // Reversed order for consistent server/client rendering
  
  const row1Logos = Logos; // Using actual partner logos
  const row2Logos = secondRowLogos; // Using reversed but fixed logos
  const row3Logos = Array(8).fill().map((_, i) => ({
    id: `logo-third-${i}`,
    src: `/api/placeholder/160/80`,
    alt: `Company Logo ${i+1}`
  }));

  return (
    <div className="w-full py-16 bg-zinc-100">
      {/* <Image src={bankOfAmerica} className='w-32 ' alt="dsasd" /> */}
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-600 mb-3">Trusted Partners</h2>
          <p className="text-zinc-700 text-lg">We have 100+ trusted partners for student placement</p>
        </div>

        {/* Carousel Rows */}
        <div className="space-y-[10vh] mt-[13vh]">
          <LogoCarousel logos={row1Logos} direction="right" speed={2} /> {/* First row moving right */}
          <LogoCarousel logos={row2Logos} direction="left" speed={3} /> {/* Second row (shuffled) moving left with different speed */}
          {/* <LogoCarousel logos={row3Logos} direction="right" speed={6} />  */}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function ThreeStepSection() {
  const controls = useAnimation();
  const containerRef = React.useRef(null);
  const inView = useInView(containerRef, { amount: 0.4 }); // Trigger when 40% in view
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  // Background container animation
  const containerVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { 
        duration: 0.9, 
        ease: "easeInOut",
        when: "beforeChildren", 
        staggerChildren: 0.3 
      }
    }
  };
  
  // Text content animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    }
  };
  
  // Card animation with scale overshoot
  const cardVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0, 
      // transition: { 
      //   type: "spring",
      //   stiffness: 300,
      //   damping: 15,
      //   mass: 1.2,       // Increased from 1
      //   duration: 0.8 
      // }
    },
    
  };

  // Step data with titles and descriptions
  const steps = [
    { 
      number: 1, 
      title: "Personalized Career Coaching", 
      description: "Work one-on-one with expert mentors who customize guidance for your unique career journey",
      icon: (
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    { 
      number: 2, 
      title: "Skill Enhancement Resources", 
      description: "Access curated libraries of courses, workshops and tools to build in-demand professional skills",
      icon: (
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    { 
      number: 3, 
      title: "Job & Internship Matching", 
      description: "Connect with employers seeking your exact qualifications through our AI-powered matching platform",
      icon: (
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    }
  ];

  return (
    <div ref={containerRef} className="absolute top-[80%] md:top-[90%] mask-b-from-60% w-full h-[55rem] md:h-[35rem] flex items-center justify-center overflow-hidden">
      <motion.div 
        className="w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] h-full bg-zinc-950 rounded-2xl border border-zinc-700 p-4 md:p-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div 
          className="text-center mb-6 md:mb-10 text-white"
          variants={textVariants}
        >
          <h2 className="text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] xl:text-[3rem] text-emerald-500 font-bold mb-1 md:mb-2">Land Your Dream Job</h2>
          <h3 className="text-[0.8rem] sm:text-[0.9rem] md:text-xl mb-2 md:mb-3 text-zinc-400">With our proven 3-step approach</h3>
          <p className="text-zinc-300 text-sm sm:text-base max-w-3xl mx-auto">
          &quot;Transforming careers through expert guidance, skills development
          
           and perfect-match opportunities — all tailored to your unique potential.&quot;
          </p>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-4 sm:gap-6 md:gap-8 h-[65%] mt-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="w-[90%] sm:w-[45%] md:w-[30%] h-auto sm:h-[60%] rounded-lg flex flex-col items-center justify-center text-white bg-zinc-900/80 p-4 md:p-6 mb-4 sm:mb-0 relative transition-all duration-300 hover:bg-zinc-800/30 group"
              variants={cardVariants}
             
            >
              {/* Icon positioned outside the box */}
              <div className="w-16 h-16 shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3 relative -mt-12 group-hover:scale-110 transition-all duration-300">
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-full bg-emerald-500/30 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon container */}
                <div className="relative z-10 text-white w-10 h-10 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-2 text-center">{step.title}</h4>
              <p className="text-zinc-300 text-sm md:text-[0.9rem] text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
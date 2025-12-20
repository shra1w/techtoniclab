"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { LuArrowRightFromLine, LuCircleFadingArrowUp } from "react-icons/lu";
import Link from 'next/link';
import Image from 'next/image';

const CourseCard = ({ title, description, image, tag, index, hoveredCard, setHoveredCard, link }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isHovered = hoveredCard === index;
  
  // Detect if device is mobile to force button visibility
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is standard tablet/mobile breakpoint
    };
    
    // Initial check
    checkMobile();
    
    // Listener for resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation variants for the Card Body
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" }
    }
  };

  // Animation variants for the Button
  // Logic: On mobile, 'hidden' state is actually visible. On desktop, it's truly hidden.
  const buttonVariants = {
    hidden: { 
      opacity: isMobile ? 1 : 0, 
      y: isMobile ? 0 : 10,
      pointerEvents: isMobile ? 'auto' : 'none' 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      pointerEvents: 'auto',
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col h-full group/card">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
        className={`flex-1 rounded-2xl overflow-hidden bg-white border transition-all duration-300 shadow-xl ${
          isHovered 
            ? 'border-emerald-500 shadow-emerald-900/10 -translate-y-2' 
            : 'border-zinc-200 shadow-zinc-200/50'
        } relative flex flex-col`}
        onMouseEnter={() => setHoveredCard(index)}
        // On mobile, tapping the card sets it as hovered/active
        onClick={() => setHoveredCard(index)}
      >
        {/* Course Image */}
        <div className="relative h-56 overflow-hidden bg-black border-b border-zinc-100">
          <Image 
            src={image} 
            alt={title} 
            width={400}
            height={300}
            className="w-full h-full scale-80 object-cover transition-transform duration-700 "
          />
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-zinc-900 text-[0.6rem] font-bold px-3 py-1.5 rounded-full shadow-sm border border-zinc-200 uppercase tracking-wide">
            {tag}
          </div>
        </div>
        
        {/* Course Details */}
        <div className="px-6 pb-3 pt-6 flex flex-col flex-1">
          <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover/card:text-emerald-600 transition-colors">
            {title}
          </h3>
          
          {/* Main Description Text */}
          <div className="flex-1">
             <p className="text-xs text-zinc-600 leading-relaxed">
               {description}
             </p>
          </div>
          
          {/* Branding Tag */}
          <div className="mt-6 pt-4 border-t border-zinc-100">
             <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-md">
                Techtonic Lab <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"/>
             </span>
          </div>
        </div>
      </motion.div>
      
      {/* View Details Button - Outside Card */}
      <motion.div
        initial="hidden"
        animate={isHovered || isMobile ? "visible" : "hidden"} // Force visible on mobile
        variants={buttonVariants}
        className="mt-4 px-4"
        onMouseEnter={() => setHoveredCard(index)} 
      >
        <Link 
          href={link} 
          className="bg-zinc-900 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 w-full flex items-center justify-center gap-2 group shadow-lg shadow-zinc-900/20 hover:shadow-emerald-600/30"
        >
          <span>Explore Course</span>
          <div className='relative w-6 h-6 flex items-center justify-center'>
             <LuArrowRightFromLine className='absolute text-lg transition-all duration-300 scale-100 opacity-100 group-hover:scale-0 group-hover:opacity-0'/>
             <LuCircleFadingArrowUp className='absolute text-lg transition-all duration-300 scale-0 opacity-0 rotate-45 group-hover:scale-100 group-hover:opacity-100 group-hover:rotate-0'/>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

const CoursesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredCard, setHoveredCard] = useState(null);

  // Exact Text from your request
  const courses = [
    {
      title: "SAP",
      description: "SAP is a skill that is highly in demand with the leading employers. Our modules cover SAP Financial Accounting and Controlling, SAP Materials Management, SAP Sales & Distribution and SAP Production Planning and Quality Management through sap course in Nagpur, sap classes Nagpur and sap classes in Nagpur.",
      image: "/course/sap.png",
      tag: "Highly In Demand",
      link: "/sap_course"
    },
    {
      title: "Data Analytics",
      description: "We have a comprehensive data analytics program covering all its aspects. From teaching all the tools and techniques to analysing real data, our program makes you efficient in using them in the actual industry environment as part of data analyst course in Nagpur and data analyst classes in Nagpur.",
      image: "/course/data.png", 
      tag: "Comprehensive",
       link: "/data_analytics_course"
    },
    {
      title: "Data Science",
      description: "Combining the leading skills from statistical analysis, programming, domain knowledge and machine learning. From strengthening your basics to teaching advanced skills, we give you a holistic approach in developing this skill in such a short duration through data science course in Nagpur and data science classes in Nagpur.",
      image: "/course/corporate.png",
      tag: "Holistic Approach",
      link: "/data_science_course"
    }
  ];

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div 
      className="w-full bg-zinc-50 py-24 px-4 sm:px-6 lg:px-8" 
      ref={sectionRef}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className='text-sm md:text-base text-emerald-600 font-bold tracking-widest uppercase mb-4'
           >
             Industry-Ready Curriculum
           </motion.p>
           
           <motion.div 
             initial="hidden"
             animate={isInView ? "visible" : "hidden"}
             variants={headingVariants}
           >
             <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-zinc-900 tracking-tight">
               Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">IT Courses</span>
             </h2>
           </motion.div>
        </div>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {courses.map((course, index) => (
            <div key={index} className="w-full">
              <CourseCard 
                {...course}
                index={index}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CoursesSection;

"use client"
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LuArrowRightFromLine } from "react-icons/lu";
import { LuCircleFadingArrowUp } from "react-icons/lu";
import Link from 'next/link';
import Image from 'next/image';

const CourseCard = ({ title, description, image, tag, index, hoveredCard, setHoveredCard,link }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Check if this card is the currently hovered one
  const isHovered = hoveredCard === index;
  
  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 10
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="flex flex-col hover:-translate-y-4 duration-300 ">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
        className={`rounded-xl overflow-hidden bg-zinc-900  border ${isHovered ? 'border-emerald-500 shadow-2xl shadow-emerald-800/50' : 'border-zinc-800'} shadow-lg relative h-[420px]`}
        onMouseEnter={() => setHoveredCard(index)}
      >
        {/* Course Image */}
        <div className="relative h-60 overflow-hidden bg-[#131517] border-b-4 border-emerald-600/30">
          <Image 
            src={image} 
            alt={title} 
            width={400}
            height={300}
            className="w-[100%] h-[100%] scale-[80%] object-cover transition-transform duration-500 hover:scale-[90%]"
          />
          <div className="absolute top-3 right-3 bg-white text-black text-xs font-bold px-2 py-1 rounded">
            {tag}
          </div>
        </div>
        
        {/* Course Details */}
        <div className="py-2 px-4">
          <h3 className="text-xl font-bold text-emerald-500 mb-2">{title}</h3>
          <p className="text-sm text-zinc-400 h-[44px] mb-4 line-clamp-2">{description}</p>
          
          {/* Tag */}
          <div className='flex items-center gap-3'>
          <div className="inline-block px-3 py-1 bg-emerald-500 text-zinc-800 text-sm font-medium rounded">
            Techtonic Lab 
          </div>
        
          </div>
         
        </div>
      </motion.div>
      
      {/* View Details Button - Outside Card */}
      <motion.div
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        variants={buttonVariants}
        className="mt-4 flex justify-center"
        onMouseEnter={() => setHoveredCard(index)} // Keep the same card hovered when cursor is on button
      >
        <Link 
          href={link} 
          className="bg-emerald-500 text-[0.9rem] group flex items-center justify-center gap-1 hover:bg-emerald-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 w-full text-center"
        >
            
          Explore
          <span className='  relative grid place-items-center  rounded-full group-hover:bg-zinc-100 w-7 h-7 duration-300 '>
                <LuArrowRightFromLine className=' absolute text-[1.1rem]  duration-300 group-hover:text-emerald-600  scale-100 group-hover:scale-0 group-hover:opacity-0 text-zinc-100'/>
                <LuCircleFadingArrowUp className=' absolute text-[1.1rem] group-hover:rotate-45 scale-0 group-hover:scale-100 duration-300 group-hover:text-emerald-600 m-1 text-zinc-100'/>
            </span>
        </Link>
      </motion.div>
    </div>
  );
};

const CoursesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  const courses = [
    {
      title: "SAP",
      description: "Comprehensive SAP training with hands-on projects and industry-standard certifications to prepare you for enterprise resource planning roles.",
      image: "/course/sap.png",
      tag: "PROFESSIONAL",
      link:"/sap_course"
    },
    {
      title: "Data Science & Data Analytics",
      description: "Master data analysis, visualization, machine learning and AI techniques with real-world applications and portfolio-building projects.",
      image: "/course/data.png",
      tag: "HOT & TRENDING",
       link:"/data_analytics_course"
    },
    {
      title: "Corporate Grooming & Personality Development",
      description: "Enhance your professional presence, communication skills and workplace etiquette. Free with every 3-month course enrollment.",
      image: "/course/corporate.png",
      tag: "FREE",
      link:"/corporate_grooming"
    }
  ];

  // Heading animation
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
      className="w-full bg-zinc-100 py-16 px-4 sm:px-6 lg:px-8" 
      ref={sectionRef}
      onMouseLeave={() => setHoveredCard(null)} // Reset when mouse leaves the section
    >
      <div className="max-w-7xl mx-auto ">
        <p className='text-[0.7rem] md:text-[0.9rem] text-emerald-700 w-full text-center font-[600] mb-3'>TECHTONIC LAB </p>
        {/* Heading */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className="text-4xl w-full text-center sm:text-[5rem] font-bold text-zinc-900 mb-4">Courses Offered.</h2>
        </motion.div>
        
        {/* Course Cards - Using flex-wrap for mobile */}
        <div className="flex flex-wrap justify-center gap-8 mt-[10vh]">
          {courses.map((course, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
              <CourseCard 
                title={course.title}
                description={course.description}
                image={course.image}
                tag={course.tag}
                index={index}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
                link={course.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );}

export default CoursesSection;
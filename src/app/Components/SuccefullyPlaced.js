"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import infosys from "@/app/assets/placed/infosys.svg";
import capgeminiLogo from "@/app/assets/placed/capgeminiLogo.svg";
import infocraft from "@/app/assets/placed/infocraft.svg";


const TopCompaniesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants for heading
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut" 
      }
    }
  };

  // Animation variants for company logos
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.3 + (index * 0.2),
        ease: "easeOut"
      }
    })
  };

  // List of company logos
  const companies = [
    {
      name: 'InfoKrafts',
      logo: infocraft, // Static image path
      width: 100,
      height: 80
    },
    {
      name: 'Infosys',
      logo: infosys, // Imported SVG
      width: 200,
      height: 100
    },
    {
      name: 'Capgemini',
      logo: capgeminiLogo, // Imported SVG
      width: 200,
      height: 100
    },
    // You can add more companies here
  ];

  return (
    <div 
      ref={sectionRef} 
      className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gray-800">Top </span>
            <span className="text-emerald-500">companies</span>
            <span className="text-gray-800"> our candidate</span>
          </h2>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800">
            working with
          </h2>
        </motion.div>
        
        {/* Company logos */}
        <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-8 lg:gap-16 items-center justify-items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="w-full  flex justify-center"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              variants={logoVariants}
            >
              <div className="p-6 rounded-lg bg-white  text-zinc-900 transition-shadow duration-300 w-full flex items-center justify-center h-32">
                
                  {company.logo&&<Image 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    width={company.width}
                    height={company.height}
                    className=" w-auto object-contain"
                    priority
                  />}
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCompaniesSection;
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { TiUser } from "react-icons/ti";
import { MdAddLocationAlt } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function EachJobOpening({ eachJob, setCarrerContact, index = 0 }) {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        delay: index * 0.1 
      } 
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const arrowVariants = {
    initial: { rotate: 45, scale: 1 },
    hover: { 
      rotate: 90, 
      scale: 1.2,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: i => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.2 + (i * 0.05) 
      }
    }),
    hover: { 
      scale: 1.05, 
      color: "#0d9488",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  const handleClick = () => {
    setCarrerContact(true);
  };

  return (
    <>
      {/* Desktop version */}
      <motion.div 
        className="md:block hidden w-full"
        onClick={handleClick}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
      >
        <motion.div 
          className="mx-auto w-[90%] h-[11rem] border bg-white border-gray-200 shadow-sm rounded-lg grid p-4 cursor-pointer"
          style={{ gridTemplateColumns: '40% 20% 30% 10%' }}
        >
          <div className="flex flex-col justify-center">
            <motion.h2 
              className="text-gray-600 font-medium flex items-center gap-2 mb-1"
              variants={iconVariants}
            >
              <TiUser className="text-xl text-teal-600" /> Position
            </motion.h2>
            <motion.div 
              className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors pl-6"
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {eachJob?.position}
            </motion.div>
          </div>
          
          <div className="flex flex-col justify-center">
            <motion.h2 
              className="text-gray-600 font-medium flex items-center gap-2 mb-1"
              variants={iconVariants}
            >
              <MdAddLocationAlt className="text-xl text-teal-600" /> Location
            </motion.h2>
            <motion.div 
              className="text-lg font-semibold text-gray-700 pl-6"
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {eachJob.location}
            </motion.div>
          </div>
          
          <div className="flex flex-col justify-center">
            <motion.h2 
              className="text-gray-600 font-medium flex items-center gap-2 mb-1"
              variants={iconVariants}
            >
              <FaTags className="text-lg text-teal-600" /> Skills
            </motion.h2>
            <div className="flex flex-wrap gap-x-3 gap-y-2 pl-6">
              {eachJob?.skills.map((eachSkill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  custom={skillIndex}
                  variants={skillVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="text-sm font-medium text-gray-600 hover:text-teal-700 cursor-pointer transition-all"
                >
                  {eachSkill}
                </motion.span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <motion.div
              className="text-teal-500"
              variants={arrowVariants}
              initial="initial"
              whileHover="hover"
            >
              <IoArrowUpCircleOutline className="text-3xl" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile version */}
      <motion.div 
        className="md:hidden block w-full max-w-[22rem]"
        onClick={handleClick}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
      >
        <motion.div 
          className="p-4 h-auto min-h-[16rem] rounded-lg border border-gray-200 bg-white shadow-sm flex flex-col"
        >
          <motion.div 
            className="flex items-center gap-2 text-gray-600"
            variants={iconVariants}
          >
            <MdAddLocationAlt className="text-teal-600" /> {eachJob.location}
          </motion.div>
          
          <motion.div 
            className="text-2xl font-bold text-gray-800 flex-grow flex items-center justify-center my-4 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {eachJob?.position}
          </motion.div>
          
          <div className="w-full">
            <motion.h3
              className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1"
              variants={iconVariants}
            >
              <FaTags className="text-teal-600" /> Skills:
            </motion.h3>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {eachJob?.skills.map((eachSkill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  custom={skillIndex}
                  variants={skillVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 hover:bg-teal-100 hover:text-teal-700 cursor-pointer transition-all"
                >
                  {eachSkill}
                </motion.span>
              ))}
            </div>
          </div>
          
          <motion.button
            className="mt-4 w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium flex items-center justify-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Apply Now
            <IoArrowUpCircleOutline className="text-xl rotate-45 group-hover:rotate-90" />
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}
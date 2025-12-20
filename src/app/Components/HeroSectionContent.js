import { motion } from "motion/react";
import { TextGenerateEffect } from "./TextGenratingEffect";
import { FaRegFolderOpen } from "react-icons/fa6";
import { PiContactlessPaymentFill } from "react-icons/pi";
import Link from "next/link";

export default function HeroSectionContent() {
  // Animation Variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="absolute inset-0 z-10 flex  flex-col items-center justify-center px-4 w-full h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl flex flex-col items-center gap-1 sm:gap-2 md:gap-4 text-center mx-auto"
      >
        {/* 1. TOP LINE: Small, Elegant */}
        <motion.p
          variants={itemVariants}
          className="text-emerald-400  font-medium tracking-[0.2em] sm:tracking-[0.4em] text-xs sm:text-sm md:text-base uppercase mb-2"
        >
          Elevate Your
        </motion.p>

        {/* 2. MAIN HEADLINE PART 1: Massive Gradient */}
        <motion.div variants={itemVariants} className="relative z-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-400 leading-[0.9]">
            TECH CAREER
          </h1>
        </motion.div>

        {/* 3. CONNECTOR: Distinct Style */}
        <motion.div variants={itemVariants} className="py-1 md:py-2">
          <span className="text-zinc-400 font-light italic text-lg sm:text-2xl md:text-3xl font-serif">
            with the best
          </span>
        </motion.div>

        {/* 4. MAIN HEADLINE PART 2: Primary Keyword */}
        <motion.div variants={itemVariants} className="relative z-20 pb-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 leading-[0.9]">
            IT COURSES IN NAGPUR
          </h1>
        </motion.div>

        {/* 5. DESCRIPTION: Refined & Readable */}
        <motion.div
          variants={itemVariants}
          className="mt-2 sm:mt-4 w-full "
        >
          <div className="text-zinc-300/80 text-xs  md:text-base w-full flex justify-center font-light leading-relaxed ">
            <TextGenerateEffect 
              words="Join Techtonic Lab for job-ready training in Data Science, Analytics and SAP. We provide the hands-on experience top companies in Nagpur are looking for." 
            />
          </div>
        </motion.div>

        {/* 6. BUTTONS: Modern Glassmorphism */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Button */}
          <Link href="/connect-with-us" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <PiContactlessPaymentFill className="text-xl" />
              <span>Free Consultation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white animate-pulse" />
            </motion.button>
          </Link>

          {/* Secondary Button (Ghost/Outline) */}
          <Link href="#courses" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 rounded-full transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <FaRegFolderOpen />
              <span>Explore Courses</span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import JobApplicationForm from "./Components/JobApplicationForm";
import { 
  IoIosArrowDropleftCircle, 
  IoMdBriefcase 
} from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import HeaderSection from "../Components/HeaderSection";
import FooterSection from "../Components/FooterSection";

export default function CareersPage() {
  const [careerContact, setCareerContact] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  
  // Urgent hiring jobs
  const urgentHiringJobs = [
    {
      "position": "Sales Managers & Executives",
      "location": "Nagpur",
      "type": "URGENT HIRING",
      "workMode": "Work From Office",
      "skills": [
        "Any Graduate, marketing will be preferred",
        "1+ year Educational/training programs sales experience",
        "Excellent communication skills, fluency in English, Hindi and Marathi",
        "Target-driven and energetic"
      ],
      "isUrgent": true
    },
    {
      "position": "Sales Executive",
      "location": "WFO Manish Nagar, Nagpur, Maharashtra",
      "type": "URGENT HIRING",
      "workMode": "6 Day Working",
      "overview": "We're looking for passionate and dynamic Sales Managers and Executives to drive student enrollments, promote TECHTONIC-LAB's training programs, and build strong client relationships. You will help students make informed career choices while achieving sales goals.",
      "responsibilities": [
        "Generate and convert leads through calls, inquiries, and marketing activities",
        "Counsel students about TECHTONIC-LAB's training programs",
        "Maintain inquiry records and ensure regular follow-ups",
        "Collaborate with the marketing team for campaigns and promotions",
        "Represent the company at seminars, events, and college tie-ups"
      ],
      "skills": [
        "Education: Any Graduate (Marketing preferred)",
        "Experience: Minimum 1 year in education/training sales",
        "Excellent communication, fluency in English, Hindi, and Marathi",
        "Target-driven, energetic, and self-motivated"
      ],
      "offers": [
        "Competitive salary with incentives and growth opportunities",
        "Supportive, learning-focused work culture"
      ],
      "isUrgent": true
    }
  ];

  const careers = [
    {
      "position": "Admin & Receptionist",
      "location": "Nagpur",
      "skills": ["Communication", "Time Management", "Organizational Skills", "Customer Service"]
    },
    {
      "position": "Full-stack Developer",
      "location": "Nagpur",
      "skills": ["JavaScript", "React", "Node.js", "MongoDB", "API Development", "Version Control (Git)"]
    },
    {
      "position": "SAP FICO Trainer",
      "location": "Nagpur",
      "skills": ["SAP FICO", "Financial Accounting", "Controlling", "Training and Mentoring", "Problem-Solving"]
    },
    {
      "position": "SAP PP-QM Trainer",
      "location": "Nagpur",
      "skills": ["SAP PP", "SAP QM", "Production Planning", "Quality Management", "Training Delivery"]
    },
    {
      "position": "SALESFORCE Trainer",
      "location": "Nagpur",
      "skills": ["Salesforce CRM", "Apex Programming", "Lightning Components", "Data Management", "Training Skills"]
    },
    {
      "position": "Business Development Executive",
      "location": "Nagpur",
      "skills": ["Sales", "Lead Generation", "Client Relationship Management", "Market Research", "Negotiation"]
    }
  ];

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setCareerContact(true);
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 } 
    }
  };

  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
    exit: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-teal-50 to-white overflow-x-hidden">
      <HeaderSection />
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            style: {
              background: '#10b981',
            },
          },
          error: {
            style: {
              background: '#ef4444',
            },
          },
        }}
      />
      
      <div className="w-full min-h-[95vh] pt-[15vh] px-4">
        {careerContact ? (
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Apply for: {selectedJob?.position || "Position"}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Submit your details and upload your resume to explore this exciting career opportunity. Let&apos;s grow together!
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="text-center max-w-4xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Build Your Career With Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Join a team passionate about empowering others to achieve their career goals and grow alongside us.
            </p>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {careerContact ? (
            <motion.div 
              key="application-form"
              className="relative w-full h-full flex flex-col items-center"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%', transition: { duration: 0.3 } }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <motion.button
                className="absolute md:left-[10%] left-[5%] top-0 md:top-2 flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors cursor-pointer group z-10"
                onClick={() => setCareerContact(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IoIosArrowDropleftCircle className="text-2xl group-hover:translate-x-[-3px] transition-transform" />
                <span className="text-lg font-medium group-hover:underline">Back to Openings</span>
              </motion.button>
              
              <JobApplicationForm preselectedPosition={selectedJob?.position} />
            </motion.div>
          ) : (
            <motion.div 
              key="job-listings"
              className="w-full h-full flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.1 } }}
            >
              <motion.div 
                className="w-full max-w-6xl mx-auto pb-20"
                variants={containerVariants}
                initial="initial"
                animate="animate"
              >
                {/* Urgent Hiring Cards - Full Width */}
                <div className="space-y-6 md:space-y-8">
                  {urgentHiringJobs.map((job, index) => (
                    <UrgentHiringCard 
                      key={index}
                      job={job} 
                      onClick={() => handleJobSelect(job)}
                      index={index}
                    />
                  ))}
                </div>

                {/* Regular Job Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                  {careers.map((job, index) => (
                    <JobCard 
                      key={index} 
                      job={job} 
                      onClick={() => handleJobSelect(job)} 
                      index={index} 
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <FooterSection />
    </div>
  );
}

function UrgentHiringCard({ job, onClick, index }) {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden border-2 md:border-4 border-amber-400"
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { 
          type: "spring", 
          stiffness: 200, 
          damping: 20,
          delay: index * 0.15
        } 
      }}
      whileHover={{ 
        scale: 1.01,
        boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.4)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 opacity-20 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Urgent Badge with Animation - Responsive positioning */}
      <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10 pointer-events-none">
        <motion.div
          className="relative"
          animate={{ 
            scale: [1, 1.08, 1],
            rotate: [0, 3, -3, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm flex items-center gap-1 md:gap-2 shadow-lg">
            <HiLightningBolt className="text-yellow-300 text-base md:text-lg" />
            <span className="hidden xs:inline">URGENT HIRING</span>
            <span className="xs:hidden">URGENT</span>
            <HiLightningBolt className="text-yellow-300 text-base md:text-lg" />
          </div>
          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 bg-red-500 rounded-full blur-md md:blur-lg opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Sparkles Animation - Hidden on small mobile */}
      <motion.div
        className="hidden sm:block absolute top-6 md:top-8 left-6 md:left-8 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <HiSparkles className="text-amber-500 text-2xl md:text-3xl" />
      </motion.div>

      <motion.div
        className="hidden sm:block absolute bottom-6 md:bottom-8 right-12 md:right-16 pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <HiSparkles className="text-orange-400 text-xl md:text-2xl" />
      </motion.div>

      <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Top Section - Job Title & Location */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-start gap-3"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.15 }}
          >
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2.5 md:p-3 rounded-lg md:rounded-xl shadow-lg w-fit">
              <IoMdBriefcase className="text-2xl md:text-3xl text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-2">
                {job.position}
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold text-teal-700 bg-teal-100">
                  📍 {job.location}
                </span>
                {job.workMode && (
                  <span className="inline-flex items-center px-2.5 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold text-blue-700 bg-blue-100">
                    🏢 {job.workMode}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Job Overview (if available) */}
          {job.overview && (
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg md:rounded-xl p-3 md:p-4 border-2 border-blue-200"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 + index * 0.15 }}
            >
              <h3 className="text-sm md:text-base font-bold text-gray-800 mb-2">Job Overview</h3>
              <p className="text-xs sm:text-sm md:text-[15px] text-gray-700 leading-relaxed font-medium">
                {job.overview}
              </p>
            </motion.div>
          )}

          {/* Responsibilities Section (if available) */}
          {job.responsibilities && (
            <motion.div
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg md:rounded-xl p-3 md:p-4 border-2 border-purple-200"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.15 }}
            >
              <h3 className="text-sm md:text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs md:text-sm">Key Responsibilities</span>
              </h3>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2.5"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.35 + idx * 0.05 }}
                  >
                    <span className="text-purple-600 font-bold text-base flex-shrink-0 leading-[1.4]">•</span>
                    <span className="text-xs sm:text-sm md:text-[15px] text-gray-700 leading-relaxed font-medium flex-1">
                      {resp}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Requirements Section and CTA */}
          <div className="flex items-start md:flex-row md:justify-between flex-col gap-4">
            <motion.div
              className="w-full md:w-[70%]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.15 }}
            >
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg md:rounded-xl p-4 md:p-5 border-2 border-amber-300">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="bg-amber-500 text-white px-2 py-1 rounded text-xs md:text-sm">
                    {job.responsibilities ? 'Requirements' : 'Required Skills'}
                  </span>
                </h3>
                <ul className="space-y-2">
                  {job.skills.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2.5"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.45 + idx * 0.1 }}
                    >
                      <span className="text-amber-600 font-bold text-base flex-shrink-0 leading-[1.4]">•</span>
                      <span className="text-xs sm:text-sm md:text-[15px] text-gray-700 leading-relaxed font-medium flex-1">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* What We Offer Section (if available) */}
              {job.offers && (
                <motion.div
                  className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg md:rounded-xl p-3 md:p-4 border-2 border-green-200"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                >
                  <h3 className="text-sm md:text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs md:text-sm">What We Offer</span>
                  </h3>
                  <ul className="space-y-2">
                    {job.offers.map((offer, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2.5"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.55 + idx * 0.05 }}
                      >
                        <span className="text-green-600 font-bold text-base flex-shrink-0 leading-[1.4]">✓</span>
                        <span className="text-xs sm:text-sm md:text-[15px] text-gray-700 leading-relaxed font-medium flex-1">
                          {offer}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>

            {/* CTA Section - Stacked on mobile */}
            <motion.div
              className="flex flex-col items-center gap-3 md:gap-4 mt-2 w-full md:w-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.15 }}
            >
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                className="relative group bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg shadow-xl md:shadow-2xl overflow-hidden w-full sm:w-auto cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 pointer-events-none"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  Apply Now
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>

              <div className="text-center space-y-1">
                <p className="text-xs md:text-sm text-gray-600 font-medium">
                  Send your resume to:
                </p>
                <a 
                  href="mailto:admin@techtoniccorporate.com" 
                  className="text-teal-600 hover:text-teal-700 font-semibold text-xs md:text-sm hover:underline break-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  admin@techtoniccorporate.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <motion.div
        className="h-1.5 md:h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ backgroundSize: "200% 200%" }}
      />
    </motion.div>
  );
}

function JobCard({ job, onClick, index }) {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        delay: index * 0.1 
      } 
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      } 
    },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
            {job.location}
          </span>
          <motion.div 
            className="text-teal-600"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 45, scale: 1.2 }}
          >
            <FiArrowRight size={20} />
          </motion.div>
        </div>
        
        <div className="mt-4 flex-grow">
          <motion.div 
            className="flex items-center mb-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <IoMdBriefcase className="text-2xl text-teal-600 mr-2 flex-shrink-0" />
            <h3 className="text-xl font-bold text-gray-800">{job.position}</h3>
          </motion.div>
          
          <div className="mt-auto">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Required Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="px-2 py-1 bg-emerald-100 text-gray-700 text-xs rounded-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="mt-6 w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Apply Now
        </motion.button>
      </div>
    </motion.div>
  );
}

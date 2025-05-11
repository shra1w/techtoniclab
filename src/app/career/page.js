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
import HeaderSection from "../Components/HeaderSection";
import FooterSection from "../Components/FooterSection";

export default function CareersPage() {
  const [careerContact, setCareerContact] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  
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

  // Fixed animation variants to properly handle exit animations
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

  // Modified headerVariants to handle proper exit animations
  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
    exit: { 
      opacity: 1, // Keep opacity at 1 during exit
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
        {/* Separate heading divs outside of AnimatePresence to keep them always visible */}
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

        {/* Content section with AnimatePresence */}
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
                className="w-full max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-20"
                variants={containerVariants}
                initial="initial"
                animate="animate"
              >
                {careers.map((job, index) => (
                  <JobCard 
                    key={index} 
                    job={job} 
                    onClick={() => handleJobSelect(job)} 
                    index={index} 
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <FooterSection />
    </div>
  );
}

// Job Card Component with Framer Motion animations
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
      whileTap="tap"
      onClick={onClick}
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
            <IoMdBriefcase className="text-2xl text-teal-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-800">{job.position}</h3>
          </motion.div>
          
          <div className="mt-auto">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Required Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="px-2 py-1 bg-emerald-100 text-gray-700 text-xs rounded-md whitespace-nowrap"
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
          className="mt-6 w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Apply Now
        </motion.button>
      </div>
    </motion.div>
  );
}
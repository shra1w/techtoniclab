"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderSection from '../Components/HeaderSection';
import FooterSection from '../Components/FooterSection';
import Link from 'next/link';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-zinc-800">
      <div 
        className="py-10 px-4 md:px-8 flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-2xl md:text-4xl font-bold text-white">{title}</h3>
        <div className="flex items-center">
          <span className="text-white mr-3">
            {isOpen ? "Close" : "Expand"}
          </span>
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}
            >
              <path 
                d="M6 9L12 15L18 9" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-8 px-4 md:px-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CorporateGroomingAccordion = () => {
  const [openSection, setOpenSection] = useState(1);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="w-full bg-black text-white min-h-screen">
      {/* Hero Section */}
      <HeaderSection/>
      <div className="w-full py-20 md:py-[10rem] px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Transform.</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-500">From Potential to Professional.</h2>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full border-t border-zinc-800"></div>

      {/* Accordion Sections */}
      <div className="max-w-5xl mx-auto mb-[10rem]">
        {/* Corporate Grooming Overview */}
        <AccordionItem 
          title="Corporate Grooming & Personality Development" 
          isOpen={openSection === 1}
          onClick={() => toggleSection(1)}
        >
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full mb-2">
              FREE with every 3-month course
            </div>
            <h4 className="text-xl font-semibold text-purple-400">Comprehensive Professional Development</h4>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300">
              <li>Focus: Communication, Dressing, Public Speaking, Interview Skills</li>
              <li>Duration: 1 month</li>
              <li>Outcome: Job-readiness with personality polish</li>
              <li>Certification: Yes</li>
            </ul>
            
            <div>
              <h5 className="text-lg font-semibold mb-3 text-white">Key Benefits:</h5>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Develop confidence in professional environments</li>
                <li>Master verbal and non-verbal communication</li>
                <li>Learn industry-specific etiquette and protocols</li>
                <li>Build a professional personal brand</li>
                <li>Enhance interview performance and negotiation skills</li>
                <li>Accelerate career growth through soft skill development</li>
              </ul>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
         
              <Link href="/connect-with-us"><button className="bg-transparent border border-zinc-700 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors">
                Request Callback
              </button></Link>
            </div>
          </div>
        </AccordionItem>

        {/* Communication Skills */}
        <AccordionItem 
          title="Communication Excellence" 
          isOpen={openSection === 2}
          onClick={() => toggleSection(2)}
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Verbal Communication</h4>
                <p className="text-zinc-300 mb-4">
                  Develop articulate and persuasive speaking skills essential for workplace success, presentations, 
                  and team interactions.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>Clear and concise articulation</li>
                  <li>Active listening techniques</li>
                  <li>Persuasive speaking frameworks</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Written Communication</h4>
                <p className="text-zinc-300 mb-4">
                  Master professional business writing for emails, reports and digital communication across 
                  multiple workplace contexts.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>Email etiquette and best practices</li>
                  <li>Business document formatting</li>
                  <li>Concise and impactful writing</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Public Speaking</h4>
                <p className="text-zinc-300 mb-4">
                  Build confidence and capability in delivering compelling presentations and speaking in 
                  group settings with authority.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>Presentation structure and delivery</li>
                  <li>Managing speech anxiety</li>
                  <li>Engaging audience techniques</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Non-verbal Communication</h4>
                <p className="text-zinc-300 mb-4">
                  Understand and leverage body language, facial expressions and other non-verbal cues 
                  for more effective communication.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>Professional body language</li>
                  <li>Eye contact and gestures</li>
                  <li>Spatial awareness in workplace</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
         
              <Link href="/connect-with-us"><button className="bg-transparent border border-zinc-700 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors">
                Request Callback
              </button></Link>
            </div>
          </div>
        </AccordionItem>

        {/* Professional Image */}
        <AccordionItem 
          title="Professional Image" 
          isOpen={openSection === 3}
          onClick={() => toggleSection(3)}
        >
          <div className="space-y-6">
            <p className="text-xl text-zinc-300">
              Create a lasting positive impression in any professional environment
            </p>
            
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-400 mb-3">Personal Branding & Presentation</h4>
              <p className="text-zinc-300 mb-4">
                Learn to craft and maintain a professional image that aligns with your career goals and industry 
                expectations through appearance, behavior and digital presence.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                <li>Professional dress codes and industry-specific attire</li>
                <li>Grooming standards and personal hygiene best practices</li>
                <li>Digital presence optimization (LinkedIn, professional social media)</li>
                <li>Professional etiquette for various business settings</li>
                <li>Workplace behavior and cultural sensitivity</li>
                <li>First impression management and networking techniques</li>
              </ul>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
         
              <Link href="/connect-with-us"><button className="bg-transparent border border-zinc-700 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors">
                Request Callback
              </button></Link>
            </div>
          </div>
        </AccordionItem>

        {/* Interview Preparation */}
        <AccordionItem 
          title="Interview Mastery" 
          isOpen={openSection === 4}
          onClick={() => toggleSection(4)}
        >
          <div className="space-y-6">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-400 mb-3">Complete Interview Preparation</h4>
              <p className="text-zinc-300 mb-4">
                Comprehensive preparation for all stages of the interview process, from initial screening to 
                final rounds and salary negotiations.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                <li>Resume optimization and ATS compatibility</li>
                <li>Common and challenging interview questions with response strategies</li>
                <li>Behavioral interview techniques (STAR method)</li>
                <li>Mock interviews with personalized feedback</li>
                <li>Virtual interview skills and remote interview etiquette</li>
                <li>Salary negotiation and benefits discussion tactics</li>
                <li>Post-interview follow-up protocols</li>
              </ul>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
         
              <Link href="/connect-with-us"><button className="bg-transparent border border-zinc-700 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors">
                Request Callback
              </button></Link>
            </div>
          </div>
        </AccordionItem>

        {/* Professional Growth */}
        <AccordionItem 
          title="Professional Growth Strategies" 
          isOpen={openSection === 5}
          onClick={() => toggleSection(5)}
        >
          <div className="space-y-6">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-400 mb-3">Long-term Career Development</h4>
              <p className="text-zinc-300 mb-4">
                Develop strategies for continuous professional growth, workplace success and career advancement
                beyond the initial job placement.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                <li>Goal setting and career path planning</li>
                <li>Workplace conflict resolution techniques</li>
                <li>Emotional intelligence in professional settings</li>
                <li>Effective time management and productivity</li>
                <li>Networking and relationship building strategies</li>
                <li>Professional development through continuous learning</li>
                <li>Leadership skills and team collaboration</li>
              </ul>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
         
              <Link href="/connect-with-us"><button className="bg-transparent border border-zinc-700 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors">
                Request Callback
              </button></Link>
            </div>
          </div>
        </AccordionItem>
      </div>

      {/* Footer */}
      <FooterSection/>
    </div>
  );
};

export default CorporateGroomingAccordion;
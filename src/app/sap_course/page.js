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

const SAPCoursesAccordion = () => {
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Master It.</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-500">Master It. From First Lesson to Final Win.</h2>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full border-t border-zinc-800"></div>

      {/* Accordion Sections */}
      <div className="max-w-5xl mx-auto mb-[10rem]">
        {/* SAP Overview */}
        <AccordionItem 
          title="SAP Certification" 
          isOpen={openSection === 1}
          onClick={() => toggleSection(1)}
        >
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-emerald-500">SAP – 4 Modules</h4>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300">
              <li>SAP FICO, SAP MM, SAP SD and SAP PP/QM</li>
              <li>Duration: 3 + 1 month for each Module</li>
            </ul>
            
            <div>
              <h5 className="text-lg font-semibold mb-3 text-white">Key Features:</h5>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Hands-on training</li>
                <li>SAP S4Hana/ECC access from day 1</li>
                <li>Limited batch size for personal attention</li>
                <li>Real time projects</li>
                <li>Learn from Industry Experts with decades of experience</li>
                <li>Institute level Certification</li>
                <li>Free corporate grooming module</li>
              </ul>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <Link href="/#courses"><button className="bg-transparent border border-zinc-700 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors">
                Courses
              </button></Link>
              <Link href="/connect-with-us"><button className="bg-transparent border border-zinc-700 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors">
                Request Callback
              </button></Link>
             
            </div>
          </div>
        </AccordionItem>

        {/* Module Details */}
        <AccordionItem 
          title="Module Details" 
          isOpen={openSection === 2}
          onClick={() => toggleSection(2)}
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-emerald-500 mb-3">SAP FICO</h4>
                <p className="text-zinc-300 mb-4">
                  Financial Accounting & Controlling module covers general ledger, accounts payable/receivable, 
                  asset accounting and profitability analysis.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>Configure financial accounting structures</li>
                  <li>Set up cost centers and profit centers</li>
                  <li>Duration: 3 + 1 months</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-emerald-500 mb-3">SAP MM</h4>
                <p className="text-zinc-300 mb-4">
                  Materials Management covers procurement and inventory management processes with focus 
                  on purchasing and vendor management.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>Configure procurement cycles</li>
                  <li>Manage material master data</li>
                  <li>Duration: 3 + 1 months</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-emerald-500 mb-3">SAP SD</h4>
                <p className="text-zinc-300 mb-4">
                  Sales & Distribution focuses on sales order processing, pricing, billing and customer 
                  relationship management.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>Configure sales processes</li>
                  <li>Implement pricing strategies</li>
                  <li>Duration: 3 + 1 months</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-emerald-500 mb-3">SAP PP/QM</h4>
                <p className="text-zinc-300 mb-4">
                  Production Planning & Quality Management covers manufacturing execution and quality 
                  management processes including MRP.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>Configure production planning</li>
                  <li>Set up work centers and routing</li>
                  <li>Duration: 3 + 1 months</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/#courses"><button className="bg-transparent border border-zinc-700 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors">
                Courses
              </button></Link>
              <Link href="/connect-with-us"><button className="bg-transparent border border-zinc-700 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors">
                Request Callback
              </button></Link>
          
            </div>
          </div>
        </AccordionItem>

        {/* Project Implementation */}
        <AccordionItem 
          title="Project Implementation" 
          isOpen={openSection === 3}
          onClick={() => toggleSection(3)}
        >
          <div className="space-y-6">
            <p className="text-xl text-zinc-300">
              Project details and implementation
            </p>
            
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-emerald-500 mb-3">Real-time Projects</h4>
              <p className="text-zinc-300 mb-4">
                Work on industry-standard SAP implementation projects with guidance from experienced professionals.
                These projects closely mirror real-world scenarios you&apos;ll encounter in your SAP career.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                <li>End-to-end business process implementation</li>
                <li>Configuration and customization experience</li>
                <li>Integration between different SAP modules</li>
                <li>Testing and troubleshooting skills development</li>
              </ul>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/#courses"><button className="bg-transparent border border-zinc-700 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors">
                Courses
              </button></Link>
              <Link href="/connect-with-us"><button className="bg-transparent border border-zinc-700 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors">
                Request Callback
              </button></Link>
            
            </div>
          </div>
        </AccordionItem>

        {/* Additional Resources */}
        <AccordionItem 
          title="Corporate Grooming" 
          isOpen={openSection === 4}
          onClick={() => toggleSection(4)}
        >
          <div className="space-y-6">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-emerald-500 mb-3">Free Corporate Grooming Module</h4>
              <p className="text-zinc-300 mb-4">
                Enhance your professional presence, communication skills and workplace etiquette with our 
                comprehensive corporate grooming module, included free with every 3-month course enrollment.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                <li>Business communication & email etiquette</li>
                <li>Resume building & interview preparation</li>
                <li>Professional presentation skills</li>
                <li>Corporate dress code & workplace behavior</li>
                <li>Time management & work ethics</li>
              </ul>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/#courses"><button className="bg-transparent border border-zinc-700 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors">
                Courses
              </button></Link>
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

export default SAPCoursesAccordion;
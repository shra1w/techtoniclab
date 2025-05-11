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

const DataScienceAccordion = () => {
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Analyze.</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-500">From Data to Insights.</h2>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full border-t border-zinc-800"></div>

      {/* Accordion Sections */}
      <div className="max-w-5xl mx-auto mb-[10rem]">
        {/* Data Science Overview */}
        <AccordionItem 
          title="Data Science & Analytics" 
          isOpen={openSection === 1}
          onClick={() => toggleSection(1)}
        >
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-blue-500">Comprehensive Data Analytics Program</h4>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300">
              <li>Tools: Python, Tableau, Excel, Power BI, SQL, AI</li>
              <li>Duration: 3 months + 1 month corporate grooming</li>
              <li>Timeline: Flexible schedules available</li>
              <li>Projects: Real-world data case studies</li>
              <li>Certification: Yes</li>
            </ul>
            
            <div>
              <h5 className="text-lg font-semibold mb-3 text-white">Key Features:</h5>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Hands-on practical training in industry-relevant tools</li>
                <li>Comprehensive curriculum covering statistical analysis to machine learning</li>
                <li>Small batch sizes for personalized attention</li>
                <li>Portfolio development with real-world projects</li>
                <li>Learn from industry experts with proven track records</li>
                <li>Job placement assistance and interview preparation</li>
                <li>Free corporate grooming module included</li>
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

        {/* Technology Stack Details */}
        <AccordionItem 
          title="Technology Stack" 
          isOpen={openSection === 2}
          onClick={() => toggleSection(2)}
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-500 mb-3">Python & Libraries</h4>
                <p className="text-zinc-300 mb-4">
                  Master Python programming with essential data science libraries including NumPy, Pandas, 
                  Matplotlib, Seaborn, SciKit-Learn and TensorFlow/PyTorch.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>Data manipulation and cleaning</li>
                  <li>Statistical analysis and visualization</li>
                  <li>Machine learning model development</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-500 mb-3">Data Visualization</h4>
                <p className="text-zinc-300 mb-4">
                  Create compelling data stories and dashboards with industry-standard tools like Tableau,
                  Power BI and Python visualization libraries.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>Interactive dashboard creation</li>
                  <li>Data storytelling techniques</li>
                  <li>Business intelligence reporting</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-500 mb-3">SQL & Database Management</h4>
                <p className="text-zinc-300 mb-4">
                  Learn database design, management and advanced querying techniques to extract meaningful insights 
                  from structured data sources.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>Database design principles</li>
                  <li>Complex query optimization</li>
                  <li>Data integration and ETL processes</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-500 mb-3">AI & Machine Learning</h4>
                <p className="text-zinc-300 mb-4">
                  Explore advanced machine learning algorithms, model selection, evaluation techniques and 
                  practical AI implementation strategies.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>Supervised and unsupervised learning</li>
                  <li>Model evaluation and deployment</li>
                  <li>Introduction to deep learning</li>
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

        {/* Project Work */}
        <AccordionItem 
          title="Real-World Projects" 
          isOpen={openSection === 3}
          onClick={() => toggleSection(3)}
        >
          <div className="space-y-6">
            <p className="text-xl text-zinc-300">
              Build your portfolio with industry-relevant projects
            </p>
            
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-500 mb-3">Data Science Case Studies</h4>
              <p className="text-zinc-300 mb-4">
                Work on real-world data problems across multiple industries, developing end-to-end solutions that showcase 
                your analytical and technical skills to potential employers.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                <li>Predictive modeling for business outcomes</li>
                <li>Customer segmentation and market analysis</li>
                <li>Sentiment analysis and NLP applications</li>
                <li>Time series forecasting for business planning</li>
                <li>Recommendation system development</li>
                <li>Anomaly detection for fraud prevention</li>
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

        {/* Career Path */}
        <AccordionItem 
          title="Career Paths" 
          isOpen={openSection === 4}
          onClick={() => toggleSection(4)}
        >
          <div className="space-y-6">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-500 mb-3">Data Career Opportunities</h4>
              <p className="text-zinc-300 mb-4">
                Our comprehensive program prepares you for multiple high-demand roles in the data ecosystem, with
                personalized guidance to help you choose your ideal career path.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                <li>Data Analyst: Transform raw data into actionable business insights</li>
                <li>Data Scientist: Develop advanced statistical models to solve complex problems</li>
                <li>Business Intelligence Analyst: Create dashboards and reports for strategic decision-making</li>
                <li>Machine Learning Engineer: Build and deploy AI systems for business applications</li>
                <li>Data Visualization Specialist: Communicate data stories effectively to stakeholders</li>
                <li>AI Consultant: Advise organizations on implementing data-driven strategies</li>
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

        {/* Corporate Grooming */}
        <AccordionItem 
          title="Corporate Grooming" 
          isOpen={openSection === 5}
          onClick={() => toggleSection(5)}
        >
          <div className="space-y-6">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-500 mb-3">Free Corporate Grooming Module</h4>
              <p className="text-zinc-300 mb-4">
                Enhance your professional presence and job readiness with our comprehensive corporate grooming module, 
                included free with the 3-month data science program.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                <li>Technical interview preparation specific to data roles</li>
                <li>Data portfolio development and GitHub optimization</li>
                <li>Resume building with ATS-friendly templates for data professionals</li>
                <li>LinkedIn profile optimization for data science networking</li>
                <li>Effective communication of technical concepts to non-technical stakeholders</li>
                <li>Salary negotiation strategies for data science positions</li>
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

export default DataScienceAccordion;
"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import HeaderSection from '@/app/Components/HeaderSection';
import FooterSection from '@/app/Components/FooterSection';


const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-zinc-800">
      <div 
        className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 flex justify-between items-center cursor-pointer hover:bg-zinc-900/30 transition-colors"
        onClick={onClick}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white pr-4">
          {title}
        </h3>
        <div className="flex items-center flex-shrink-0">
          <span className="text-white mr-2 sm:mr-3 text-sm sm:text-base hidden sm:block">
            {isOpen ? "Close" : "Expand"}
          </span>
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
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
            className="overflow-hidden"
          >
            <div className="pb-6 sm:pb-8 px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function DataScienceLayout(){
  const [openSection, setOpenSection] = useState(1);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="w-full bg-black text-white min-h-screen">
      <HeaderSection/>
      
      {/* Hero Section */}
      <div className="w-full py-12 sm:py-16 md:py-20 lg:py-32 xl:py-[10rem] px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Data Science Course in Nagpur
          </h1>
          <h2 className="text-1xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-zinc-500 leading-tight">
            Become job-ready with the most in-demand skill in today's market with our Data Science Course at Techtonic Labs
          </h2>
        </div>
      </div>

      <div className="w-full border-t border-zinc-800"></div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
            The Job-Oriented Data Science Course in Nagpur has not only maintained its importance, but exponentially increased it in the past few years. It has consistently proved itself to be one of the top skills to provide high value across various sectors and industries. Hence, it has become one of the most favourable career paths in today's world.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
            The Data Science Course by Techtonic Labs is one of the best Data Science Institute in Nagpur you can get! It is designed meticulously, keeping the importance of practical application along with theoretical knowledge in mind.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
            At the end of our Industry-Level Data Science Training in Nagpur, you are well equipped with the necessary tools, skills and knowledge to kickstart your career in the most lucrative industries.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-semibold">
            So, what are you waiting for? Book a call with us NOW!
          </p>
          <div className="pt-2 sm:pt-4">
            <Link href="/connect-with-us" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base">
                Book a Call
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-zinc-800"></div>

      {/* Accordion Sections */}
      <div className="max-w-7xl mx-auto mb-16 sm:mb-20 md:mb-32 lg:mb-[10rem]">
        
        {/* Why Choose Techtonic Labs */}
        <AccordionItem 
          title="Why Choose Techtonic Labs Learning for Data Science Training in Nagpur?" 
          isOpen={openSection === 1}
          onClick={() => toggleSection(1)}
        >
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              Techtonic Labs is renowned for its Data Science Course as our curriculum is advanced and designed in such a way that it focuses on teaching the core concepts thoroughly, along with the practice of applied techniques and tools.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              We focus on building students' skills to the maximum, no matter their starting point.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              The curriculum includes everything you could need to up-level your career. It focuses on practical application much more than teaching theory. We make sure that the students get the maximum benefit of the course in its duration.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              Moreover, we have leading experts in the field teaching you each subject. Our instructors are highly experienced and have actual industrial experience too. Our team makes sure that each student gains substantial skills being able to get into their desired roles.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              Techtonic Labs provides one of the best Data Science Courses in Nagpur. Call or visit us to get a free counselling session.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border border-zinc-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  View All Courses
                </button>
              </Link>
              <Link href="/connect-with-us" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Get Free Counselling
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>

        {/* Key Features */}
        <AccordionItem 
          title="Key Features Of Our Data Science Certification Course in Nagpur" 
          isOpen={openSection === 2}
          onClick={() => toggleSection(2)}
        >
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-zinc-300 text-sm sm:text-base">
                  You get a curriculum that is up-to-date with the latest tools and technology that is actually used in the current industries
                </p>
              </div>
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-zinc-300 text-sm sm:text-base">
                  Industry-relevant certification
                </p>
              </div>
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-zinc-300 text-sm sm:text-base">
                  The syllabus is comprehensive - from statistics to machine learning, visualization and application
                </p>
              </div>
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-zinc-300 text-sm sm:text-base">
                  Working on real projects and upgrading not only skills but also your resume
                </p>
              </div>
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-zinc-300 text-sm sm:text-base">
                  You get free career guidance, mentorship and placement-support
                </p>
              </div>
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-zinc-300 text-sm sm:text-base">
                  The classes are hybrid - online and offline, so students can learn in a way that suits them the best
                </p>
              </div>
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-zinc-300 text-sm sm:text-base">
                  Small sized batches ensure that each student gets full attention from instructors
                </p>
              </div>
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-zinc-300 text-sm sm:text-base">
                  A FREE Corporate Grooming Module is available with the course that equips you with real-world corporate skills
                </p>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border border-zinc-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  View All Courses
                </button>
              </Link>
              <Link href="/connect-with-us" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>

        {/* What is Data Science */}
        <AccordionItem 
          title="What exactly is Data Science?" 
          isOpen={openSection === 3}
          onClick={() => toggleSection(3)}
        >
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              Almost every industry runs on data and its insights. Every single business can be expanded significantly if its data is thoroughly taken into account.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              So, how do you know which data to analyze and how?
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              That is where Data Science comes in. It is the process of collecting data from reliable sources, and then analyzing it to interpret valuable insights. These insights are then used to build predictive models, and more importantly make important decisions based on them.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              Although the entire process can seem quite comprehensive or long, it is extremely well-put in our Data Science Course which has been well-curated to fit all the steps thoroughly.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              You get equipped with a solid foundation in data analysis, machine learning and data visualization, making you a competent individual to secure a role in the sector in a short amount of time.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border border-zinc-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  View All Courses
                </button>
              </Link>
              <Link href="/connect-with-us" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>

        {/* Who Should Enroll */}
        <AccordionItem 
          title="Who Should Enroll in our Professional Data Science Course in Nagpur?" 
          isOpen={openSection === 4}
          onClick={() => toggleSection(4)}
        >
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              Our course is designed in such a way that it suits the needs of beginners as well as benefits professionals.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              Data Science is a really versatile skill and it welcomes people from tech as well as non-tech backgrounds. You don't require prior data science experience to take this course, we teach you everything starting with the basics to advanced skills.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-semibold">
              Our course is perfect for:
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-zinc-300 text-sm sm:text-base">
                  Graduates and beginners who are looking to start their career in this field
                </p>
              </div>
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-zinc-300 text-sm sm:text-base">
                  Working professionals looking to transition or upskill in their careers for better roles and prospects
                </p>
              </div>
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-zinc-300 text-sm sm:text-base">
                  People working in the IT sector or engineers wanting to improve their skillset
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              The course has steady momentum and starts with basics, gradually moving to advanced topics, making it accessible to a wide range of people.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border border-zinc-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  View All Courses
                </button>
              </Link>
              <Link href="/connect-with-us" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>

        {/* Course Stack */}
        <AccordionItem 
          title="Our Data Science Course Stack" 
          isOpen={openSection === 5}
          onClick={() => toggleSection(5)}
        >
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Foundations */}
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-3">
                  Foundations of Data Science
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base mb-3">
                  This module includes gaining a thorough understanding of data science and its applications in the industry. This includes Python fundamentals, statistics and data analysis, SQL, data manipulation using NumPy, and Pandas, Matplotlib and Seaborn, etc.
                </p>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Data fundamentals, cleaning and manipulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Statistical analysis and Exploratory Data Analysis techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Data Visualization</span>
                  </li>
                </ul>
              </div>

              {/* Machine Learning */}
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-3">
                  Machine Learning
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base mb-3">
                  The machine learning concepts are taught starting with Supervised and Unsupervised learning. Other concepts taught include model evaluation, hyperparameter tuning, ensemble methods, time series analysis and forecasting.
                </p>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Supervised learning (Regression and Classification) and Unsupervised learning (Clustering and Dimensionality Reduction)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Ensemble methods include Random Forest, XGBoost, LightGBM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Feature engineering and selection techniques</span>
                  </li>
                </ul>
              </div>

              {/* Advanced Topics */}
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-3">
                  Advanced Topics and Deep Learning
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base mb-3">
                  The advanced tools and techniques of data science increase your skillset and make you a valuable asset for industries. They include Deep Learning, Natural Language Processing(NLP) basics, CNN, Model Deployment with Flask/FastAPI, MLOps and a Capstone Project development.
                </p>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Understanding neural networks and architecture for Deep Learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Computer Vision fundamentals with CNN, and MLOps including Docker, Git and CI/CD pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>A great quality Capstone Project development</span>
                  </li>
                </ul>
              </div>

              {/* Corporate Grooming */}
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-3">
                  Corporate Grooming
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base mb-3">
                  Our Corporate Grooming Module is FREE with the given Data Science Course. It is a month-long training module that prepares you for working in the corporate world and navigating well in your career. Our mentors and instructors are highly qualified professionals who prepare you well for the real-world working environments.
                </p>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Interview preparation - We help you crack your ideal interviews with proper training and strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Portfolio Development - We help you optimize your Github profile and projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>LinkedIn profile - We help you optimize your LinkedIn profiles for networking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Communication skills - We teach you strategies to explain tech concepts to stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Salary Negotiation Strategies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border border-zinc-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  View All Courses
                </button>
              </Link>
              <Link href="/connect-with-us" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>

        {/* Build Real World Projects */}
        <AccordionItem 
          title="Build Real World Projects And Enhance Your Portfolio" 
          isOpen={openSection === 6}
          onClick={() => toggleSection(6)}
        >
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              Industries value experience. It is better to show than tell.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              Our course focuses on practical application and practice more than the understanding of theoretical concepts. You get to work on real-world data and build projects that show the company that you are ready for working in actual industrial environments.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              We work on projects that not only strengthens your skills, but also enhances your portfolio. It gives you confidence in your abilities which makes you even more desirable for jobs.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-semibold">
              You can build projects like the following:
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Customer Churn Prediction
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base mb-2">
                  Build a machine learning model that helps businesses predict which customers are likely to stop using the product or service they provide.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base">
                  It helps businesses retain their customers and hence maintain the profit ratio.
                </p>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Sales Forecasting
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base mb-2">
                  Create interactive dashboards by using ARIMA and Prophet models to forecast time series.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base">
                  It gives businesses information to manage their inventories, staffing and budgeting etc.
                </p>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Sentiment Analysis System
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base mb-2">
                  Develop NLP pipelines to analyze text like comments and customer reviews that automatically detect the sentiments behind them.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base">
                  It drastically helps with feedback analysis and social media monitoring. This is crucial for maintaining a brand's reputation.
                </p>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Recommendation Engine
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base mb-2">
                  Build a collaborative filtering system that helps you recommend products and services efficiently.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base">
                  This enhances engagement dramatically and hence boosts sales.
                </p>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Image Classification Model
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base mb-2">
                  Develop a model using CNN to recognize images and objects inside them.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base">
                  This helps in facial recognition, medical imaging, etc.
                </p>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  End-To-End ML Pipeline
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base mb-2">
                  Create a full machine learning pipeline from the beginning and show companies your range of skills.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base">
                  This is highly useful in many corporations and is used on a regular basis for a wide range of work.
                </p>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border border-zinc-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  View All Courses
                </button>
              </Link>
              <Link href="/connect-with-us" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>

        {/* Career Prospects */}
        <AccordionItem 
          title="Career Prospects After The Course" 
          isOpen={openSection === 7}
          onClick={() => toggleSection(7)}
        >
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              The field of Data Science has many roles that are well-paying and well-respected. We help you with providing placement support according to your performance in the course.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-semibold">
              You can get into roles such as:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  Data Scientist
                </h4>
              </div>
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  Data Analyst
                </h4>
              </div>
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  Machine Learning Engineer
                </h4>
              </div>
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  AI Engineer
                </h4>
              </div>
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  Data Engineer
                </h4>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border border-zinc-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  View All Courses
                </button>
              </Link>
              <Link href="/connect-with-us" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>

        {/* FAQs */}
        <AccordionItem 
          title="FAQs" 
          isOpen={openSection === 8}
          onClick={() => toggleSection(8)}
        >
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                Do I need prior data science knowledge or experience before enrolling in this course?
              </h4>
              <p className="text-zinc-400 text-sm sm:text-base">
                Not at all! You can enroll as a complete beginner as our course teaches the basics first and gradually advances deeper into the subject.
              </p>
            </div>

            <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                How long is the duration of this course?
              </h4>
              <p className="text-zinc-400 text-sm sm:text-base">
                The course lasts for 3 months and is available in both online and offline ways. It also includes one month of a FREE corporate grooming module.
              </p>
            </div>

            <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                Do you need a technical background to enter this field of data science?
              </h4>
              <p className="text-zinc-400 text-sm sm:text-base">
                Data science does not require a technical background. People enter this field with various backgrounds and excel in their careers. Our course makes it easier for people from diverse fields to get sufficient skills in the respective subject.
              </p>
            </div>

            <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                Does the course provide certification?
              </h4>
              <p className="text-zinc-400 text-sm sm:text-base">
                Yes! The course provides valid certification at the end of it. Our certificate is recognized among various industries.
              </p>
            </div>

            <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                What is the fee structure?
              </h4>
              <p className="text-zinc-400 text-sm sm:text-base">
                Our courses are provided at very affordable prices! Please contact us to know more about the details.
              </p>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border border-zinc-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  View All Courses
                </button>
              </Link>
              <Link href="/connect-with-us" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>
      </div>

      <FooterSection/>
    </div>
  );
};

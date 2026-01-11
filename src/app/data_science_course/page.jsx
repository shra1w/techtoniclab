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

const DataScienceCourse = () => {
  const [openSection, setOpenSection] = useState(1);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="w-full bg-black text-white min-h-screen">
      <HeaderSection/>
      
      {/* Hero Section - Fully Responsive */}
      <div className="w-full py-12 sm:py-16 md:py-20 lg:py-32 xl:py-[10rem] px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Data Science.
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-500 leading-tight">
            Transform Data into Decisions.
          </h2>
        </div>
      </div>

      <div className="w-full border-t border-zinc-800"></div>

      {/* Accordion Sections - Responsive Container */}
      <div className="max-w-7xl mx-auto mb-16 sm:mb-20 md:mb-32 lg:mb-[10rem]">
        
        {/* Course Overview */}
        <AccordionItem 
          title="Course Overview" 
          isOpen={openSection === 1}
          onClick={() => toggleSection(1)}
        >
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              Master the complete data science lifecycle from data collection to model deployment
            </p>
            
            <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
              <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-3 sm:mb-4">
                Program Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-zinc-300 text-sm sm:text-base">
                <div>
                  <p className="font-semibold text-white mb-2">Duration</p>
                  <p>3 months intensive training + 1 month corporate grooming</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Format</p>
                  <p>Hybrid (Online & Offline options available)</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Batch Size</p>
                  <p>Limited to 15-20 students for personalized attention</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Certification</p>
                  <p>Industry-recognized certificate upon completion</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
              <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-3">
                What You'll Learn
              </h4>
              <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-zinc-300 text-sm sm:text-base">
                <li>Statistical analysis and probability theory for data science</li>
                <li>Python programming with NumPy, Pandas, and SciPy</li>
                <li>Data visualization using Matplotlib, Seaborn, and Plotly</li>
                <li>Machine learning algorithms (supervised and unsupervised)</li>
                <li>Deep learning fundamentals with TensorFlow and PyTorch</li>
                <li>SQL and database management for data extraction</li>
                <li>Big data tools: Hadoop, Spark, and distributed computing</li>
                <li>Model deployment and MLOps practices</li>
              </ul>
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

        {/* Curriculum */}
        <AccordionItem 
          title="Curriculum & Topics" 
          isOpen={openSection === 2}
          onClick={() => toggleSection(2)}
        >
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Month 1 */}
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-3">
                  Month 1: Foundations
                </h4>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Python fundamentals and advanced concepts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Statistics and probability for data science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Data manipulation with NumPy and Pandas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Exploratory Data Analysis (EDA) techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Data visualization with Matplotlib and Seaborn</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>SQL for data extraction and manipulation</span>
                  </li>
                </ul>
              </div>

              {/* Month 2 */}
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-3">
                  Month 2: Machine Learning
                </h4>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Supervised learning: Regression and Classification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Unsupervised learning: Clustering and Dimensionality Reduction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Model evaluation and hyperparameter tuning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Ensemble methods: Random Forest, XGBoost, LightGBM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Feature engineering and selection techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Time series analysis and forecasting</span>
                  </li>
                </ul>
              </div>

              {/* Month 3 */}
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-3">
                  Month 3: Advanced Topics
                </h4>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Deep learning: Neural networks and architectures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Natural Language Processing (NLP) basics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Computer Vision fundamentals with CNN</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Model deployment with Flask/FastAPI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>MLOps: Docker, Git, and CI/CD pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Capstone project development</span>
                  </li>
                </ul>
              </div>

              {/* Month 4 */}
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-3">
                  Month 4: Corporate Grooming
                </h4>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Resume building for data science roles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Portfolio development on GitHub</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Technical interview preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Mock interviews and coding challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>LinkedIn optimization and personal branding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    <span>Job placement assistance</span>
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

        {/* Tools & Technologies */}
        <AccordionItem 
          title="Tools & Technologies" 
          isOpen={openSection === 3}
          onClick={() => toggleSection(3)}
        >
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              Master industry-standard tools used by top data science teams
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-base sm:text-lg font-semibold text-blue-500 mb-3">
                  Programming
                </h4>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li>• Python 3.x</li>
                  <li>• R (basics)</li>
                  <li>• SQL</li>
                  <li>• Git & GitHub</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-base sm:text-lg font-semibold text-blue-500 mb-3">
                  Data Processing
                </h4>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li>• NumPy</li>
                  <li>• Pandas</li>
                  <li>• SciPy</li>
                  <li>• Apache Spark</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-base sm:text-lg font-semibold text-blue-500 mb-3">
                  Visualization
                </h4>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li>• Matplotlib</li>
                  <li>• Seaborn</li>
                  <li>• Plotly</li>
                  <li>• Tableau</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-base sm:text-lg font-semibold text-blue-500 mb-3">
                  Machine Learning
                </h4>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li>• Scikit-learn</li>
                  <li>• XGBoost</li>
                  <li>• LightGBM</li>
                  <li>• CatBoost</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-base sm:text-lg font-semibold text-blue-500 mb-3">
                  Deep Learning
                </h4>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li>• TensorFlow</li>
                  <li>• Keras</li>
                  <li>• PyTorch</li>
                  <li>• Hugging Face</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
                <h4 className="text-base sm:text-lg font-semibold text-blue-500 mb-3">
                  Deployment
                </h4>
                <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  <li>• Flask/FastAPI</li>
                  <li>• Docker</li>
                  <li>• AWS/Azure</li>
                  <li>• Streamlit</li>
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

        {/* Projects & Portfolio */}
        <AccordionItem 
          title="Projects & Portfolio" 
          isOpen={openSection === 4}
          onClick={() => toggleSection(4)}
        >
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              Build 6+ real-world projects to showcase your data science skills
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Customer Churn Prediction
                </h4>
                <p className="text-zinc-400 mb-3 text-sm sm:text-base">
                  Build a machine learning model to predict customer churn using classification algorithms
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">Python</span>
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">Scikit-learn</span>
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">XGBoost</span>
                </div>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Sales Forecasting Dashboard
                </h4>
                <p className="text-zinc-400 mb-3 text-sm sm:text-base">
                  Create an interactive dashboard for time series forecasting using ARIMA and Prophet models
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">Time Series</span>
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">Tableau</span>
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">Prophet</span>
                </div>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Sentiment Analysis System
                </h4>
                <p className="text-zinc-400 mb-3 text-sm sm:text-base">
                  Develop an NLP pipeline to analyze customer reviews and social media sentiment
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">NLP</span>
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">NLTK</span>
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">Transformers</span>
                </div>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Recommendation Engine
                </h4>
                <p className="text-zinc-400 mb-3 text-sm sm:text-base">
                  Build a collaborative filtering system for product recommendations
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">Collaborative Filtering</span>
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">Matrix Factorization</span>
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">Flask</span>
                </div>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Image Classification Model
                </h4>
                <p className="text-zinc-400 mb-3 text-sm sm:text-base">
                  Develop a CNN model for image classification using transfer learning
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">Deep Learning</span>
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">TensorFlow</span>
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">CNN</span>
                </div>
              </div>

              <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  End-to-End ML Pipeline
                </h4>
                <p className="text-zinc-400 mb-3 text-sm sm:text-base">
                  Create a complete ML pipeline from data ingestion to model deployment with CI/CD
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">MLOps</span>
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">Docker</span>
                  <span className="text-xs bg-zinc-800 px-2 sm:px-3 py-1 rounded">AWS</span>
                </div>
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

        {/* Career Outcomes */}
        <AccordionItem 
          title="Career Outcomes" 
          isOpen={openSection === 5}
          onClick={() => toggleSection(5)}
        >
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
              <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-3 sm:mb-4">
                Job Roles You Can Pursue
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h5 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Data Scientist
                  </h5>
                  <p className="text-zinc-400 text-xs sm:text-sm mb-2">
                    Develop predictive models and advanced analytics solutions
                  </p>
                  <p className="text-blue-400 text-xs sm:text-sm">Avg. Salary: ₹8-15 LPA</p>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Machine Learning Engineer
                  </h5>
                  <p className="text-zinc-400 text-xs sm:text-sm mb-2">
                    Design and deploy ML systems at scale
                  </p>
                  <p className="text-blue-400 text-xs sm:text-sm">Avg. Salary: ₹10-18 LPA</p>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Data Analyst
                  </h5>
                  <p className="text-zinc-400 text-xs sm:text-sm mb-2">
                    Transform data into actionable business insights
                  </p>
                  <p className="text-blue-400 text-xs sm:text-sm">Avg. Salary: ₹6-10 LPA</p>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Business Intelligence Analyst
                  </h5>
                  <p className="text-zinc-400 text-xs sm:text-sm mb-2">
                    Create dashboards and reporting solutions
                  </p>
                  <p className="text-blue-400 text-xs sm:text-sm">Avg. Salary: ₹7-12 LPA</p>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    AI Engineer
                  </h5>
                  <p className="text-zinc-400 text-xs sm:text-sm mb-2">
                    Build intelligent systems using deep learning
                  </p>
                  <p className="text-blue-400 text-xs sm:text-sm">Avg. Salary: ₹12-20 LPA</p>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Data Engineer
                  </h5>
                  <p className="text-zinc-400 text-xs sm:text-sm mb-2">
                    Design and maintain data infrastructure
                  </p>
                  <p className="text-blue-400 text-xs sm:text-sm">Avg. Salary: ₹9-16 LPA</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg">
              <h4 className="text-lg sm:text-xl font-semibold text-blue-500 mb-3 sm:mb-4">
                Our Placement Support
              </h4>
              <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-zinc-300 text-sm sm:text-base">
                <li>Dedicated placement cell with industry connections</li>
                <li>Resume review and optimization by HR experts</li>
                <li>Mock interviews with data science professionals</li>
                <li>Direct referrals to partner companies</li>
                <li>Interview preparation workshops</li>
                <li>Salary negotiation guidance</li>
                <li>Lifetime career support and mentorship</li>
              </ul>
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
      </div>

      <FooterSection/>
    </div>
  );
};

export default DataScienceCourse;
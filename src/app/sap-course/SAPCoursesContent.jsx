"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderSection from '../Components/HeaderSection';
import FooterSection from '../Components/FooterSection';
import Link from 'next/link';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-zinc-800">
      <div
        className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 flex justify-between items-center cursor-pointer gap-4"
        onClick={onClick}
      >
        <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-tight">
          {title}
        </h3>
        <div className="flex items-center flex-shrink-0">
          <span className="text-white mr-2 sm:mr-3 text-sm sm:text-base hidden xs:inline">
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
            <div className="pb-8 px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SAPCoursesContent = () => {
  const [openSection, setOpenSection] = useState(1);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="w-full bg-black text-white min-h-screen">
      <HeaderSection />

      {/* Hero Section - H1 */}
      <section className="w-full py-16  sm:py-20 md:py-[10rem] px-10 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto pt-14">
          <h1 className="text-4xl sm:text-5xl text-center md:text-7xl font-bold text-white mb-4 leading-tight">
            Best SAP Course in Nagpur
          </h1>
          <h2 className="text-xl sm:text-xl md:text-3xl font-bold text-center text-zinc-500 leading-snug">
            Advance your career in IT with the Professional SAP Course in Nagpur designed and taught by leading experts.
          </h2>
          <div className="mt-8 space-y-4 text-zinc-300 text-base flex flex-col items-center  sm:text-lg leading-relaxed">
            <p className=' text-center'>
              Techtonic Lab is one of the Best SAP Institute in Nagpur which provides Job-Oriented SAP Training in Nagpur.
            </p>
            <p className=' text-center'>
              IT industries nowadays are deeply complex and need excellent services to manage operations in a company. They also need to take heavy data-driven decisions that not only maintain the company&apos;s order, but also advance its growth.
            </p>
            <p className=' text-center'>
              That&apos;s where SAP comes in. SAP, standing for Systems, Applications and Products in Data Processing, is one of the world&apos;s leading enterprise resource planning (ERP) systems of software.
            </p>
            <p className=' text-center'>
              Techtonic lab offers the Advanced SAP Course in Nagpur which teaches you basics to advanced methods, covering everything essential to make you job-ready. Whether you are a beginner trying to get into industry, a fresh graduate looking for work, or a working professional looking to upskill in the industry; we have got you covered with Industry-Leading SAP Training in Nagpur.
            </p>
            <p className="text-emerald-500 font-semibold">
              Book a session NOW and start your SAP journey with High-Demand SAP Course in Nagpur at Techtonic Lab.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Line */}
      <div className="w-full border-t border-zinc-800"></div>

      {/* Accordion Sections */}
      <div className="max-w-5xl mx-auto mb-16 sm:mb-20 md:mb-[10rem] px-2 sm:px-4">

        {/* H2 - What is Advanced SAP Course */}
        <AccordionItem
          title="What is Advanced SAP Course in Nagpur and why learn it?"
          isOpen={openSection === 1}
          onClick={() => toggleSection(1)}
        >
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              SAP is a software system that manages business operations effectively in many ways. It helps companies with major areas such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300 text-base sm:text-lg">
              <li>Finance and Accounting</li>
              <li>Supply Chain and Materials Management</li>
              <li>Business Intelligence and Analytics</li>
              <li>Human Capital and Management</li>
              <li>Sales Distribution</li>
              <li>S/4 HANA</li>
            </ul>

            <div className="pt-6 flex flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Courses
                </button>
              </Link>
              <Link href="/connect-with-us">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Request Callback
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>

        {/* H2 - Why choose to learn */}
        <AccordionItem
          title="Why choose to learn Premier SAP Course in Nagpur?"
          isOpen={openSection === 2}
          onClick={() => toggleSection(2)}
        >
          <div className="space-y-6">
            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
              <p>
                SAP is a multi-use skill used among many popular industries. It is also one of the most in-demand skills in the IT industry currently.
              </p>
              <p>
                The demand of professionals who are capable with SAP skills has increased drastically in recent years. As the expansion of the IT sector is taking place at a much higher rate than ever before, it is a smart decision to learn a skill with such high leverage.
              </p>
              <p>
                It is important as it combines multiple important systems into a single one. SAP increases the efficiency of business and helps them understand real-time data. It is also globally used and across many industries, making it one of the versatile skills to learn.
              </p>
              <p>
                Hence, taking a SAP course can lead you into your dream job roles, help you get promoted or even apply your skills globally. It is a high paying skill and will lead to better jobs.
              </p>
            </div>

            {/* H3 - Why enroll */}
            <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
              <h4 className="text-lg sm:text-xl font-semibold text-emerald-500 mb-4">
                Why enroll in our Leading SAP Training in Nagpur?
              </h4>

              <div className="space-y-5">
                <div>
                  <h5 className="text-base sm:text-lg font-semibold text-white mb-2">Highly experienced teachers</h5>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    At Techtonic Lab we have expert trainers who teach you the concepts effectively and make sure you are well-equipped. Our teachers have real-world experience in the industry and hence can help you develop your skills in a very short time.
                  </p>
                </div>

                <div>
                  <h5 className="text-base sm:text-lg font-semibold text-white mb-2">Well-crafted Syllabus</h5>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    Our syllabus is thorough and it helps you understand the foundations of SAP, gradually advancing towards more complex aspects of it. It is designed to suit the needs of beginners as well as professionals.
                  </p>
                </div>

                <div>
                  <h5 className="text-base sm:text-lg font-semibold text-white mb-2">Practical training</h5>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    Our teaching methods majorly focus on skill-development using hands-on training. We ensure you get to practice real business scenarios, handle ERP software as well as SAP tools efficiently. Our main objective is to focus on practical training instead of theoretical knowledge.
                  </p>
                </div>

                <div>
                  <h5 className="text-base sm:text-lg font-semibold text-white mb-2">Short and precise course</h5>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    Our course lasts for three months, which is designed such that you learn all the desired skills in a short time without compromising deep understanding of the field. Take a look at our modules to get the detailed information of the skills we teach.
                  </p>
                </div>

                <div>
                  <h5 className="text-base sm:text-lg font-semibold text-white mb-2">FREE corporate Grooming</h5>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    You get a month-long FREE corporate grooming module with this course. This module helps you become competent for the real industry environment. There are a lot of soft skills that are required to excel in a job in this generation. We also provide placement support and mentorship.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Courses
                </button>
              </Link>
              <Link href="/connect-with-us">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Request Callback
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>

        {/* H3 - Key Features */}
        <AccordionItem
          title="Key Features of Our Career-Focused SAP Course in Nagpur"
          isOpen={openSection === 3}
          onClick={() => toggleSection(3)}
        >
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Our curriculum is up-to-date with the current technology as well as the existing demands of the industry. It is meticulously designed and has all the essentials required to excel in the workplace.
            </p>

            <ul className="list-disc pl-5 space-y-3 text-zinc-300 text-base sm:text-lg">
              <li>We have highly experienced trainers and they offer mentorship and support to the students.</li>
              <li>You get FREE corporate grooming and placement support.</li>
              <li>Small sized batches ensure that each student learns effectively and gets attention from the teachers.</li>
              <li>Industry relevant certification is provided at the end of the course.</li>
              <li>Upskilling by building real projects and focusing on hands-on training.</li>
              <li>We offer online and offline, both options for classes which increases their accessibility.</li>
            </ul>

            <div className="pt-4 flex flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Courses
                </button>
              </Link>
              <Link href="/connect-with-us">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Request Callback
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>

        {/* H3 - Our SAP Modules */}
        <AccordionItem
          title="Our SAP Modules"
          isOpen={openSection === 4}
          onClick={() => toggleSection(4)}
        >
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold text-emerald-500 mb-3">1. SAP FICO</h4>
                <p className="text-zinc-300 mb-4 text-sm sm:text-base leading-relaxed">
                  Financial Accounting and Controlling is one of the primary needs in any business. We teach you how to use SAP for managing general ledgers, payable/receivable accounts, profitability analysis, asset accounting etc.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400 text-sm sm:text-base">
                  <li>Learn financial accounting structures</li>
                  <li>Set up cost and profit centres</li>
                  <li>Financial reporting and analysis using SAP</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold text-emerald-500 mb-3">2. SAP MM</h4>
                <p className="text-zinc-300 mb-4 text-sm sm:text-base leading-relaxed">
                  Materials Management deals with procuring various materials and managing inventory. Our course teaches you major skills like purchasing and vendor management. It also includes inventory control and invoice verification.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400 text-sm sm:text-base">
                  <li>Learn procurement processes and vendor management</li>
                  <li>Manage material master data</li>
                  <li>Inventory management and stock valuation</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold text-emerald-500 mb-3">3. SAP SD</h4>
                <p className="text-zinc-300 mb-4 text-sm sm:text-base leading-relaxed">
                  Sales and Distribution is the key aspect of SAP. It deals with customer orders and sales processes. It focuses on sales order processing, billing and managing relationships with customers.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400 text-sm sm:text-base">
                  <li>Learn sales processes in detail</li>
                  <li>Order management and billing</li>
                  <li>Reporting and analytics</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold text-emerald-500 mb-3">4. SAP PP/QM</h4>
                <p className="text-zinc-300 mb-4 text-sm sm:text-base leading-relaxed">
                  Production Planning and Quality Management involves manufacturing processes and maintaining quality. It also manages processes like MRP.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400 text-sm sm:text-base">
                  <li>Learn production planning and quality management processes</li>
                  <li>Set up work centres and routing</li>
                  <li>Demand management, capacity planning and scheduling</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Courses
                </button>
              </Link>
              <Link href="/connect-with-us">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Request Callback
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>

        {/* H3 - Build real projects */}
        <AccordionItem
          title="Build real projects to solidify skills"
          isOpen={openSection === 5}
          onClick={() => toggleSection(5)}
        >
          <div className="space-y-6">
            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
              <p>
                In our course you build real-world projects, with the guidance of our trainers, to help you strengthen your skills. It not only makes you efficient in the work itself, but also enhances your resume.
              </p>
              <p>
                This helps you seem suitable to companies and helps you get hired faster.
              </p>
              <p className="font-semibold text-white">With us you can work on numerous projects like:</p>
            </div>

            <div className="space-y-4">
              <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
                <h4 className="text-base sm:text-lg font-semibold text-emerald-500 mb-2">
                  End-to-end business process implementation
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Learn how business complete business cycles work, from beginning to end. This helps you understand real-world operations of a company in detail.
                </p>
              </div>

              <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
                <h4 className="text-base sm:text-lg font-semibold text-emerald-500 mb-2">
                  Configuration and customization experience
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  With the help of this project you will understand how to customize SAP settings, define organizational structures as well as adjust various parameters tailored to specific business demands.
                </p>
              </div>

              <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
                <h4 className="text-base sm:text-lg font-semibold text-emerald-500 mb-2">
                  Integration between different SAP modules
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  As you know SAP integrates multiple systems together. Here, you will learn how various areas like FICO, MM, PP, QM, SD are integrated with each other in real corporate scenarios.
                </p>
              </div>

              <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
                <h4 className="text-base sm:text-lg font-semibold text-emerald-500 mb-2">
                  Testing and troubleshooting skill development
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  This will teach you how to handle real business challenges. It helps you enhance your critical thinking skills, apply your knowledge in the right manner and also helps you get prepared for corporate emergencies.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Courses
                </button>
              </Link>
              <Link href="/connect-with-us">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Request Callback
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>

        {/* H3 - Career Opportunities */}
        <AccordionItem
          title="Career Opportunities"
          isOpen={openSection === 6}
          onClick={() => toggleSection(6)}
        >
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              After SAP training, you can go into the industry in many job roles such as:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-zinc-300 text-base sm:text-lg">
              <li>SAP FICO consultant</li>
              <li>SAP MM consultant</li>
              <li>SAP PP and QM consultant</li>
              <li>SAP SD consultant</li>
              <li>SAP Project Manager</li>
              <li>Business Analyst in SAP projects</li>
            </ul>

            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
              <p>
                SAP skills are highly flexible, making you fit for multiple sectors. They help you get into high-leverage industries and these roles have lucrative salaries.
              </p>
              <p>
                And these skills are useful globally, not just in India.
              </p>
              <p className="text-emerald-500 font-semibold">
                So hurry up and book a call with us RIGHT NOW before the seats for the next batch fill up!
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Courses
                </button>
              </Link>
              <Link href="/connect-with-us">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Request Callback
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>

        {/* H4 - FAQs */}
        <AccordionItem
          title="FAQs"
          isOpen={openSection === 7}
          onClick={() => toggleSection(7)}
        >
          <div className="space-y-4">
            <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-emerald-500 mb-2">
                1. What is SAP and why is it important?
              </h4>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                SAP (Systems, Applications and Products in Data Processing) is a system of ERP software that helps in a company&apos;s operations and management. It is a highly sought after skill and its industry demand is huge.
              </p>
            </div>

            <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-emerald-500 mb-2">
                2. Is the training mode online or offline?
              </h4>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                We offer our courses in both online and offline mode, making it accessible for as many people as possible.
              </p>
            </div>

            <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-emerald-500 mb-2">
                3. Do you provide proper certification?
              </h4>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Absolutely! We provide a valid certificate after the course is completed which is accepted by many highly-reputed companies.
              </p>
            </div>

            <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-emerald-500 mb-2">
                4. What is the duration of the course?
              </h4>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                The course lasts three months which includes learning key concepts as well as practical training. A one month corporate grooming course is also FREE with this course.
              </p>
            </div>

            <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-emerald-500 mb-2">
                5. Do you provide placement assistance?
              </h4>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Yes, our experts help you get your ideal roles and help you boost your resumes, profiles and most importantly performance of skills.
              </p>
            </div>

            <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-emerald-500 mb-2">
                6. Which SAP module is better for beginners?
              </h4>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Although all our modules are beginner-friendly, SAP MM and FICO might be more suitable for beginners in general.
              </p>
            </div>

            <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-emerald-500 mb-2">
                7. What kind of industries use SAP?
              </h4>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Being competent in SAP skills brings you numerous opportunities whether you are a beginner or already working, as it is applicable among the most lucrative sectors such as IT and Tech, Manufacturing etc. It can be the best investment in your career advancement.
              </p>
            </div>

            <div className="bg-zinc-900 p-5 sm:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-emerald-500 mb-2">
                8. What is the fee structure of the course?
              </h4>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                We provide one of the most thorough courses at extremely affordable prices. For more information, please contact or visit us anytime!
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-3 sm:gap-4">
              <Link href="/#courses">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Courses
                </button>
              </Link>
              <Link href="/connect-with-us">
                <button className="bg-transparent border border-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-zinc-800 transition-colors text-sm sm:text-base">
                  Request Callback
                </button>
              </Link>
            </div>
          </div>
        </AccordionItem>
      </div>

      <FooterSection />
    </div>
  );
};

export default SAPCoursesContent;
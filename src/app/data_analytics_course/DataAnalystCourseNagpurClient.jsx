"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// Ensure these paths match your project structure
import HeaderSection from "../Components/HeaderSection";
import FooterSection from "../Components/FooterSection";

// --- Icons (Inline SVGs for performance & no-dependencies) ---
const Icons = {
  ChevronDown: ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>
  ),
  CheckCircle: ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
  ),
  BarChart: ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
  ),
  Database: ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s 9-1.34 9-3V5"/></svg>
  ),
  Code: ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  Brain: ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
  ),
  Users: ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Briefcase: ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  ),
};

// --- Sub-Components ---

function AccordionItem({ heading, isOpen, onClick, children }) {
  return (
    <div className={`border-b border-zinc-800 transition-colors duration-500 ${isOpen ? 'bg-zinc-900/10' : 'hover:bg-zinc-900/5'}`}>
      <button
        type="button"
        onClick={onClick}
        className="w-full py-8 md:py-10 px-4 md:px-8 flex justify-between items-start md:items-center text-left group"
        aria-expanded={isOpen}
      >
        <div className={`pr-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-200 group-hover:text-white'}`}>
          {heading}
        </div>

        <div className="flex items-center shrink-0 mt-1 md:mt-0 ml-4">
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            className={`h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-300
              ${isOpen 
                ? 'border-blue-500 bg-blue-500/10 text-blue-400' 
                : 'border-zinc-700 bg-zinc-900 text-zinc-400 group-hover:border-zinc-500 group-hover:text-white'}`}
          >
            <Icons.ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-12 px-4 md:px-8">
              <div className="max-w-none text-zinc-300">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FeatureCard({ children }) {
  return (
    <div className="flex items-start p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
      <div className="mr-3 mt-1 text-blue-500 shrink-0">
        <Icons.CheckCircle className="w-5 h-5" />
      </div>
      <span className="text-zinc-300 text-sm md:text-base leading-relaxed">{children}</span>
    </div>
  );
}

function StackCard({ title, icon, children }) {
  return (
    <div className="h-full p-6 md:p-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-950 hover:border-blue-500/30 transition-all duration-300 group">
      <div className="mb-6 h-12 w-12 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/50">
        {icon}
      </div>
      <h5 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{title}</h5>
      <div className="text-zinc-400 text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

// --- Main Client Component ---

export default function DataAnalystCourseNagpurClient() {
  const [openSection, setOpenSection] = useState(1);

  const toggleSection = (index) => {
    setOpenSection((prev) => (prev === index ? null : index));
  };

  const sections = useMemo(
    () => [
      {
        id: 1,
        heading: (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Why Choose Techtonic Labs For Data Analyst Classes in Nagpur?
          </h2>
        ),
        body: (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-zinc-300">
                  At Techtonic Labs we have a comprehensive curriculum that includes all the major tools of Data Analytics such as Python, Tableau, Excel, Power BI, SQL and AI. We provide the best Data Analyst Course in Nagpur that has a 3 month duration with 1 month of corporate grooming. Not only that, our course is taught by experts who have real industry experience.
                </p>
                <p className="text-lg leading-relaxed text-zinc-300">
                  They teach in a way that is highly focused on actual development of skills rather than gaining theoretical knowledge. Our module prioritizes an application-based approach so that you can become ready for the current job market.
                </p>
              </div>
              
              {/* Image Context: Team/Learning */}
              <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden border border-zinc-800">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="Students learning data analytics"
                  fill
                  className="object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-white text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-1 bg-blue-500 mr-4 rounded-full"></span>
                Special features of our course
              </p>
              
              <div className="grid md:grid-cols-2 gap-3">
                <p className="md:col-span-2 text-zinc-400 mb-2 italic">
                  Primarily focused on application-based learning and skill development tailored to make you job ready
                </p>
                
                {[
                  "Our curriculum is comprehensive and up to date with the current industry skill demand",
                  "Industry-relevant certification",
                  "Career guidance, good mentorship and placement support",
                  "We cover everything - from statistical methods to machine learning applications",
                  "Our small sized batches ensure each student gets full attention from the instructors",
                  "You get to work on real-world projects which enhances your resume",
                  "We have experienced professionals as instructors who have worked in the industry for years",
                  "The course includes a FREE Corporate Grooming Module that helps you become equipped with real-world skills"
                ].map((item, i) => (
                  <FeatureCard key={i}>{item}</FeatureCard>
                ))}
              </div>
            </div>

            <div className="bg-blue-900/10 border border-blue-900/30 p-6 rounded-xl text-center">
              <p className="text-zinc-300 mb-3">
                We focus on developments of skills that give you more leverage in the current job market while also equipping you with tools that will help you in future. This course is your one-way ticket to elevating your career.
              </p>
              <p className="text-blue-400 font-bold text-lg uppercase tracking-wide">
                What are you waiting for? Book a call or a demo session with us NOW!
              </p>
            </div>
          </div>
        ),
      },
      {
        id: 2,
        heading: (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            What Is Data Analytics?
          </h2>
        ),
        body: (
          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="order-2 md:order-1 space-y-6">
                <p className="text-lg text-zinc-300 leading-relaxed">
                  It is the process of collecting data to clean it, analyze it or interpret it. Data is then used to derive beneficial information about patterns and insights from it. Using data and data-driven insights is highly beneficial to many industries and sectors.
                </p>
                
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                  <p className="text-white font-semibold text-lg mb-4 border-b border-zinc-700 pb-2">
                    Data Analysis of large datasets involves the following :
                  </p>
                  <ul className="space-y-3">
                    {["Find patterns and trends in the given data", "Create reports and dashboards based on the patterns found", "Using data-driven insights to help making beneficial strategies"].map((item, i) => (
                      <li key={i} className="flex items-center text-zinc-400">
                         <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                         {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-zinc-400 italic">
                  The tools and techniques of data analysis range from statistics to machine learning operations.
                </p>
             </div>
             
             {/* Image Context: Analytics/Charts */}
             <div className="order-1 md:order-2 h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-zinc-800">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                  alt="Data Analytics Charts"
                  fill
                  className="object-cover"
                />
             </div>
          </div>
        ),
      },
      {
        id: 3,
        heading: (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Importance Of Data Analytics in Today’s World
          </h2>
        ),
        body: (
          <div className="relative bg-zinc-900/30 p-8 md:p-12 rounded-2xl border border-zinc-800 overflow-hidden">
             {/* Abstract background decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-6 max-w-3xl">
              <p className="text-xl text-zinc-200 font-light leading-relaxed">
                From big corporations to smaller companies and to startups, everyone needs to analyze data to derive beneficial insights from it. Various forms of data are collected in these companies through numerous ways.
              </p>
              <div className="h-px w-24 bg-blue-500" />
              <p className="text-lg text-zinc-400 leading-relaxed">
                This information is then used in leading industries, as well as smaller ones, to make important decisions, optimize operations and increase the profits.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: 4,
        heading: (
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Our Data Analyst coaching in Nagpur Stack
          </h3>
        ),
        body: (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              <StackCard 
                title="Python and Libraries" 
                icon={<Icons.Code className="w-6 h-6" />}
              >
                <p className="mb-2 text-zinc-300">
                  Our course includes the use of Python Programming in Data Analysis. It is combined with the use of libraries such as NumPy, Pandas, Matplotlib, Seaborn, SciKit-Learn and TensorFlow/PyTorch.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-500">
                  <li>Data cleaning and manipulation</li>
                  <li>Statistical analysis and Visualization</li>
                  <li>Making Machine Learning models</li>
                </ul>
              </StackCard>

              <StackCard 
                title="Data Visualization" 
                icon={<Icons.BarChart className="w-6 h-6" />}
              >
                <p className="mb-2 text-zinc-300">
                  Creating reports and dashboards along with deriving certain stories from data with the use of tools like Tableau, Power BI and Python visualization libraries.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-500">
                  <li>Creating interactive dashboards</li>
                  <li>Data storytelling techniques</li>
                  <li>Reporting Business Intelligence</li>
                </ul>
              </StackCard>

              <StackCard 
                title="SQL and Database Management" 
                icon={<Icons.Database className="w-6 h-6" />}
              >
                <p className="mb-2 text-zinc-300">
                  Strategies to design databases, manage them and use advanced techniques to extract meaningful insights from structured sources of data.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-500">
                  <li>Database design principles</li>
                  <li>Complex query optimization</li>
                  <li>Data Integration and ETL processes</li>
                </ul>
              </StackCard>

              <StackCard 
                title="AI and Machine Learning" 
                icon={<Icons.Brain className="w-6 h-6" />}
              >
                <p className="mb-2 text-zinc-300">
                  Learn advanced machine learning algorithms, selection of models, evaluation techniques and practical AI implementation techniques.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-500">
                  <li>Supervised and Unsupervised learning</li>
                  <li>Model evaluation and deployment</li>
                  <li>Introduction to deep learning</li>
                </ul>
              </StackCard>
            </div>

            <p className="text-center text-zinc-400 max-w-3xl mx-auto pt-4 border-t border-zinc-800">
              Our modules are designed with the needs of industries in mind. They are beneficial for beginners too. Data Analyst Course in Nagpur focuses on each student, even if you have a non-IT background you will become competent with the Data Analytics course as Techtonic Lab.
            </p>
          </div>
        ),
      },
      {
        id: 5,
        heading: (
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Real World Projects and Practical Training
          </h3>
        ),
        body: (
          <div className="space-y-8">
             <div className="flex flex-col md:flex-row gap-8 items-start">
               <div className="flex-1 space-y-6">
                  <p className="text-lg text-zinc-300">
                    Data Analysis is not a subject just to be taught by theory. You learn the most by actually doing the work. We help you work on real-world projects during our Data Analytics training in Nagpur.
                  </p>
                  <p className="text-zinc-400">
                    Work on projects across multiple industries by developing strategic solutions to enhance your portfolio. Working on actual projects not only helps strengthen your skills and technical application but also gives you confidence in your abilities
                  </p>
               </div>
             </div>

            <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6 md:p-8">
              <p className="text-white font-bold text-xl mb-6">
                At Techtonic Labs, we teach you to work on projects such as :
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {[
                   "Building predictive models for Business Outcomes",
                   "Customer segregation and market analysis",
                   "Sentiment analysis and applications of NLP",
                   "Recommendation system development",
                   "Detection of anomalies for fraud detection",
                   "Time series forecasting for Business Planning and management"
                 ].map((project, i) => (
                   <div key={i} className="p-4 bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-colors rounded-lg flex items-start">
                      <div className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0" />
                      <span className="text-zinc-300 text-sm">{project}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 6,
        heading: (
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Career Opportunities
          </h3>
        ),
        body: (
          <div className="space-y-8">
            <p className="text-zinc-300 text-lg">
              As you know, Data Analytics has a pretty strong demand in various industries. The career options are diverse and there are roles in a wide range of sectors. Some of the most popular roles are :
            </p>
            
            <div className="grid gap-4">
              {[
                { role: "Data Analyst", desc: "Someone who transforms real world data into business insights that are actionable." },
                { role: "Data Scientist", desc: "Uses statistical methods and machine learning to solve complex issues and predict outcomes." },
                { role: "Business Intelligence Analyst", desc: "Analyzes business related data and converts its insights into visual information to help businesses make strategic decisions." },
                { role: "Data Visualization Specialist", desc: "converts data and insights by using visualization & storytelling methods to easily convey the information." },
                { role: "AI Consultant", desc: "Advises a corporation or company on how to use the insights derived from various datasets." }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col md:flex-row md:items-center p-5 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900 transition-colors">
                   <div className="flex items-center md:w-1/3 mb-2 md:mb-0">
                      <Icons.Briefcase className="w-5 h-5 text-blue-500 mr-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <strong className="text-white text-lg">{item.role}</strong>
                   </div>
                   <span className="text-zinc-400 md:border-l md:border-zinc-800 md:pl-6 text-sm md:text-base">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: 7,
        heading: (
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Industries That Hire Analysts
          </h3>
        ),
        body: (
          <div className="space-y-8">
            <p className="text-zinc-300">
              Industries that hire Data Analysts vary in range but the most common ones are the following
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "IT and Software", "E-commerce", "Finance & Banking", 
                "Marketing", "Consulting", "Healthcare"
              ].map((ind, i) => (
                <div key={i} className="aspect-[4/3] flex flex-col items-center justify-center p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-blue-900/10 hover:border-blue-500/30 transition-all cursor-default">
                  <span className="text-zinc-200 font-medium text-center">{ind}</span>
                </div>
              ))}
            </div>
            
            <p className="text-zinc-500 text-sm text-center">
              Although these are few examples, there are many other sectors hiring data analysts to improve their company’s growth and profits.
            </p>
          </div>
        ),
      },
      {
        id: 8,
        heading: (
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Who is Our Job-oriented Data Analyst course For?
          </h3>
        ),
        body: (
          <div className="space-y-6">
            <p className="text-zinc-300">
              The course is designed in such a way that it suits and benefits a range of people.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Fresh Graduates", desc: "Graduates from any background can join the course" },
                { title: "IT Professionals", desc: "people looking to upgrade their skills and advance their careers" },
                { title: "Non-IT professionals", desc: "people who are working in other sectors looking to switch into the IT sector" },
                { title: "MBA students", desc: "management students who want to improve their resume by adding on skills for the current job market" },
                { title: "Entrepreneurs", desc: "people starting out to make a profitable business" }
              ].map((item, idx) => (
                 <div key={idx} className="relative p-6 bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-xl overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    <div className="text-white font-bold text-lg mb-2">{item.title}</div>
                    <div className="text-zinc-500 text-sm leading-relaxed">{item.desc}</div>
                 </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: 9,
        heading: (
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Corporate Grooming
          </h3>
        ),
        body: (
          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="space-y-6">
                <p className="text-lg text-zinc-300">
                  Our Corporate Grooming Module is FREE with the given course. It is a month-long training that prepares you for the corporate world.
                </p>
                <div className="space-y-4">
                  <p className="text-white font-medium">In this course we teach you various skills that help you navigate your way to a successful corporate career:</p>
                  <ul className="space-y-3">
                    {[
                      "Interview preparation - we provide proper training to crack the interview",
                      "Portfolio Development - optimize GitHub & projects",
                      "LinkedIn Profile - optimization for networking",
                      "Communication Skills - explain tech concepts to stakeholders",
                      "Salary Negotiation Strategies"
                    ].map((item, i) => (
                      <FeatureCard key={i}>{item}</FeatureCard>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-blue-600 rounded-lg text-white font-bold text-center shadow-lg shadow-blue-900/50">
                   The upcoming batch has limited seats. CALL and BOOK A SESSION with us TODAY!
                </div>
             </div>
             
             {/* Image Context: Interview/Corporate */}
             <div className="h-[400px] relative rounded-2xl overflow-hidden border border-zinc-800">
                <Image 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
                  alt="Corporate Grooming Meeting"
                  fill
                  className="object-cover"
                />
             </div>
          </div>
        ),
      },
      {
        id: 10,
        heading: (
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            FAQs
          </h4>
        ),
        body: (
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { q: "Is this course good for beginners?", a: "Absolutely! Data Analyst Course in Nagpur is designed and taught in a way that helps the beginners to grasp a complete understanding and develop the skills efficiently." },
              { q: "What is the duration of the course?", a: "It is a 3-month course with FREE 1 month of Corporate Grooming." },
              { q: "Do you provide placement assistance?", a: "Yes. We provide proper mentorship as well as placement assistance." },
              { q: "Are non-technical people eligible for the course?", a: "Of course! You don’t need prior technical knowledge to enroll in the classes." },
              { q: "What is the fee structure of the course?", a: "We provide the best courses for very affordable prices. Contact us now to find more information or you can visit our location." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                <p className="text-white font-semibold text-lg mb-2 flex items-start">
                  <span className="text-blue-500 mr-2">Q.</span>
                  {faq.q}
                </p>
                <p className="text-zinc-400 pl-6 border-l border-zinc-800 ml-1">{faq.a}</p>
              </div>
            ))}
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      <HeaderSection />

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
         {/* Background Glow */}
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
         
         <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 tracking-tight leading-[1.1]"
            >
              Data Analyst Course in Nagpur
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8 text-xl text-zinc-400 leading-relaxed"
            >
              <p>
                Job-oriented Data Analyst courses in Nagpur have become necessary in almost every sector you see. It has proven to be one of the most in-demand skills that is not only essential but extremely adaptable. In this generation, data is everywhere in everything. It is used and its insights are invaluable.
              </p>
              
              <div className="p-6 bg-zinc-900/30 border-l-4 border-blue-500 rounded-r-lg backdrop-blur-sm">
                <p className="text-white mb-4 italic">
                  "But how do people analyze data to gain beneficial insights from it and then use it in a way that is profitable and helpful?"
                </p>
                <p className="text-zinc-300 text-base">
                  This is where Our Data Analyst Course in Nagpur comes in. With our comprehensive Data Analytics certification in Nagpur, you can learn everything about data and how to use it in actual industrial settings.
                </p>
              </div>

              <p>
                Techtonic Labs provides the best certified Data Analyst Training in Nagpur. With us you get the best quality Data Analyst Classes in Nagpur with a real-world application focus.
              </p>
            </motion.div>
         </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Accordion Sections */}
      <section className="w-full py-24 px-4 md:px-8 bg-black relative">
        <div className="max-w-[1200px] mx-auto">
          {sections.map((s) => (
            <AccordionItem
              key={s.id}
              heading={s.heading}
              isOpen={openSection === s.id}
              onClick={() => toggleSection(s.id)}
            >
              {s.body}
            </AccordionItem>
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

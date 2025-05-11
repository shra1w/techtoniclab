"use client"
import { useState } from 'react';
import HeaderSection from '../Components/HeaderSection';
import FooterSection from '../Components/FooterSection';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      {/* Hero Header */}
      <HeaderSection/>
      <div className="bg-emerald-800 text-white py-12 shadow-xl mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-center">Terms of Service</h1>
          <p className="text-center text-emerald-200 mt-4 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By accessing TECHTONIC-LAB, you agree to be bound by these terms.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-8">
              <h2 className="text-xl font-bold text-emerald-800 mb-4 pb-2 border-b border-emerald-100">
                Contents
              </h2>
              <nav>
                <ul className="space-y-1">
                  {[
                    { id: 'welcome', label: 'Welcome' },
                    { id: 'enrolment', label: 'Course Enrolment' },
                    { id: 'payment', label: 'Payment & Refunds' },
                    { id: 'ip', label: 'Intellectual Property' },
                    { id: 'conduct', label: 'Code of Conduct' },
                    { id: 'liability', label: 'Liability Disclaimer' },
                    { id: 'updates', label: 'Updates to Terms' },
                  ].map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition duration-200 ${
                          activeSection === section.id
                            ? 'bg-emerald-100 text-emerald-800 font-medium'
                            : 'text-gray-700 hover:bg-emerald-50'
                        }`}
                      >
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-8 pt-4 border-t border-emerald-100">
                <button
                  onClick={() => window.print()}
                  className="flex items-center justify-center w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition shadow-md font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print Terms
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4 bg-white rounded-xl shadow-md p-6 md:p-10">
            {/* Welcome Section */}
            <section id="welcome" className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="bg-emerald-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Welcome to TECHTONIC-LAB</h2>
                  <div className="h-1 w-24 bg-emerald-500 mt-3 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                By accessing our website or enrolling in our training programs, you agree to the following terms. 
                These terms constitute a legally binding agreement between you and TECHTONIC-LAB regarding your 
                use of our services, website and educational content.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg mt-6">
                <p className="text-gray-700">
                  <span className="font-medium text-emerald-800">Please Note:</span> These terms may be updated 
                  periodically. It is your responsibility to review these terms regularly to stay informed about 
                  any changes. Your continued use of our services constitutes acceptance of the current terms.
                </p>
              </div>
            </section>

            {/* Course Enrolment */}
            <section id="enrolment" className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="bg-emerald-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">1. Course Enrolment</h2>
                  <div className="h-1 w-24 bg-emerald-500 mt-3 rounded-full"></div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    All enrolments are subject to availability and successful payment. TECHTONIC-LAB reserves the right to 
                    cancel or reschedule batches with prior notice.
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                        <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Admission to courses depends on seat availability and may require meeting prerequisites.</span>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                        <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Enrolment is confirmed only after successful payment processing.</span>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                        <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">We reserve the right to modify course content, schedules, or instructors as needed.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment & Refunds */}
            <section id="payment" className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="bg-emerald-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">2. Payment & Refunds</h2>
                  <div className="h-1 w-24 bg-emerald-500 mt-3 rounded-full"></div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <div className="bg-gray-50 p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Fees once paid are non-refundable unless otherwise stated. Refunds may be issued only in 
                    special cases and are subject to approval.
                  </p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg shadow p-5 border-t-4 border-emerald-500">
                      <h3 className="font-bold text-gray-800 mb-2">Payment Terms</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>All payments must be made in full prior to course start date</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Installment options may be available for select courses</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Late payments may incur additional fees</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg shadow p-5 border-t-4 border-emerald-500">
                      <h3 className="font-bold text-gray-800 mb-2">Refund Policy</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Course cancellation by TECHTONIC-LAB qualifies for full refund</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Student cancellations must be requested 14 days before course start</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Medical emergencies may qualify for partial refunds with documentation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="ip" className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="bg-emerald-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">3. Intellectual Property</h2>
                  <div className="h-1 w-24 bg-emerald-500 mt-3 rounded-full"></div>
                </div>
              </div>
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                <p className="text-gray-700 leading-relaxed">
                  All course materials, content and resources are the intellectual property of TECHTONIC-LAB 
                  and may not be copied, reproduced or shared without written permission.
                </p>
                <div className="mt-6 p-5 bg-white rounded-lg shadow-md border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Prohibited Activities
                  </h3>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Sharing access credentials with non-enrolled individuals</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Recording, copying, or distributing lecture videos</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Republishing course materials on other platforms</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Using course materials for commercial purposes without permission</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Code of Conduct */}
            <section id="conduct" className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="bg-emerald-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">4. Code of Conduct</h2>
                  <div className="h-1 w-24 bg-emerald-500 mt-3 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Students are expected to maintain professionalism and respect toward peers and trainers. 
                Disruptive behaviour may lead to termination of access without refund.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
                  <h3 className="font-bold text-emerald-700 mb-3 flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Expected Behavior
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2">Respect for all participants regardless of background</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2">Active participation in group discussions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2">Constructive feedback and collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2">Adherence to assignment deadlines</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
                  <h3 className="font-bold text-red-600 mb-3 flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Prohibited Behavior
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2">Harassment or discrimination of any kind</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2">Disruptive behavior during live sessions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2">Sharing inappropriate content in forums</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2">Plagiarism or academic dishonesty</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Liability Disclaimer */}
            <section id="liability" className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="bg-emerald-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414A9 9 0 105.636 18.364l1.414-1.414A7 7 0 1116.95 7.05z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">5. Liability Disclaimer</h2>
                  <div className="h-1 w-24 bg-emerald-500 mt-3 rounded-full"></div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
                <p className="text-gray-700 leading-relaxed">
                  While we strive to provide high-quality training, TECHTONIC-LAB is not liable for job placements or career outcomes. Success depends on individual effort and market conditions.
                </p>
              </div>
            </section>

            {/* Updates to Terms */}
            <section id="updates" className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="bg-emerald-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">6. Updates to Terms</h2>
                  <div className="h-1 w-24 bg-emerald-500 mt-3 rounded-full"></div>
                </div>
              </div>
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of our services indicates your acceptance of any changes.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
      <FooterSection/>
    </div>
  );
};

export default TermsOfService;

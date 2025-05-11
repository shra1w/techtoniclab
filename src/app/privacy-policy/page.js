"use client"
import { useState } from 'react';
import HeaderSection from '../Components/HeaderSection';
import Link from 'next/link';
import FooterSection from '../Components/FooterSection';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('overview');
  
  const handleNavClick = (section) => {
    setActiveSection(section);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <HeaderSection/>
      <div className="bg-emerald-900 text-white py-8 shadow-lg mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Privacy Policy</h1>
          <p className="text-center text-emerald-200 mt-2">Your Privacy is Our Priority at TECHTONIC-LAB</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Navigation Sidebar */}
          <nav className="lg:w-1/4 bg-white rounded-lg shadow-md p-4 h-fit sticky top-4">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('overview')}
                  className={`w-full text-left px-4 py-2 rounded-md transition ${activeSection === 'overview' ? 'bg-emerald-100 text-emerald-900 font-medium' : 'hover:bg-gray-100'}`}
                >
                  Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('information-collected')}
                  className={`w-full text-left px-4 py-2 rounded-md transition cursor-pointer text-zinc-900 ${activeSection === 'information-collected' ? 'bg-emerald-100 text-emerald-900 font-medium' : 'hover:bg-emerald-600/30'}`}
                >
                  Information We Collect
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('data-usage')}
                  className={`w-full text-left px-4 py-2 rounded-md transition cursor-pointer text-zinc-900 ${activeSection === 'data-usage' ? 'bg-emerald-100 text-emerald-900 font-medium' : 'hover:bg-emerald-600/30'}`}
                >
                  How We Use Your Data
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('data-security')}
                  className={`w-full text-left px-4 py-2 rounded-md transition cursor-pointer text-zinc-900 ${activeSection === 'data-security' ? 'bg-emerald-100 text-emerald-900 font-medium' : 'hover:bg-emerald-600/30'}`}
                >
                  Data Security
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('your-rights')}
                  className={`w-full text-left px-4 py-2 rounded-md transition cursor-pointer text-zinc-900 ${activeSection === 'your-rights' ? 'bg-emerald-100 text-emerald-900 font-medium' : 'hover:bg-emerald-600/30'}`}
                >
                  Your Rights
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className={`w-full text-left px-4 py-2 rounded-md transition cursor-pointer text-zinc-900 ${activeSection === 'contact' ? 'bg-emerald-100 text-emerald-900 font-medium' : 'hover:bg-emerald-600/30'}`}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>

          {/* Main Content */}
          <main className="lg:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-md">
            {/* Overview */}
            <section id="overview" className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-3 text-gray-800">Overview</h2>
              </div>
              <div className="pl-12">
                <p className="text-gray-700 leading-relaxed">
                  At TECHTONIC-LAB, we value and respect your privacy. This Privacy Policy outlines how we collect, 
                  use, store and protect your personal information when you interact with our website, 
                  enrol in our courses or communicate with us. We are committed to ensuring that your 
                  personal data remains secure and is handled in accordance with applicable privacy laws and regulations.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This policy applies to all services offered by TECHTONIC-LAB, including our website, 
                  online courses and other educational content. By using our services, you acknowledge 
                  that you have read and understood this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section id="information-collected" className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-3 text-gray-800">Information We Collect</h2>
              </div>
              <div className="pl-12">
                <p className="text-gray-700 leading-relaxed">We collect various types of information to provide you with the best learning experience:</p>
                
                <div className="mt-4 bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="font-medium text-gray-800">Personal Information</h3>
                  <p className="text-gray-600 mt-1">Name, email address, phone number and course interests when you register or contact us.</p>
                </div>
                
                <div className="mt-4 bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="font-medium text-gray-800">Payment Details</h3>
                  <p className="text-gray-600 mt-1">Payment and transaction information when you enroll in our courses.</p>
                </div>
                
                <div className="mt-4 bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="font-medium text-gray-800">Usage Data</h3>
                  <p className="text-gray-600 mt-1">Information about how you use our website, including pages visited and time spent on site.</p>
                </div>
                
                <p className="text-gray-700 leading-relaxed mt-4">
                  We collect this information directly from you when you fill out forms, 
                  create an account, or interact with our website.
                </p>
              </div>
            </section>

            {/* How We Use Your Data */}
            <section id="data-usage" className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-3 text-gray-800">How We Use Your Data</h2>
              </div>
              <div className="pl-12">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use your personal information for the following purposes:
                </p>
                
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-emerald-200 rounded-full p-1">
                        <svg className="h-4 w-4 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">To provide course-related services and send you important updates</p>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-emerald-200 rounded-full p-1">
                        <svg className="h-4 w-4 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">To personalize your learning experience based on your preferences</p>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-emerald-200 rounded-full p-1">
                        <svg className="h-4 w-4 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">For communication, support and promotional purposes (only with your consent)</p>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-emerald-200 rounded-full p-1">
                        <svg className="h-4 w-4 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">To improve our website, courses and overall training services</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mt-4">
                  We process your data only for these specific purposes and ensure that our data processing activities 
                  are fair, lawful and transparent.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section id="data-security" className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-3 text-gray-800">Data Security</h2>
              </div>
              <div className="pl-12">
                <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100">
                  <p className="text-gray-700 leading-relaxed">
                    We implement industry-standard security protocols to keep your data safe:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span className="text-gray-700">Secure encryption for all data transmissions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span className="text-gray-700">Regular security assessments and updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span className="text-gray-700">Strict access controls for staff members</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span className="text-gray-700">Your information is never shared with unauthorized third parties</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-gray-700 leading-relaxed mt-4">
                  While we implement these security measures, please remember that no method of transmission 
                  over the internet or electronic storage is 100% secure. We strive to protect your personal 
                  information but cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section id="your-rights" className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-3 text-gray-800">Your Rights</h2>
              </div>
              <div className="pl-12">
                <p className="text-gray-700 leading-relaxed">
                  You have several rights regarding your personal data:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-emerald-700">Right to Access</h3>
                    <p className="text-gray-600 mt-1 text-sm">You can request access to your personal data at any time.</p>
                  </div>
                  
                  <div className="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-emerald-700">Right to Rectification</h3>
                    <p className="text-gray-600 mt-1 text-sm">You can request correction of inaccurate data.</p>
                  </div>
                  
                  <div className="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-emerald-700">Right to Erasure</h3>
                    <p className="text-gray-600 mt-1 text-sm">You can request deletion of your data under certain conditions.</p>
                  </div>
                  
                  <div className="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-emerald-700">Right to Object</h3>
                    <p className="text-gray-600 mt-1 text-sm">You can object to certain types of processing.</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us using the information provided in the Contact section.
                  We will respond to your request within a reasonable timeframe.
                </p>
              </div>
            </section>

            {/* Contact Us */}
            <section id="contact" className="mb-6">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-3 text-gray-800">Contact Us</h2>
              </div>
              <div className="pl-12">
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions or concerns about our Privacy Policy or how we handle your data, 
                  please contact us:
                </p>
                
                <div className="mt-4 bg-emerald-50 p-5 rounded-lg">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-emerald-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-800 font-medium">Email:</span>
                    <Link href="mailto:admin@techtoniccorporate.com" className="ml-2 text-emerald-600 hover:text-emerald-800 transition">
                    admin@techtoniccorporate.com
                    </Link>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-emerald-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-800 font-medium">Phone:</span>
                    <Link href="tel:+918766069947" className="ml-2 text-emerald-600 hover:text-emerald-800 transition">
                    +91-8766069947
                    </Link>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-700 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-800 font-medium">Address:</span>
                      <address className="mt-1 text-gray-700 not-italic">
                      SAI NIT-JIT PLAZA, Second Floor, Plot No.10,<br />
                      Beltarodi Rd. nr. GULMOHAR RESTAURANT,<br />
                      Manish Nagar, Somalwada, Nagpur<br />
                      MH-440037
                      </address>
                    </div>
                  </div>
                </div>
                
                <Link href="/connect-with-us"><button className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md transition shadow-md font-medium flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  Contact Us Now
                </button></Link>
              </div>
            </section>

            {/* Last Updated */}
            <div className="mt-8 pt-4 border-t border-gray-200 text-gray-500 text-sm text-center">
              Last Updated: May 04, 2025
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <FooterSection/>
    </div>
  );
};

export default PrivacyPolicy;
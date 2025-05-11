"use client"
import React from 'react';
import { Cpu, Users, BookOpen, Target, Award, Briefcase } from 'lucide-react';
import HeaderSection from '../Components/HeaderSection';
import FooterSection from '../Components/FooterSection';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <HeaderSection/>
      <div className="bg-emerald-700 text-white mt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About TECHTONIC-LAB</h1>
          <p className="text-xl md:text-2xl max-w-3xl">Empowering IT Careers with Real-World Skills</p>
        </div>
      </div>
      
      {/* Who We Are Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            TECHTONIC-LAB is a premier IT training institute based in Nagpur, Maharashtra, focused on transforming academic learners, job seekers and working professionals into industry-ready IT experts. With a firm belief that education should evolve with industry trends, we offer future-facing training programs designed to match the dynamic expectations of today&apos;s tech-driven world.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We specialize in Data Analytics, Business Analytics, Data Analytics and SAP (all modules)—equipping individuals with practical, job-oriented skills that enable successful transitions into IT roles or help accelerate growth in existing careers.
          </p>
        </div>
        
        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 opacity-10 rounded-full -mr-10 -mt-10"></div>
            <Target className="text-blue-600 mb-4 h-12 w-12" />
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become a trusted national leader in career-centric IT education—bridging the academic-to-industry gap and empowering individuals to thrive in the digital economy.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-500 opacity-10 rounded-full -mr-10 -mt-10"></div>
            <BookOpen className="text-green-600 mb-4 h-12 w-12" />
            <h2 className="text-2xl font-bold mb-4 text-green-800">Our Mission</h2>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>To provide job-ready training programs aligned with real-world business requirements.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>To upskill and reskill individuals through quality mentorship and hands-on learning.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>To support career switchers, job seekers and working professionals in achieving their IT career goals.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>To deliver value through industry-expert trainers, modern tools and practical case studies.</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Trainers Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
          <div className="flex items-center mb-6">
            <Award className="text-purple-600 mr-4 h-8 w-8" />
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900">Our Trainers: Industry Experts with a Passion for Teaching</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We take pride in our expert faculty team, composed of professionals currently working in top IT giants with 10+ years of industry experience. Their mentorship ensures our students receive not just theoretical knowledge but also insights from live projects, tools in use today and skills in demand tomorrow.
          </p>
        </div>
        
        {/* Who We Serve Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <Users className="inline-block text-blue-700 h-12 w-12 mb-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Who We Serve</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Students & Freshers</h3>
              <p className="text-gray-600">Looking to start their careers with the right foundation</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Job Seekers</h3>
              <p className="text-gray-600">Who want to break into the tech industry with practical skills</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Career Switchers</h3>
              <p className="text-gray-600">From non-IT backgrounds aiming to enter the IT field</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Working Professionals</h3>
              <p className="text-gray-600">Wanting to upskill for a promotion or role change</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Freelancers & Entrepreneurs</h3>
              <p className="text-gray-600">Who need data-driven knowledge for business growth</p>
            </div>
          </div>
        </div>
        
        {/* What Makes Us Different Section */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
          <div className="text-center mb-8">
            <Cpu className="inline-block h-12 w-12 mb-3" />
            <h2 className="text-2xl md:text-3xl font-bold">What Makes Us Different</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2 text-sky-600">Industry-Relevant Curriculum</h3>
              <p className="text-zinc-800">Built with employer expectations in mind</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2 text-sky-600">Hands-On Learning</h3>
              <p className="text-zinc-800">Real-time projects, use-case simulations and tool-based sessions</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2 text-sky-600">Career Support</h3>
              <p className="text-zinc-800">Resume building, interview coaching, mock interviews and more</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2 text-sky-600">Flexible Modes</h3>
              <p className="text-zinc-800">Classroom and online options for maximum accessibility</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2 text-sky-600">Affordable Excellence</h3>
              <p className="text-zinc-800">World-class training at pocket-friendly fees</p>
            </div>
          </div>
        </div>
        
        {/* Our Commitment Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="text-amber-600 mr-4 h-8 w-8" />
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900">Our Commitment</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg italic">
            At TECHTONIC-LAB, we&apos;re not just running courses—we&apos;re shaping careers. Our student-centric approach ensures that every learner receives individual attention, mentorship and career guidance. Your success is our mission.
          </p>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-emerald-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your IT Career?</h2>
          <Link href="/connect-with-us"><button className="bg-white text-emerald-900 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-colors">
            Contact Us Today
          </button></Link>
        </div>
      </div>
      <FooterSection/>
    </div>
  );
};

export default AboutUs;
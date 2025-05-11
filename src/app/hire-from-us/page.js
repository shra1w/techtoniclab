"use client"
import React, { useState } from 'react';
import { Check, AlertCircle, Briefcase, GraduationCap, Clock, MapPin, Building, FileText, Code, User, Calendar, Mail } from 'lucide-react';
import HeaderSection from '../Components/HeaderSection';
import FooterSection from '../Components/FooterSection';
import { sendHiringEmail } from '../utiles/Hirefromus';
import Link from 'next/link';

const HiringForm = () => {
  const [formData, setFormData] = useState({
    jobRole: '',
    education: '',
    experience: '',
    jobMode: 'WFH',
    location: '',
    jobDescription: '',
    skills: '',
    companyName: '',
    employmentType: 'Permanent'
  });
  
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Updated handleSubmit function with email sending and proper error handling
const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Validate form
      const requiredFields = ['jobRole', 'education', 'experience', 'location', 'jobDescription', 'skills', 'companyName'];
      const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
      
      if (missingFields.length > 0) {
        // Show error toast with specific missing fields
        setToastType('error');
        setToastMessage(`Please fill in all required fields: ${missingFields.join(', ')}`);
        setShowToast(true);
        setIsLoading(false);
        return;
      }
      
      // All validation passed, proceed with submission
      
      // Send email using the server action
      const result = await sendHiringEmail(formData);
      
      if (result.success) {
        // Show success toast
        setToastType('success');
        setToastMessage('Your hiring request has been submitted successfully. Our team will contact you shortly!');
        setShowToast(true);
        
        // Reset form
        setFormData({
          jobRole: '',
          education: '',
          experience: '',
          jobMode: 'WFH',
          location: '',
          jobDescription: '',
          skills: '',
          companyName: '',
          employmentType: 'Permanent'
        });
        
        // Optional: track successful submission
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submission', {
            'event_category': 'hiring',
            'event_label': formData.jobRole
          });
        }
      } else {
        // Handle server errors
        throw new Error(result.message || 'Failed to send your request');
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      
      // Show error toast with specific error message
      setToastType('error');
      setToastMessage(error.message || 'Something went wrong. Please try again later.');
      setShowToast(true);
    } finally {
      // End loading state regardless of outcome
      setIsLoading(false);
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  };
  
  // Toast component
  const Toast = ({ type, message }) => (
    <div className={`fixed top-10 z-50 right-4 p-4 rounded-md shadow-lg max-w-md flex items-center gap-3 transition-all duration-300 ${type === 'success' ? 'bg-green-100 text-green-800 border-l-4 border-green-500' : 'bg-red-100 text-red-800 border-l-4 border-red-500'}`}>
      {type === 'success' ? (
        <Check className="h-5 w-5 text-green-500" />
      ) : (
        <AlertCircle className="h-5 w-5 text-red-500" />
      )}
      <p className="text-sm font-medium">{message}</p>
    </div>
  );

  // Interest buttons
  const interestOptions = [
    { id: 'request-demo', label: 'Request Demo', },
    { id: 'product-info', label: 'Product Info / Support' },
    { id: 'become-partner', label: 'Become a Partner' },
    { id: 'working-with-us', label: 'Working with us' },
    { id: 'general-info', label: 'General Information' },
    { id: 'medical-enquiries', label: 'Medical Enquiries' },
    { id: 'other', label: 'Other' },
  ];
  
  return (
    <div className=' w-full min-h-screen bg-zinc-100'>
        <HeaderSection/>
        <div className="mx-auto md:max-w-[60%] max-w-[80%] p-6  mb-10 rounded-xl mt-20 ">
      {/* Heading Section */}
      <div className="mb-8 pt-10">
        <h1 className=" text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800">Hire Talent</h1>
        <p className="text-gray-600 mt-4">Got a position to fill? Let us help you find the perfect match. Fill in your requirements below and our support team will contact you as soon as possible.</p>
      </div>
      
     
      
      {/* Form Section - Modern Clean UI */}
      <div className="space-y-8">
        {/* First row with combined label+input style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Job Role */}
          <div className="flex items-center border-b border-gray-300 py-2 focus-within:border-teal-500 transition">
            <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
            <div className="w-full">
              <label htmlFor="jobRole" className="block text-sm font-medium text-gray-500">Job Role</label>
              <input
                type="text"
                id="jobRole"
                name="jobRole"
                value={formData.jobRole}
                onChange={handleChange}
                className="w-full py-1 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-800"
                placeholder="What position are you hiring for?"
              />
            </div>
          </div>
          
          {/* Company Name */}
          <div className="flex items-center border-b border-gray-300 py-2 focus-within:border-teal-500 transition">
            <Building className="h-5 w-5 text-gray-400 mr-3" />
            <div className="w-full">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-500">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full py-1 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-800"
                placeholder="Your company name"
              />
            </div>
          </div>
          
          {/* Education */}
          <div className="flex items-center border-b border-gray-300 py-2 focus-within:border-teal-500 transition">
            <GraduationCap className="h-5 w-5 text-gray-400 mr-3" />
            <div className="w-full">
              <label htmlFor="education" className="block text-sm font-medium text-gray-500">Education Background</label>
              <input
                type="text"
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full py-1 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-800"
                placeholder="Required education qualifications"
              />
            </div>
          </div>
          
          {/* Experience */}
          <div className="flex items-center border-b border-gray-300 py-2 focus-within:border-teal-500 transition">
            <Calendar className="h-5 w-5 text-gray-400 mr-3" />
            <div className="w-full">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-500">Experience</label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full py-1 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-800"
                placeholder="Years of experience required"
              />
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-center border-b border-gray-300 py-2 focus-within:border-teal-500 transition">
            <MapPin className="h-5 w-5 text-gray-400 mr-3" />
            <div className="w-full">
              <label htmlFor="location" className="block text-sm font-medium text-gray-500">Location of Job</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full py-1 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-800"
                placeholder="Where is this position located?"
              />
            </div>
          </div>
          
          {/* Job Mode (styled as dropdown) */}
          <div className="flex items-center border-b border-gray-300 py-2 focus-within:border-teal-500 transition">
            <Clock className="h-5 w-5 text-gray-400 mr-3" />
            <div className="w-full">
              <label htmlFor="jobMode" className="block text-sm font-medium text-gray-500">Mode of Job</label>
              <select
                id="jobMode"
                name="jobMode"
                value={formData.jobMode}
                onChange={handleChange}
                className="w-full py-1 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-800"
              >
                <option value="WFH">Work From Home</option>
                <option value="Hybrid">Hybrid</option>
                <option value="WFO">Work From Office</option>
              </select>
            </div>
          </div>
          
          {/* Employment Type (styled as dropdown) */}
          <div className="flex items-center border-b border-gray-300 py-2 focus-within:border-teal-500 transition md:col-span-2">
            <User className="h-5 w-5 text-gray-400 mr-3" />
            <div className="w-full">
              <label htmlFor="employmentType" className="block text-sm font-medium text-gray-500">Employment Type</label>
              <select
                id="employmentType"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full py-1 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-800"
              >
                <option value="Permanent">Permanent</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>
          
          {/* Skills */}
          <div className="flex items-center border-b border-gray-300 py-2 focus-within:border-teal-500 transition md:col-span-2">
            <Code className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
            <div className="w-full">
              <label htmlFor="skills" className="block text-sm font-medium text-gray-500">Skills Required</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full py-1 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-800"
                placeholder="List the required skills separated by commas"
              />
            </div>
          </div>
          
          {/* Job Description with text area */}
          <div className="md:col-span-2 border rounded-lg p-4 focus-within:border-teal-500 transition">
            <div className="flex items-center mb-2">
              <FileText className="h-5 w-5 text-gray-400 mr-3" />
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-500">Job Description</label>
            </div>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              rows="6"
              className="w-full border-none focus:outline-none focus:ring-0 text-gray-800 resize-none"
              placeholder="Describe the role, responsibilities and requirements in detail..."
            ></textarea>
          </div>
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          {/* Submit Button */}
          <button 
            onClick={handleSubmit} 
            className={`px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-300 shadow-md flex items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <Check className="h-5 w-5 mr-2" />
                Post Job Opening
              </>
            )}
          </button>
          
          {/* Terms and privacy notice */}
          <p className="text-sm text-gray-500 text-center">
            By using this form, you agree to our <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-teal-600 hover:underline">Terms of Service</a>.
          </p>
          
          {/* Contact info */}
          <div className="flex flex-col md:flex-row  gap-6 mt-6 w-full justify-center">
          <Link href="https://www.google.com/maps/search/?api=1&query=SAI+NIT-JIT+PLAZA%2C+Second+Floor%2C+Plot+No.10%2C+Beltarodi+Rd.+nr.+GULMOHAR+RESTAURANT%2C+Manish+Nagar%2C+Somalwada%2C+nagpur%2C+MH-440037" target='__blank'> <div className="p-2 hover:bg-emerald-500/30 rounded-md duration-300  flex items-center ">
              <div className="bg-teal-50 p-2 rounded-full mr-3">
                <MapPin className="h-8 w-8 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-900">Visit us</p>
                <p className="text-sm text-gray-500">SAI NIT-JIT PLAZA, Manish Nagar, Nagpur</p>
              </div>
            </div></Link>
            
            <Link href="mailto:admin@techtoniccorporate.com"><div className="flex  hover:bg-emerald-500/30 rounded-md duration-300 p-2 items-center">
              <div className="bg-teal-50 p-2 rounded-full mr-3">
                <Mail className="h-8 w-8 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-900">Email us</p>
                <p className="text-sm text-gray-500">admin@techtoniccorporate.com</p>
              </div>
            </div></Link>
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      {showToast && (
        <Toast 
          type={toastType} 
          message={toastMessage} 
        />
      )}
    </div>
    <FooterSection/>
    </div>
    
  );
};

export default HiringForm;
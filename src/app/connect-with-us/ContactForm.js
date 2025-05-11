// components/ContactForm.jsx
"use client";
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    comment: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      comment: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });
    
    try {
      const formdataNew = {
        Email: formData.email,
        Name: `${formData.firstName} ${formData.lastName}`,
        Number: formData.phoneNumber,
        Description: formData.comment
      };
      
      const response = await axios.post('/api/sendEmail', formdataNew);
      
      if (response.status === 200) {
        setFormStatus({ loading: false, success: true, error: null });
        resetForm();
        // Reset success message after 3 seconds
        setTimeout(() => {
          setFormStatus({ loading: false, success: false, error: null });
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setFormStatus({ 
        loading: false, 
        success: false, 
        error: 'Failed to send message. Please try again later.'
      });
      // Clear error after 3 seconds
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: null });
      }, 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* First Name field */}
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="block w-full px-5 py-4 text-base text-gray-900 placeholder-gray-500 border-0 border-b border-gray-200 focus:ring-0 focus:border-gray-900 focus:outline-none"
                />
              </div>
              
              {/* Last Name field */}
              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="block w-full px-5 py-4 text-base text-gray-900 placeholder-gray-500 border-0 border-b border-gray-200 focus:ring-0 focus:border-gray-900 focus:outline-none"
                />
              </div>
              
              {/* Email field */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="block w-full px-5 py-4 text-base text-gray-900 placeholder-gray-500 border-0 border-b border-gray-200 focus:ring-0 focus:border-gray-900 focus:outline-none"
                />
              </div>
              
              {/* Phone number field */}
              <div>
                <label htmlFor="phoneNumber" className="sr-only">
                  Mobile No.
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Mobile No."
                  className="block w-full px-5 py-4 text-base text-gray-900 placeholder-gray-500 border-0 border-b border-gray-200 focus:ring-0 focus:border-gray-900 focus:outline-none"
                />
              </div>
              
              {/* Comment field */}
              <div>
                <label htmlFor="comment" className="sr-only">
                  Add a Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  required
                  rows="4"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Add a Comment"
                  className="block w-full px-5 py-4 text-base text-gray-900 placeholder-gray-500 border-0 border-b border-gray-200 focus:ring-0 focus:border-gray-900 focus:outline-none resize-none"
                />
              </div>
              
              {/* Submit button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full sm:w-auto flex justify-center items-center px-16 py-4 text-lg font-medium text-emerald-600 bg-white hover:scale-[105%] duration-300 cursor-pointer border border-emerald-800 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors disabled:opacity-70"
                >
                  {formStatus.loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send request'
                  )}
                </button>
              </div>
            </div>
          </form>
          
          {/* Status message */}
          {formStatus.success && (
            <div className="mt-6 p-4 bg-green-50 rounded-md">
              <p className="text-green-700">Your message has been sent successfully!</p>
            </div>
          )}
          
          {formStatus.error && (
            <div className="mt-6 p-4 bg-red-50 rounded-md">
              <p className="text-red-700">{formStatus.error}</p>
            </div>
          )}
          
          {/* Privacy Policy and Terms of Service */}
          <div className="mt-8 text-sm text-gray-600">
            By using this form, you agree to our <Link href="/privacy-policy" className="text-emerald-600 hover:underline">Privacy Policy</Link> and <Link href="/terms-of-service" className="text-emerald-600 hover:underline">Terms of Service</Link>.
          </div>
        </div>
      </div>
    </div>
  );
}
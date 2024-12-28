"use client"
import { sendJobApplication } from '@/app/utiles/SendJobApplication';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    experience: '',
    skills: '',
    currentEmployer: '',
    resume: null,
    linkedIn: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const positions = [
    "Admin & Receptionist",
    "⁠Full-stack developer ",
    "⁠SAP FICO Trainer",
    "⁠SAP PP-QM Trainer",
    "⁠SALESFORCE Trainer",
    "Business development Executive"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      resume: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const result = await sendJobApplication(formData);
      if(result){
        setSubmitStatus({
            type: 'success',
            message: 'Your application has been submitted successfully!'
          });
        toast.success('Your application has been submitted successfully!')
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            location: '',
            position: '',
            experience: '',
            skills: '',
            currentEmployer: '',
            resume: null,
            linkedIn: ''
          });
          const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      }
      else{
        setSubmitStatus({
            type: 'error',
            message: 'Failed to submit application. Please try again.'
          });
          toast.success('Failed to submit application. Please try again.')
      }
     
      // Clear form
      
      // Clear file input
      
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit application. Please try again.'
      });
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-[90%] md:w-[50%] mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h2 className="text-2xl font-bold mb-6 w-full text-center text-teal-600">Job Application Form</h2>
      
      {submitStatus.message && (
        <div className={`mb-4 p-3 rounded text-center ${
          submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold w-full text-center">Personal Details</h3>
          
          <div>
            <label className="block text-sm font-medium mb-1">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Current Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              placeholder="City, State"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Professional Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold w-full text-center">Professional Details</h3>

          <div>
            <label className="block text-sm font-medium mb-1">Position Applied For *</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Position</option>
              {positions.map((pos, index) => (
                <option key={index} value={pos}>{pos}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Total Work Experience *</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
              placeholder="e.g., 2 years 6 months"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Relevant Skills *</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              required
              placeholder="Enter your skills, separated by commas"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Current Employer</label>
            <input
              type="text"
              name="currentEmployer"
              value={formData.currentEmployer}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Resume *</label>
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, Word documents</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold w-full text-center">Additional Information</h3>

          <div>
            <label className="block text-sm font-medium mb-1">LinkedIn Profile</label>
            <input
              type="url"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleInputChange}
              placeholder="https://linkedin.com/in/yourprofile"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-md text-white transition-colors ${
            isSubmitting 
              ? 'bg-teal-400 cursor-not-allowed' 
              : 'bg-teal-600 hover:bg-teal-700'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
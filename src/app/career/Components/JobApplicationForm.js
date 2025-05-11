"use client";
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FiUser, FiMail, FiPhone, FiMapPin, FiBriefcase, FiClock, FiTool, FiUpload, FiLinkedin } from 'react-icons/fi';
import { CgSpinner } from 'react-icons/cg';
import { sendJobApplication } from '@/app/utiles/SendJobApplication';

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
  const [focused, setFocused] = useState('');

  const positions = [
    "Admin & Receptionist",
    "Full-stack developer",
    "SAP FICO Trainer",
    "SAP PP-QM Trainer",
    "SALESFORCE Trainer",
    "Business Development Executive"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size exceeds 5MB limit');
        e.target.value = '';
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
      toast.success(`Selected: ${file.name}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const loadingToast = toast.loading('Submitting your application...');
    try {
      const result = await sendJobApplication(formData);
      toast.dismiss(loadingToast);

      if (result) {
        setSubmitStatus({ type: 'success', message: 'Application submitted successfully!' });
        toast.success('🎉 Application submitted!', { duration: 5000 });
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
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to submit. Please try again.' });
        toast.error('Submission failed!', { duration: 4000 });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      setSubmitStatus({ type: 'error', message: 'Error occurred. Try again.' });
      toast.error(`Error: ${error.message || 'Something went wrong'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-[90%] md:w-[50%] mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <Toaster position="top-center" />
      <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">Job Application Form</h2>

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
          <h3 className="text-lg font-semibold text-center text-gray-700">Personal Details</h3>

          {/* Full Name */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-gray-700">Full Name <span className="text-red-500">*</span></label>
            <div className="relative flex items-center">
              <div className={`absolute left-3 text-gray-500 ${focused === 'fullName' ? 'text-teal-600' : ''}`}
                style={{ transform: focused === 'fullName' ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s, color 0.3s' }}>
                <FiUser />
              </div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
                className="w-full p-2 pl-10 border border-zinc-300 rounded-md outline-none text-zinc-600 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                onFocus={() => setFocused('fullName')}
                onBlur={() => setFocused('')}
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-gray-700">Email <span className="text-red-500">*</span></label>
            <div className="relative flex items-center">
              <div className={`absolute left-3 text-gray-500 ${focused === 'email' ? 'text-teal-600' : ''}`}
                style={{ transform: focused === 'email' ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s, color 0.3s' }}>
                <FiMail />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
                className="w-full p-2 pl-10 border border-zinc-300 rounded-md outline-none text-zinc-600 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused('')}
              />
            </div>
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-gray-700">Phone <span className="text-red-500">*</span></label>
            <div className="relative flex items-center">
              <div className={`absolute left-3 text-gray-500 ${focused === 'phone' ? 'text-teal-600' : ''}`}
                style={{ transform: focused === 'phone' ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s, color 0.3s' }}>
                <FiPhone />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
                className="w-full p-2 pl-10 border border-zinc-300 rounded-md  outline-none text-zinc-600 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                onFocus={() => setFocused('phone')}
                onBlur={() => setFocused('')}
              />
            </div>
          </div>

          {/* Location */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-gray-700">Location <span className="text-red-500">*</span></label>
            <div className="relative flex items-center">
              <div className={`absolute left-3 text-gray-500 ${focused === 'location' ? 'text-teal-600' : ''}`}
                style={{ transform: focused === 'location' ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s, color 0.3s' }}>
                <FiMapPin />
              </div>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                placeholder="City, State"
                className="w-full p-2 pl-10 border border-zinc-300 rounded-md outline-none text-zinc-600 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                onFocus={() => setFocused('location')}
                onBlur={() => setFocused('')}
              />
            </div>
          </div>
        </div>

        {/* Professional Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center text-gray-700">Professional Details</h3>

          {/* Position */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-gray-700">Position Applied For <span className="text-red-500">*</span></label>
            <div className="relative flex items-center">
              <div className={`absolute left-3 text-gray-500 ${focused === 'position' ? 'text-teal-600' : ''}`}
                style={{ transform: focused === 'position' ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s, color 0.3s' }}>
                <FiBriefcase />
              </div>
              <select
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                required
                className="w-full p-2 pl-10 border border-zinc-300 rounded-md bg-white outline-none text-zinc-600 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                onFocus={() => setFocused('position')}
                onBlur={() => setFocused('')}
              >
                <option value="">Select Position</option>
                {positions.map((position, idx) => (
                  <option key={idx} value={position}>{position}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Experience */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-gray-700">Total Work Experience <span className="text-red-500">*</span></label>
            <div className="relative flex items-center">
              <div className={`absolute left-3 text-gray-500 ${focused === 'experience' ? 'text-teal-600' : ''}`}
                style={{ transform: focused === 'experience' ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s, color 0.3s' }}>
                <FiClock />
              </div>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                placeholder="e.g., 2 years 6 months"
                className="w-full p-2 pl-10 border border-zinc-300 rounded-md outline-none text-zinc-600 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                onFocus={() => setFocused('experience')}
                onBlur={() => setFocused('')}
              />
            </div>
          </div>

          {/* Skills */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-gray-700">Relevant Skills <span className="text-red-500">*</span></label>
            <div className="relative flex items-start">
              <div className={`absolute left-3 top-3 text-gray-500 ${focused === 'skills' ? 'text-teal-600' : ''}`}
                style={{ transform: focused === 'skills' ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s, color 0.3s' }}>
                <FiTool />
              </div>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                required
                placeholder="List your skills"
                className="w-full p-2 pl-10 border border-zinc-300 rounded-md outline-none text-zinc-600 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 h-24"
                onFocus={() => setFocused('skills')}
                onBlur={() => setFocused('')}
              />
            </div>
          </div>

          {/* Current Employer */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-gray-700">Current Employer</label>
            <div className="relative flex items-center">
              <div className={`absolute left-3 text-gray-500 ${focused === 'currentEmployer' ? 'text-teal-600' : ''}`}
                style={{ transform: focused === 'currentEmployer' ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s, color 0.3s' }}>
                <FiBriefcase />
              </div>
              <input
                type="text"
                name="currentEmployer"
                value={formData.currentEmployer}
                onChange={handleInputChange}
                placeholder="Enter your employer"
                className="w-full p-2 pl-10 border border-zinc-300 rounded-md outline-none text-zinc-600 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                onFocus={() => setFocused('currentEmployer')}
                onBlur={() => setFocused('')}
              />
            </div>
          </div>

          {/* Resume */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-gray-700">Resume <span className="text-red-500">*</span></label>
            <div className="relative flex items-center">
              <div className="absolute left-3 text-gray-500">
                <FiUpload />
              </div>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="block w-full p-2 pl-10 border border-zinc-300 rounded-md outline-none text-zinc-600 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 bg-white"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1 pl-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1 text-gray-700">LinkedIn Profile</label>
          <div className="relative flex items-center">
            <div className={`absolute left-3 text-gray-500 ${focused === 'linkedIn' ? 'text-teal-600' : ''}`}
              style={{ transform: focused === 'linkedIn' ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s, color 0.3s' }}>
              <FiLinkedin />
            </div>
            <input
              type="url"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleInputChange}
              placeholder="https://linkedin.com/in/yourprofile"
              className="w-full p-2 pl-10 border border-zinc-300 rounded-md outline-none text-zinc-600 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              onFocus={() => setFocused('linkedIn')}
              onBlur={() => setFocused('')}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-md text-white transition-all duration-200 ${
            isSubmitting ? 'bg-teal-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700 hover:shadow-lg'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <CgSpinner className="animate-spin mr-2" />
              Submitting...
            </span>
          ) : 'Submit Application'}
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;

"use client"
import { MdAttachEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { BiSolidMessageAltError } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function ContactUsDetails() {
    const [formStatus, setFormStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
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
        <div id="contact" className="w-full min-h-screen bg-teal-700 bg-opacity-15 px-3 py-10 flex items-center flex-col gap-6">
            <h1 className="text-[2.6rem] text-center leading-[2.7rem] font-semibold tracking-wider mt-10">
                Let's Build the Future Together
            </h1>
            
            <div className="w-full min-h-screen py-5 flex md:flex-row flex-col gap-4">
                {/* Left Section */}
                <div className="w-[100%] md:w-[50%] h-full py-4 pl-[5%]">
                    <h1 className="text-[2rem] md:text-[3rem] font-[500] tracking-wide leading-7">
                        We'd Love to Hear from You
                    </h1>
                    
                    <p className="text-[1rem] md:text-[1.2rem] text-zinc-700 w-[95%] leading-6 mt-8 text-center md:w-[80%]">
                        Connect with Techtonic Lab to unlock opportunities: From certifications and expert consultancy to internships and placements, we're here to support your journey to success.
                    </p>
                    
                    <div className="w-[70%] mt-10 h-auto">
                        <div className="flex px-4 md:px-8 items-center gap-2 text-[1.4rem]">
                            <MdAttachEmail className="text-[1.6rem] text-sky-700 shrink-0"/>
                            <Link href="mailto:admin@techtoniccorporate.com">
                                <div className="hover:underline underline-offset-2">
                                    admin@techtoniccorporate.com
                                </div>
                            </Link>
                        </div>
                        <div className="flex px-8 items-center gap-2 text-[1.2rem]">
                            <PiPhoneCallFill className="text-[1.4rem] text-sky-700"/>
                            <Link href="tel:+918766069947">
                                <div>+91-8766069947</div>
                            </Link>
                        </div>
                    </div>
                    
                    <h2 className="text-[1.3rem] leading-6 md:text-[1.4rem] w-full md:w-[70%] font-semibold md:leading-8 mt-10">
                        We're here to support you—reach out to Techtonic Lab for certifications, consultancy, internships, and placement opportunities!
                    </h2>
                    
                    {/* Info Cards - Desktop Only */}
                    <div className="md:block hidden">
                        <div className="flex items-center justify-center w-full h-auto pt-6 gap-3 md:gap-8">
                            {/* Support Card */}
                            <div className="w-[18rem] h-[16rem] border rounded-lg p-4 flex flex-col gap-3 bg-black text-zinc-100">
                                <div className="text-[1.5rem] font-[500] flex items-center gap-2 text-orange-400">
                                    <div className="w-10 h-10 rounded-full bg-zinc-100 grid place-items-center">
                                        <BsFillPatchQuestionFill className="text-sky-600 text-[1.8rem]"/>
                                    </div>
                                    Customer Support
                                </div>
                                <p className="px-3">
                                    Need help? Our support team is here to assist with certifications, consultancy, internships, or placements. Reach out for a seamless experience with Techtonic Lab!
                                </p>
                            </div>
                            
                            {/* Feedback Card */}
                            <div className="w-[22rem] h-[16rem] border rounded-lg p-4 flex flex-col gap-3 bg-black text-zinc-100">
                                <div className="text-[1.5rem] font-[500] flex items-center gap-2 text-orange-400">
                                    <div className="w-10 h-10 rounded-full bg-zinc-100 grid place-items-center">
                                        <BiSolidMessageAltError className="text-sky-600 text-[1.8rem]"/>
                                    </div>
                                    Feedback & Suggestions
                                </div>
                                <p className="px-3">
                                    Your feedback matters to us! Share your thoughts, suggestions, or ideas to help Techtonic Lab improve and grow. Together, we can create even better opportunities and experiences for students and professionals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right Section - Contact Form */}
                <div className="w-[100%] md:w-[50%] h-full py-4 md:pl-[5%] flex">
                    <div className="w-full md:w-[90%] h-[100%] rounded-xl shadow-md shadow-orange-400 py-8 px-5 bg-sky-700 bg-opacity-35 backdrop-blur-md flex flex-col items-center">
                        <h1 className="text-[2.5rem] md:text-[3rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-orange-700 to-zinc-900 text-center">
                            Get in Touch
                        </h1>
                        
                        <p className="w-[90%] text-[1rem] tracking-wide leading-5 text-center">
                            You can reach out to us anytime, 24/7! Whether you have questions, need assistance, or want to share your feedback, our team is always here to support you.
                        </p>
                        
                        <form onSubmit={handleSubmit} className="pt-14 space-y-5 w-full max-w-2xl">
                            {/* Name Fields */}
                            <div className="flex items-center gap-4 md:flex-row flex-col">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="px-3 py-2 outline-none md:w-[16rem] w-[22rem] rounded-md bg-zinc-100"
                                    placeholder="First Name"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="px-3 py-2 outline-none md:w-[16rem] w-[22rem] rounded-md bg-zinc-100"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                            
                            {/* Email Field */}
                            <div className="relative flex items-center">
                                <IoMail className="text-[1.3rem] text-zinc-900 absolute left-2"/>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="pl-9 w-full px-3 py-2 rounded-md bg-zinc-100"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            
                            {/* Phone Field */}
                            <div className="relative flex items-center">
                                <PiPhoneCallFill className="text-[1.3rem] text-zinc-900 absolute left-2"/>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-md bg-zinc-100 pl-9"
                                    placeholder="Phone Number"
                                    required
                                    pattern="[0-9]{10}"
                                />
                            </div>
                            
                            {/* Comment Field */}
                            <textarea
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                className="w-full h-[20vh] rounded-md bg-zinc-100 px-4 py-2"
                                placeholder="Comment"
                                required
                            />

                            {/* Submit Button and Status Messages */}
                            <div className="w-full py-5 flex flex-col items-center justify-center gap-3">
                                <button
                                    type="submit"
                                    disabled={formStatus.loading}
                                    className={`px-6 py-2 rounded-md bg-zinc-900 text-zinc-100 flex items-center gap-2
                                        ${formStatus.loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-zinc-800'}
                                        transition-all duration-300 ease-in-out min-w-[120px] justify-center`}
                                >
                                    {formStatus.loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : "Let's Talk"}
                                </button>
                                
                                {formStatus.success && (
                                    <div className="text-green-600 font-medium animate-fade-in">
                                        Message sent successfully!
                                    </div>
                                )}
                                
                                {formStatus.error && (
                                    <div className="text-red-500 font-medium animate-fade-in">
                                        {formStatus.error}
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
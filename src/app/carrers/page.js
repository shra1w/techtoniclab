"use client"
import HeaderSection from "../Components/HeaderSection";
import EachJobOpening from "./Components/EachJobOpening";
import FooterSection from "../Components/Footer";
import { useState } from "react";
import JobApplicationForm from "./Components/JobApplicationForm";

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Toaster } from "react-hot-toast";

export default function CarersPage(){
    const [carrerContact,setCarrerContact]=useState(false)
    const carrers=[
        {
          "position": "Admin & Receptionist",
          "location": "Nagpur",
          "skills": ["Communication", "Time Management", "Organizational Skills", "Customer Service"]
        },
        {
          "position": "Full-stack Developer",
          "location": "Nagpur",
          "skills": ["JavaScript", "React", "Node.js", "MongoDB", "API Development", "Version Control (Git)"]
        },
        {
          "position": "SAP FICO Trainer",
          "location": "Nagpur",
          "skills": ["SAP FICO", "Financial Accounting", "Controlling", "Training and Mentoring", "Problem-Solving"]
        },
        {
          "position": "SAP PP-QM Trainer",
          "location": "Nagpur",
          "skills": ["SAP PP", "SAP QM", "Production Planning", "Quality Management", "Training Delivery"]
        },
        {
          "position": "SALESFORCE Trainer",
          "location": "Nagpur",
          "skills": ["Salesforce CRM", "Apex Programming", "Lightning Components", "Data Management", "Training Skills"]
        },
        {
          "position": "Business Development Executive",
          "location": "Nagpur",
          "skills": ["Sales", "Lead Generation", "Client Relationship Management", "Market Research", "Negotiation"]
        }
      ]
      
    return(
        <div className="w-full min-h-screen bg-teal-700 bg-opacity-15 overflow-x-hidden">
            <HeaderSection/>
            <Toaster/>
            <div className="w-full min-h-[95vh] pt-[15vh] border border-zinc-900  ">
                
                {carrerContact?
                <div className=" relative w-full h-full shrink-0  flex flex-col items-center">
                  <h1 className=" text-[2rem] text-center leading-8 md:text-[2.6rem]">Kickstart Your Journey With Us</h1>
                  <p className=" text-[1.1rem] md:text-[1.3rem] tracking-tight md:mt-0 mt-3 text-center leading-7">Submit your details and upload your resume to explore exciting career opportunities. Let’s grow together!</p>
                  <JobApplicationForm/>
                  <div className=" absolute md:left-[10%] left-[50%] -translate-x-[50%] md:translate-x-0 text-[1.6rem] flex items-center gap-2 -top-12 md:top-2 cursor-pointer hover:underline" onClick={()=>setCarrerContact(false)}><IoIosArrowDropleftCircle className=" text-[2rem]"/>Back</div>
                </div>
                :<div className="w-full h-full shrink-0  flex flex-col items-center">
                    <h1 className=" text-[2rem] leading-8 text-center w-[80%] md:text-[3rem] font-semibold tracking-wider">Build Your Career With Us</h1>
                    <p className="md:text-[1.4rem]  text-[1rem] w-[80%] mt-4 leading-5 text-center ">Join a team passionate about empowering others to achieve their career goals and grow alongside us.</p>
                    <div className="w-full h-auto mt-10  space-y-5 flex  items-center md:justify-start justify-center flex-wrap gap-3 md:p-0 px-4  md:gap-0 md:flex-col pb-[10vh]">
                        {carrers.map((eachJob,index)=>{
                            return (
                                <EachJobOpening setCarrerContact={setCarrerContact} key={index} eachJob={eachJob}/>
                            )
                        })}
                       
                    </div>
                </div>}
            </div>
            <FooterSection/>
        </div>
    )
}
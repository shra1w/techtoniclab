"use client"
import HeaderSection from "../Components/HeaderSection";
import EachJobOpening from "./Components/EachJobOpening";
import FooterSection from "../Components/Footer";


export default function CarersPage(){
 
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
            <div className="w-full min-h-[95vh] pt-[15vh] border border-zinc-900 ">
                
                <div className="w-full h-full  flex flex-col items-center">
                    <h1 className=" text-[2rem] leading-8 text-center w-[80%] md:text-[3rem] font-semibold tracking-wider">Build Your Career With Us</h1>
                    <p className="md:text-[1.4rem]  text-[1rem] w-[80%] mt-4 leading-5 text-center ">Join a team passionate about empowering others to achieve their career goals and grow alongside us.</p>
                    <div className="w-full h-auto mt-10  space-y-5 flex  items-center md:justify-start justify-center flex-wrap gap-3 md:p-0 px-4  md:gap-0 md:flex-col pb-[10vh]">
                        {carrers.map((eachJob,index)=>{
                            return (
                                <EachJobOpening key={index} eachJob={eachJob}/>
                            )
                        })}
                       
                    </div>
                </div>
            </div>
            <FooterSection/>
        </div>
    )
}
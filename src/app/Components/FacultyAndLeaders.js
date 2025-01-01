"use client"
import { useState } from "react";
import LeadersCardDesign from "./LeadersCardDesign";
import { IoClose } from "react-icons/io5";
import { PiHandPointingFill } from "react-icons/pi";
import Rupali from "@/app/assets/Profiles/Rupali_Wankhede.png"
import shrawan from "@/app/assets/Profiles/Shrawan_Sir.png"
import Dnyaneshwari from "@/app/assets/Profiles/Dnyaneshwari_Talekar.png"
import ManishPimple_Sir from "@/app/assets/Profiles/ManishPimple_Sir.jpeg"
import Sneha_Khubalkar from "@/app/assets/Profiles/Sneha_Khubalkar.png"
import Sudhir_Sir from "@/app/assets/Profiles/Sudhir_Sir.png"
import Vivek_Sir from "@/app/assets/Profiles/Vivek_Sir.jpg"
import Harshal_Sir from "@/app/assets/Profiles/Harshal_Sir.jpg"
import Image from "next/image";

export default function FacultyAndLEaders(){
    const [showDetails,setShowDetails]=useState(false)
    const [category,setCategory]=useState(1)
    const [currentDetails,setCurrentDeatils]=useState({
        name: "Your Title",
        tag: "Your Subtitle",
        content: [
            "First point",
            "Second point",
            "Third point"
        ]
    })
    const leaders=[
        {
            name:"Rupali Wankhede",
            tag:"13+ Years of ERP Expertise",
            content:[
                "A highly experienced professional with over 13 years of expertise in the ERP domain and a robust technical background in computer science, offering a proven track record in delivering complex IT solutions and innovations. With 8+ years as a Senior Faculty, I bring a deep understanding of education, training, and IT consulting, empowering the next generation of professionals with the knowledge and skills needed to excel in today’s fast-evolving tech landscape.",
 "Passionate about bridging the gap between academia and industry, I have consistently fostered growth in both technical expertise and leadership, ensuring that students and clients alike receive high-quality, impactful guidance.",
"Whether delivering cutting-edge ERP solutions, developing academic curricula, or providing expert IT consulting, I am committed to driving transformation and helping organizations and individuals thrive in the digital era."

            ],
            profile:Rupali

        },
        {
            name:"Dnyaneshwari Talekar",
            tag:"10+ years in HR, recruitment, training, and development",
            content:[
                "A seasoned Human Resources (HR) professional with over 10 years of experience in corporate training and development, staffing, and end-to-end recruitment for both IT and non-IT sectors.",
                "I specialize in providing comprehensive solutions that enhance organizational growth, ensuring the right talent is sourced, trained, and aligned with company goals.",
                "Throughout my career, I have had the privilege of working with leading organizations such as Capgemini, Accenture, Wipro, CSI Software Pvt. Ltd. (UK), and Chate Coaching Classes, offering strategic consultation on sourcing, recruitment, and training activities.",
                "My experience spans managing recruitment processes, driving employee development programs, and creating talent acquisition strategies that address both current and future organizational needs.",
                "I am deeply passionate about supporting freshers and job seekers in realizing their professional aspirations, guiding them through the complexities of career development and securing their dream jobs.",
                "By focusing on skill development, personalized coaching, and mentorship, I am dedicated to making a positive impact on individuals' careers, helping them navigate the job market with confidence and success."
            ] ,
            profile:Dnyaneshwari
        },
        {
            name:"Sneha Khubalkar",
            tag:"8+ years in teaching, ERP, and design engineering.",
            content:[
                "An accomplished professional with a robust academic foundation and versatile work experience, I hold an M.Tech in Power Electronics & Power Systems. My career spans over eight years across diverse domains, reflecting my adaptability, expertise, and commitment to excellence.",
                "I began my journey with two years of teaching experience in the IT field, where I honed my communication, mentoring, and technical skills. Subsequently, I gained two years of industrial experience in ERP, acquiring in-depth knowledge of enterprise processes and operational efficiency.",
                "For the past four years, I have been thriving as a Designer Engineer, leveraging my technical acumen and problem-solving abilities to design innovative solutions that meet industry standards. My diverse expertise equips me with a unique perspective to deliver optimal outcomes in complex, multidisciplinary environments.",
                "Driven by a passion for continuous learning and professional growth, I excel in blending my academic knowledge and practical experience to contribute effectively to organizational success."
              ],
              profile:Sneha_Khubalkar
        }

    ]

    const faculty=[
        {
            name:"Manish Pimpale Sir",
            tag:"27+ years in IT, database management, AI, cloud solutions.",
            content:[
                "A seasoned IT professional with over 25 years of experience in database management, cloud data solutions, artificial intelligence, and enterprise architecture.",
                "Renowned for designing and implementing data-driven strategies, this expert has successfully delivered solutions in complex domains such as banking, retail, and finance.",
                "Key expertise includes:",
                "Cloud Data Management: Specialized in Oracle, Teradata, Snowflake, MongoDB, and major cloud platforms (AWS, Azure, Google Cloud).",
                "AI & Machine Learning: Developed and deployed AI models, enterprise architectures (TOGAF), and data science infrastructures.",
                "Data Migration & Optimization: Designed and executed data migration pipelines, backup systems, and performance tuning solutions.",
                "Training & Consultancy: Conducted 100+ corporate training sessions across leading IT firms and developed comprehensive training programs."
            ],
            profile:ManishPimple_Sir

        },
        {
            name:"Shrawan Sir",
            tag:"12+ years in IT consulting, ERP, supply chain management.",
            content: [
                "12+ Years of Industry Experience: Extensive expertise in IT consulting, technology, and supply chain management, with a proven record of delivering robust solutions for FMCG, Manufacturing, Oil & Gas, Chemicals, Automobile, and Fashion industries.",
                "Specialist in ERP and Cloud Technologies: Skilled in SAP, S/4 HANA, Cloud, ECC, and system integration, with hands-on experience in ERP implementation, solution design, and acting as a supply chain team lead for high-impact projects.",
                "Project Leadership & Business Strategy: Successfully led project and operations teams, conducted workshops, aligned project scope, and delivered innovative solutions to meet business goals. Identified opportunities for business expansion and organizational restructuring to optimize processes.",
                "Academic Excellence: Holds a Master’s in Supply Chain Management from Mumbai University and a B.Tech in Petrochemical Engineering from Amravati University, blending technical proficiency with strategic supply chain expertise.",
                "End-to-End Solution Delivery: Adept at collaborating with stakeholders, addressing business needs, and implementing best-in-class solutions to achieve operational excellence and business transformation."
              ],
              profile:shrawan
        },
        
        
        {
            name:"Sudhir Sir",
            tag:"12+ years in business intelligence, strategy, client relations, leadership.",
            content:[
                "Extensive Experience in Strategic Decision-Making: Over a decade of expertise in business intelligence, market research, and corporate strategy, driving growth and innovation as a Category Lead for a global MNC across FMCG, Pharma, and Automobile sectors.",
                "Global Client Relations & Business Development: Successfully built and managed client relationships in US, UK, Russia, Poland, Spain, and India, delivering customized solutions and fostering long-term partnerships that contribute to sustained business growth.",
                "Corporate Grooming & Leadership Mentorship: A strong advocate for professional excellence, providing corporate training, career guidance, and leadership mentoring through structured internship programs and job assistance initiatives.",
                "Holistic Approach to Professional Growth: Passionate about spirituality and holistic development, integrating these principles to inspire balanced growth, well-being, and improved organizational outcomes.",
                "Educational & Technical Excellence: Holds an MBA from Mumbai University and a Petrochemical Engineering degree, leveraging technical knowledge and strategic insight to create impactful business solutions across diverse industries."
              ],
              profile:Sudhir_Sir
        },
        {
            name:"Harshal Sir",
            tag:"6+ years in sales, marketing, ERP, supply chain, and education.",
            content:[
                "6+ Years of Experience Across Diverse Industries: Proven expertise in sales, marketing, automobile, manufacturing, and education, driving growth and operational excellence across these domains.",
                "IT Expertise in Cutting-Edge Technologies: Skilled in ERP, SAP, S/4 HANA, Cloud Computing, and UI/UX Design, with a strong understanding of enterprise systems and their role in enhancing organizational efficiency.",
                "Supply Chain & Enterprise Architecture Expertise: Adept at designing and implementing effective supply chain solutions and enterprise architecture frameworks, ensuring seamless integration and scalability.",
                "Educational Background in Engineering: Holds a B.E. in Mechanical Engineering from Nagpur University, blending technical knowledge with strategic insight to solve complex business challenges.",
                "Innovative Problem Solver: Passionate about leveraging technology and strategic planning to deliver robust solutions that drive growth, streamline processes, and meet business objectives."
              ],
              profile:Harshal_Sir
        },
        {
            name:"Vivek Sir",
            tag:"5+ years in data analytics, Power BI, SQL, teaching.",
            content:[
                "Vivek Sir, an esteemed educator at TECHTONIC-LAB, brings over 5 years of combined industry and teaching experience to the classroom, making him a respected figure in the field of data analytics.",
                "With a strong foundation in extracting valuable insights from complex datasets, Vivek has mastered the art of transforming raw data into actionable business intelligence that drives impactful decision-making.",
                "His expertise in Power BI stands out, allowing him to create dynamic, interactive dashboards that offer real-time insights to organizations, empowering them to make data-driven decisions with confidence.",
                "Additionally, Vivek Sir is highly skilled in SQL, the cornerstone of database management and querying, which is integral to the successful implementation of data solutions across various industries.",
                "Throughout his career, Vivek Sir has worked with diverse sectors, applying data analytics to enhance operational efficiency, improve processes, and drive strategic business outcomes.",
                "At TECHTONIC-LAB, he is committed to bridging the gap between theory and practice, ensuring students not only master the essential tools of data analytics but also gain practical insights that prepare them for a successful career in the field.",
                "His unique teaching style combines industry experience with a practical, hands-on approach, equipping students with the critical skills they need to thrive in today’s data-driven world.",
                "Vivek's dedication to nurturing the next generation of data professionals has made him a valuable mentor and guide for aspiring data analysts."
              ] ,
              profile:Vivek_Sir
        }

    ]
    return(
        <div className="  w-full bg-teal-700 bg-opacity-15 flex flex-col gap-5  items-center ">
            <h1 className=" text-[2.4rem] text-center leading-9 font-[500] py-3">Our Expert Leadership and Faculty</h1>
            <div className="w-[90%] h-auto bg-zinc-900 rounded-3xl py-6 space-y-6 ">
                
                <div className=" w-[100%] py-6  flex flex-col items-center justify-center">
                <h1 className=" text-[2.2rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-orange-200 to-sky-300">Visionary Leaders</h1>
                <p className=" text-[1rem] md:text-[1.3rem] text-center text-zinc-300 w-[90%] md:w-[50%] relative mt-5">Guided by experienced leaders, we drive innovation and excellence to shape a brighter future in IT education and training.</p>
                </div>
                <div className=" relative w-full h-auto py-3 mt-6 flex justify-center gap-16 items-center flex-wrap">
                    {leaders.map((each,index)=>{
                        return(
                            <div  key={index} onClick={()=>{setCurrentDeatils(each);setCategory(1)}}>
                        <LeadersCardDesign eachLeader={each} setShowDetails={setShowDetails} setCategory={setCategory}/>

                            </div>
                        )   
                    })}
                
                {category===1&&<div className={` ${showDetails?"scale-x-100 opacity-100":" scale-x-0 opacity-0"}  overflow-hidden origin-left duration-500 md:w-[70vw] w-[90vw] rounded-xl h-screen md:h-[70vh] absolute flex md:flex-row flex-col gap-3 bg-zinc-100 shadow-md shadow-zinc-800 p-5`}>
                    <div className={`w-[40%] relative ${showDetails ? "scale-100 opacity-100 delay-700" : "scale-0 opacity-0"} h-full border bg-zinc-300 rounded-2xl overflow-hidden`}>
  <Image 
    src={currentDetails.profile || ""} 
    alt="profile" 
    className="w-full h-full object-cover"
    priority
  />
</div>
                    <div className= {`w-[60%] ${showDetails?"scale-100 opacity-100 delay-1000":" scale-0 opacity-0"} h-full py-2 px-3 flex flex-col items-center`} >
                        <h1 className=" text-zinc-950 font-semibold text-[2.6rem]">{currentDetails?.name}</h1>
                        <p className=" text-zinc-700 text-[1.2rem] text-center">{currentDetails?.tag}</p>
                        <div className=" py-4 overflow-y-auto flex flex-col gap-2 pl-4">
                            {currentDetails?.content.map((eachContent,index)=>{
                                return(
                                <div key={index} className=" flex gap-3">
                                <PiHandPointingFill className=" shrink-0 text-[1.6rem] rotate-90"/>
                                <p>{eachContent}</p>
                            </div>)
                            })}
                        </div>
                    </div>
                    <div className=" absolute right-4 top-3 w-8 h-8 grid place-items-center text-rose-600 text-[1.4rem] cursor-pointer hover:scale-105 duration-300 bg-zinc-100" onClick={()=>setShowDetails(false)}>
                        <IoClose/>
                    </div>
                </div>}
                </div>

                <div className=" w-[100%] py-6  flex flex-col items-center justify-center">
                <h1 className=" text-[2.2rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-orange-200 to-sky-300">Expert Faculty</h1>
                <p className=" text-[1rem] md:text-[1.3rem] text-center text-zinc-300 w-[90%] md:w-[50%] relative mt-5">Learn from industry experts who bring real-world knowledge and passion to every session, ensuring your success.</p>
                </div>
                <div className=" relative w-full h-auto py-3 md:px-[10%] mt-6 flex flex-wrap justify-center gap-x-16 gap-y-14 items-center">
                    {faculty.map((eachFaculty,index)=>{
                        return(
                            <div  key={index} onClick={()=>{setCurrentDeatils(eachFaculty);setCategory(2)}}>
                                <LeadersCardDesign eachLeader={eachFaculty} setShowDetails={setShowDetails} setCategory={setCategory}/>
                            </div>
                            
                            
                        )
                    })}
                    {category===2&&<div className={` ${showDetails?"scale-x-100 opacity-100":" scale-x-0 opacity-0"}  overflow-hidden origin-left duration-500 md:w-[70vw] w-[90vw] rounded-xl h-screen md:h-[70vh] absolute flex md:flex-row flex-col gap-3 bg-gradient-to-tr from-sky-300 via-orange-200 to-sky-300 shadow-md shadow-zinc-800 p-5`}>
                    <div className={`w-[40%] ${showDetails?"scale-100 opacity-100 delay-700":" scale-0 opacity-0"} h-full border bg-zinc-300 rounded-2xl`}></div>
                    <div className= {`w-[60%] ${showDetails?"scale-100 opacity-100 delay-1000":" scale-0 opacity-0"} h-full py-2 px-3 flex flex-col items-center`} >
                        <h1 className=" text-zinc-950 font-semibold text-[2.6rem]">{currentDetails?.name}</h1>
                        <p className=" text-zinc-700 text-[1.2rem] text-center">{currentDetails?.tag}</p>
                        <div className=" py-4 overflow-y-auto flex flex-col gap-2 pl-4">
                            {currentDetails?.content.map((eachContent,index)=>{
                                return(
                                <div key={index} className=" flex gap-3">
                                <PiHandPointingFill className=" shrink-0 text-[1.6rem] rotate-90"/>
                                <p>{eachContent}</p>
                            </div>)
                            })}
                        </div>
                    </div>
                    <div className=" absolute right-4 top-3 w-8 h-8 grid place-items-center text-rose-600 text-[1.4rem] cursor-pointer hover:scale-105 duration-300 bg-zinc-100" onClick={()=>setShowDetails(false)}>
                        <IoClose/>
                    </div>
                </div>}
                </div>
                
            </div>
            
        </div>
    )
}
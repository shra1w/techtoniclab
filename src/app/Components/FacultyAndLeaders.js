import LeadersCardDesign from "./LeadersCardDesign";

export default function FacultyAndLEaders(){
    const leaders=[
        {
            name:"Rupali Wankhede",
            tag:"13+ Years of ERP Expertise",
            content:[
                "A professional with 13+ years in the ERP domain and a strong computer science background, specializing in complex IT solutions and innovations. With 8+ years as a Senior Faculty, I excel in education, training, and IT consulting, empowering the next generation of tech professionals.",
                "Passionate about bridging academia and industry, I foster growth in technical expertise and leadership, providing impactful guidance to students and clients.",
                "Committed to driving transformation, I deliver innovative ERP solutions, develop academic curricula, and provide expert IT consulting to help organizations and individuals thrive in the digital era."
            ]

        },
        {
            name:"Dnyaneshwari Talekar",
            tag:"10+ years in HR, recruitment, training, and development",
            content:[
                "10+ years in HR, specializing in recruitment, training, and development for IT and non-IT sectors.",
"Worked with top organizations (Capgemini, Accenture, Wipro, CSI Software) to drive talent acquisition and employee development.",
"Passionate about mentoring freshers and job seekers, guiding them through career development and job market success."
            ] 
        },
        {
            name:"Sneha Khubalkar",
            tag:"8+ years in teaching, ERP, and design engineering.",
            content:[
                "M.Tech in Power Electronics & Power Systems with 8+ years of diverse experience.",
"2 years of teaching in IT, honing communication, mentoring, and technical skills.",
"2 years of ERP experience, gaining expertise in enterprise processes and operational efficiency.",
"4 years as a Design Engineer, applying technical acumen to create innovative, industry-standard solutions.",
"Passionate about continuous learning and blending academic knowledge with practical experience."
            ] 
        }

    ]

    const faculty=[
        {
            name:"Manish Pimpale Sir",
            tag:"25+ years in IT, database management, AI, cloud solutions.",
            content:[
                "25+ years in IT with expertise in database management, cloud solutions, AI, and enterprise architecture.",
                "Experienced in delivering data-driven strategies across banking, retail, and finance.",
                "Cloud Data Management: Specialized in Oracle, Teradata, Snowflake, MongoDB, AWS, Azure, and Google Cloud.",
                "AI & Machine Learning: Developed AI models, enterprise architectures (TOGAF), and data science infrastructures.",
                "Data Migration & Optimization: Designed data migration pipelines, backup systems, and performance tuning solutions.",
                "Conducted 100+ corporate training sessions and developed training programs for leading IT firms.",
            ]

        },
        {
            name:"Vivek Sir",
            tag:"5+ years in data analytics, Power BI, SQL, teaching.",
            content:[
                "5+ years of industry and teaching experience in data analytics.",
"Expertise in Power BI for creating dynamic, interactive dashboards with real-time insights.",
"Skilled in SQL for database management and querying, essential for data solutions.",
"Applied data analytics across various sectors to improve efficiency and drive business outcomes.",
"Committed to bridging theory and practice, preparing students for successful careers in data analytics.",
"Hands-on teaching approach, combining industry experience to equip students with critical data skills."
            ] 
        },
        {
            name:"Shrawan Sir",
            tag:"12+ years in IT consulting, ERP, supply chain management.",
            content:[
                "12+ years of experience in IT consulting, ERP, and supply chain management, with expertise in FMCG, Manufacturing, Oil & Gas, Chemicals, Automobile, and Fashion industries.",
                "Skilled in SAP, S/4 HANA, Cloud, ECC, and system integration; hands-on experience in ERP implementation and solution design.",
                "Led project teams, conducted workshops, and delivered innovative solutions for business goals and process optimization.",
                "Master’s in Supply Chain Management and B.Tech in Petrochemical Engineering, combining technical and strategic expertise.",
                "Experienced in end-to-end solution delivery, collaborating with stakeholders to achieve operational excellence and business transformation."
            ] 
        },
        {
            name:"Sudhir Sir",
            tag:"10+ years in business intelligence, strategy, client relations, leadership.",
            content:[
                "10+ years of expertise in business intelligence, market research, and corporate strategy, driving growth as Category Lead for a global MNC in FMCG, Pharma, and Automobile sectors.",
"Built and managed client relationships in the US, UK, Russia, Poland, Spain, and India, delivering customized solutions for sustained business growth.",
"Provided corporate training, career guidance, and leadership mentorship through structured internships and job assistance programs.",
"Passionate about holistic development, integrating spirituality and well-being to inspire balanced growth and improved organizational outcomes.",
"MBA from Mumbai University and a degree in Petrochemical Engineering, applying technical and strategic insights to create impactful business solutions."
            ] 
        },
        {
            name:"Harshal Sir",
            tag:"6+ years in sales, marketing, ERP, supply chain, and education.",
            content:[
                "6+ years of expertise in sales, marketing, automobile, manufacturing, and education, driving growth and operational excellence.",
"Skilled in ERP, SAP, S/4 HANA, Cloud Computing, and UI/UX Design, enhancing organizational efficiency.",
"Expertise in supply chain solutions and enterprise architecture, ensuring seamless integration and scalability.",
"B.E. in Mechanical Engineering from Nagpur University, blending technical knowledge with strategic insight.",
"Passionate about leveraging technology and strategic planning to solve business challenges and drive growth."
            ] 
        }

    ]
    return(
        <div className="  w-full bg-gradient-to-br from-sky-300 flex flex-col gap-5  items-center via-orange-200 to-sky-300">
            <h1 className=" text-[2.4rem] font-[500] py-3">Our Expert Leadership and Faculty</h1>
            <div className="w-[90%] h-auto bg-zinc-900 rounded-3xl py-6 space-y-6 ">
                
                <div className=" w-[100%] py-6  flex flex-col items-center justify-center">
                <h1 className=" text-[2.2rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-orange-200 to-sky-300">Visionary Leaders</h1>
                <p className=" text-[1.3rem] text-center text-zinc-300 w-[50%] relative mt-5">Guided by experienced leaders, we drive innovation and excellence to shape a brighter future in IT education and training.</p>
                </div>
                <div className=" w-full h-auto py-3 mt-6 flex justify-center gap-16 items-center">
                    {leaders.map((each,index)=>{
                        return(
                            <div  key={index}>
                        <LeadersCardDesign eachLeader={each}/>

                            </div>
                        )   
                    })}
                
                
                </div>

                <div className=" w-[100%] py-6  flex flex-col items-center justify-center">
                <h1 className=" text-[2.2rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-orange-200 to-sky-300">Expert Faculty</h1>
                <p className=" text-[1.3rem] text-center text-zinc-300 w-[50%] relative mt-5">Learn from industry experts who bring real-world knowledge and passion to every session, ensuring your success.</p>
                </div>
                <div className=" w-full h-auto py-3 md:px-[10%] mt-6 flex flex-wrap justify-center gap-x-16 gap-y-14 items-center">
                    {faculty.map((eachFaculty,index)=>{
                        return(
                            <div  key={index}>
                                <LeadersCardDesign eachLeader={eachFaculty}/>
                            </div>
                            
                            
                        )
                    })}
                </div>
                
            </div>
            
        </div>
    )
}
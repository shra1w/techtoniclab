"use client"
import Image from "next/image";
import FooterSection from "../Components/Footer";
import HeaderSection from "../Components/HeaderSection";
import svgImage from "@/app/assets/aboutsvg.svg"
import svgOffice from "@/app/assets/officeabout.svg"
import carrerGrow from "@/app/assets/about/development.png"
import leader from "@/app/assets/about/leader.png"
import knowledge from "@/app/assets/about/knowledge.png"
import lifelong from "@/app/assets/about/lifelong.png"

export default function AboutSection() {
    const cards = [
        {
            "cardName": "Career Growth",
            "description": "Achieve your professional dreams confidently.",
            "icon": carrerGrow
        },
        {
            "cardName": "Expert Guidance",
            "description": "World-class mentorship and resources for growth.",
            "icon": leader
        },
        {
            "cardName": "Inclusive Opportunities",
            "description": "A platform for growth and inclusivity.",
            "icon": knowledge
        },
        {
            "cardName": "Lifelong Success",
            "description": "Focused on your long-term career success.",
            "icon": lifelong
        }
    ]

    return (
        <div className="w-full min-h-screen bg-teal-700 bg-opacity-15">
            <HeaderSection />
            
            <main className="container mx-auto px-4 py-16">
                {/* Main content section */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Left side - Images */}
                    <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[700px] hidden md:block">
                        <Image 
                            src={svgImage} 
                            alt="aboutSvg" 
                            className="absolute w-full h-full object-contain"
                        />
                        <Image 
                            src={svgOffice} 
                            alt="aboutOffice" 
                            className="absolute w-4/5 h-4/5 object-contain left-[10%] top-[10%] z-10"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left md:pt-0 pt-[5%] mt-[5%]">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
                            Empowering Careers, Transforming Lives
                        </h1>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl">
                            We are dedicated to guiding individuals toward fulfilling their career aspirations. 
                            With personalized support and expert training, we help unlock your potential and 
                            connect you to the right opportunities.
                        </p>
                        <h2 className="text-2xl md:text-3xl text-teal-600 font-semibold mb-12">
                            What Our Vision Is
                        </h2>

                        {/* Cards grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                            {cards.map((card, index) => (
                                <div 
                                    key={index} 
                                    className="relative bg-zinc-100 rounded-lg p-6 pt-16 border border-zinc-400 
                                             shadow-lg hover:-translate-y-1 transition-transform duration-300"
                                >
                                    {/* Icon circle */}
                                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                                                  w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center">
                                        {card.icon&&<Image 
                                            src={card.icon} 
                                            alt={card.cardName} 
                                            className="w-12 h-12 object-contain"
                                        />}
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3 text-center">
                                        {card.cardName}
                                    </h3>
                                    <p className="text-center text-gray-600">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <FooterSection />
        </div>
    )
}
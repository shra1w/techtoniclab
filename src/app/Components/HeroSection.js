"use client"
import Image from "next/image";
import hero1 from "@/app/assets/heroImagefortl.jpg"
import { Kanit,Outfit } from 'next/font/google'
import start from "@/app/assets/Icons/starfall.svg"
import globe from "@/app/assets/Icons/globe.png"
import BoxesDesign from "./BoxesDesign";
import bell from "@/app/assets/notify.png"
import { FaCalendarCheck } from "react-icons/fa6";
import boyWork from "@/app/assets/boyWork.png"
import { Outfit } from 'next/font/google'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const kanit = Kanit({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
})

const outfit = Outfit({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
})

export default function HeroSection() {
    useGSAP(()=>{
        const heroTl=gsap.timeline()
        heroTl.from('.smallLeftname',{
            y:-30,
            opacity:0,
            duration:0.4,
            delay:1
        })
        heroTl.from('.smallLeftnameDiv',{
            scaleX:0,
            duration:0.4,
        })
        heroTl.from('.start',{
            x:-40,
            y:40,
            opacity:0,
            duration:0.3,
        })
        heroTl.from('.bigText',{
           x:-60,
           stagger:0.2,
           duration:0.6,
           opacity:0 
        })
        heroTl.from('.image',{
            x:50,
            opacity:0,
            duration:0.6,
        })
        heroTl.from('.bigTextCircle',{
            scaleX:0,
            duration:0.4,
            display:"none"
        })
        heroTl.from(".bigTextbutton",{
            scaleX:0,
            duration:0.2
        })
        heroTl.from('.bigTextbuttonCalen',{
            scaleX:0,
            duration:0.3,
        })
        heroTl.from('.bigTextbuttonCalenText',{
            x:-20,
            opacity:0,
            duration:0.2,
        })
        heroTl.from(".globeBg",{
            scaleX:0,
            duration:0.4
        })
        heroTl.from('.globe',{
            scaleX:0,
            duration:0.2,
        })
        heroTl.from('.globText',{
            x:-20,
            opacity:0,
            duration:0.2,
        })
        heroTl.from('.globeBg bell',{
            scale:0,
            duration:0.2,
        })
        heroTl.from('.layout',{
            scaleX:0,
            duration:0.4,
            rotate:"360deg"
        })
        heroTl.from('.layout-text',{
            scaleX:0,
            duration:0.7,
            opacity:0
        })
        
        heroTl.from('.layout-textphone',{
            scaleX:0,
            duration:0.7,
            opacity:0,
            delay:-0.8
        })
    })
    
    return (
        <div className="w-full min-h-screen bg-gradient-to-tr from-sky-300 via-orange-200 to-sky-300">
            <div className="relative w-full h-full p-6 flex items-center  gap-5 max-w-screen mx-auto">

                <div className=" md:relative z-20 absolute left-0 top-0 md:w-[60%] w-[90%] h-screen  rounded-md pt-20 px-6 ">

                    <div className="flex md:opacity-100 md:scale-100 scale-0 opacity-0 flex-col items-start relative">
                        <div className={`uppercase  tracking-wider w-[50%] leading-5 text-[1.2rem] flex items-center gap-1 relative ${kanit.className}`}>
                            <span className="smallLeftname">Gain internships </span>
                            <div className="w-32 h-4 smallLeftnameDiv origin-left rounded-full border-2 border-zinc-950"></div>
                            <Image 
                                src={start} 
                                alt="star" 
                                className=" start absolute right-0 w-20 -top-8"
                            />
                        </div>
                        <div className={`uppercase tracking-wider w-[35%] leading-5 text-[1.2rem] flex flex-wrap ${kanit.className}`}>
                        {"and secure placements to kickstart your career in the IT industry!".split(' ').map((char, index) => {
                            return(
                                <span className=" smallLeftname mr-2" key={index}>{char}</span>
                            )})}
                            
                        </div>
                    </div>
                    <BoxesDesign/>
                    <div className="w-[100%] h-[60%]  absolute bottom-0 flex flex-col md:items-start items-center text-[4.2rem] md:text-[7rem] pb-10 justify-center leading-[5rem] md:text-zinc-950 text-zinc-100 md:leading-[7rem]">
                        <span className="bigText">Empowering</span>
                        <span className="relative flex items-center">
                            <span className="bigText">Future</span> 
                            <span className=" bigTextCircle origin-bottom-left w-16 h-16 md:w-24 md:h-24 ml-4 flex justify-center bg-sky-500 rounded-r-full rounded-tl-full rounded-bl-[5px] "></span>
                            <span className=" bigText text-orange-400 pl-4">IT</span> 
                        </span>
                        <span className="bigText">Professionals</span>
                        <div className="w-full h-auto pt-6 flex  pl-4   ">
                            <div className="w-56  bigTextbutton h-10 rounded-full bg-zinc-100 text-[1.1rem] flex items-center px-2">
                                <div className="w-8 h-8 rounded-full bg-zinc-950 grid place-items-center text-base text-zinc-100 bigTextbuttonCalen">
                                    <FaCalendarCheck/>
                                </div>
                                <h1 className={`${outfit.className} pl-3 bigTextbuttonCalenText text-zinc-900`}>Book Your Future</h1>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className=" md:relative  absolute left-0 top-0  w-[100%] m-auto   md:w-[35%] h-[100vh] md:h-[80vh]   z-10 rounded-2xl grid place-items-center ">
                    <div className=" image w-full h-full relative overflow-hidden rounded-2xl shadow-md shadow-zinc-500 bg-zinc-200">
                        <Image 
                            src={hero1} 
                            alt="hero1" 
                            className="  w-full h-full object-cover"
                            priority
                        />
                    </div>
                    <div className="absolute -left-24 top-16 w-[15rem] h-auto hidden md:flex items-center gap-2 globeBg origin-left  bg-zinc-100 rounded-xl px-3 py-1">
                        <div className="w-14 h-[90%] shrink-0 rounded-xl flex items-center">
                            <Image 
                                src={globe} 
                                alt="globe" 
                                className=" globe w-full h-full object-contain"
                            />
                        </div>
                        <h1 className={`${kanit.className} globText text-zinc-600 tracking-wide font-[500] text-base leading-4 uppercase`}>
                            Shaping careers, one student at a time.
                        </h1>
                        <div className=" bell w-11 h-11 rounded-full bg-zinc-100 grid place-items-center overflow-hidden absolute -left-6 -top-6">
                            <Image 
                                src={bell} 
                                alt="notification" 
                                className="w-8"
                            />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
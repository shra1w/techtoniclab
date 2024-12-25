"use client"
import Image from "next/image";
import hero1 from "@/app/assets/heroImage.png"
import { Kanit,Outfit } from 'next/font/google'
import BoxesDesign from "./BoxesDesign";
import bell from "@/app/assets/notify.png"
import { FaCalendarCheck } from "react-icons/fa6";
import boyWork from "@/app/assets/boyWork.png"
import { Outfit } from 'next/font/google'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import leadership from "@/app/assets/Icons/leadership.png"
import skill from "@/app/assets/Icons/skill.png"
import { HiArrowDownOnSquareStack } from "react-icons/hi2";

import { GrRadialSelected } from "react-icons/gr";

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
        <div className="w-full min-h-[100vh]  bg-teal-700 bg-opacity-15">
            <div className="relative  w-full h-full shrink-0 p-6 flex items-center  gap-5 max-w-screen mx-auto pt-[6%]  ">
                <div className="w-[50%] h-[75vh]  relative flex justify-center items-center overflow-hidden">
                    <div className=" w-[30rem] h-[30rem] rounded-full bg-teal-600 bg-opacity-80 absolute -bottom-20"></div>

                    <div className=" w-[24rem] h-[24rem] flex justify-center items-center rounded-full bg-teal-600 bg-opacity-30 absolute right-24">
                    <div className=" w-[20rem] h-[20rem] rounded-full bg-teal-600 bg-opacity-80 backdrop-blur-[1px] absolute right-10"></div>

                    </div>
                    <Image src={hero1} alt="hero" className=" absolute bottom-0 w-[36rem]"/>

                </div>
                <div className="w-[50%] h-[75vh]  relative flex justify-center flex-col items-center overflow-hidden">

                   <div className=" relative flex flex-col  pl-[13%] text-[3.7rem] leading-[3.4rem] tracking-tight font-semibold text-zinc-950">
                        <h1 className=" text-[1.6rem] mb-2 w-auto flex gap-2 uppercase text-teal-600 font-semibold  text-start"><span>Accelerate</span> <span>Your</span> <span>Career</span> <span>Growth</span></h1>
                    <h1>Empowering</h1>
                    <h1>Future IT Professionals</h1>
                    <p className=" text-[1.3rem]   text-zinc-700  leading-6 mt-4 w-[70%] text-wrap">Unlock your potential with expert guidance tailored to help you land your dream job.
                    Start your journey toward a brighter future today</p>
                    <Link href="#contact"><div className="w-56 mt-5  group  h-10 rounded-full bg-teal-600 hover:bg-zinc-900 hover:bg-opacity-100 duration-300  bg-opacity-35 text-[1.1rem] flex items-center px-1 ">
                                <div className="w-8 h-8 rounded-full group-hover:bg-zinc-100 bg-zinc-950 grid duration-300 place-items-center text-base group-hover:text-zinc-900 text-zinc-100 ">
                                    <FaCalendarCheck/>
                                </div>
                                <h1 className={`${outfit.className} pl-3  tracking-wider text-zinc-900 group-hover:text-teal-500 duration-300`}>Book Your Future</h1>
                            </div></Link>
                   </div>

                </div>

               
            </div>
            <div className=" w-[full h-[90vh]  relative flex justify-center items-center">
                <div className=" w-[150%] h-full absolute rotate-[5deg] bg-zinc-100 px-4 flex items-center ">
                    <div className=" w-[55%]  h-full  flex justify-between items-start relative ">
                        <div className=" absolute w-1 top-0 left-[50%] -rotate-[5deg] h-[8rem] border border-teal-600 bg-teal-600 rounde-b-md ">
                            <div className=" absolute -bottom-16 left-6 flex flex-col">
                                <Image src={leadership} alt="leader" className=" w-16"/>
                                <div className=" w-10 h-10 rounded-full bg-teal-600 text-[1.8rem]  grid place-items-center  absolute  -left-20 text-zinc-100">1</div>
                                <h1 className=" w-[40%] text-semibold leading-5 text-[1.2rem]">Personalized Career Coaching</h1>
                            </div>
                            <div className="absolute -bottom-[1.9rem] -left-4 text-[2rem]  text-teal-600"><GrRadialSelected/></div>
                        </div>
                        <div className=" absolute w-1 top-0 left-[65%] -rotate-[5deg] h-[16rem] border border-teal-600 bg-teal-600 rounde-b-md">
                            <div className=" absolute -bottom-16 left-6 flex flex-col">
                                <Image src={skill} alt="leader" className=" w-16"/>
                                <div className=" w-10 h-10 rounded-full bg-teal-600 text-[1.8rem]  grid place-items-center  absolute  -left-20 text-zinc-100">2</div>
                                <h1 className=" w-[40%] text-semibold leading-5 text-[1.2rem]">Skill Enhancement Resources</h1>
                            </div>
                            <div className="absolute -bottom-[1.9rem] -left-4 text-[2rem]  text-teal-600"><GrRadialSelected/></div>

                        </div>
                        <div className=" absolute w-1 top-0 left-[80%] -rotate-[5deg] h-[30rem] border border-teal-600 bg-teal-600 rounde-b-md">

                            <div className=" absolute -bottom-16 left-6 flex flex-col">
                                <Image src={skill} alt="leader" className=" w-16"/>
                                <div className=" w-10 h-10 rounded-full bg-teal-600 text-[1.8rem]  grid place-items-center  absolute  -left-20 text-zinc-100">2</div>
                                <h1 className=" w-[40%] text-semibold leading-5 text-[1.2rem]">Job & Internship Matching</h1>
                            </div>
                            <div className="absolute -bottom-[1.9rem] -left-4 text-[2rem]  text-teal-600"><GrRadialSelected/></div>

                        </div>

                    </div>
                    <div className=" w-[50%] h-full  flex flex-col justify-center items-start pl-[5%] -rotate-[5deg] mb-20">
                        <h1 className=" text-[1.5rem] text-zinc-900">Land Your Dream Job</h1>
                        <h1 className=" text-[3rem] font-semibold text-teal-700 uppercase">In just 3 steps</h1>
                        <p className=" text-[1.2rem] w-[50%]">"Simple, Guided, and Effective—
                        Your Career Breakthrough Starts Here with Expert Support and Proven Strategies!"</p>
                        <Link href="#contact"><div className="w-56 mt-5  group   h-11 rounded-full bg-teal-600 hover:bg-zinc-900 hover:bg-opacity-100 duration-300  bg-opacity-35 text-[1.1rem] flex items-center px-1 ">
                                <div className="w-9 h-9 rounded-full text-xl -rotate-90 group-hover:bg-zinc-100 bg-zinc-950 grid duration-300 place-items-center  group-hover:text-zinc-900 text-zinc-100 ">
                                    <HiArrowDownOnSquareStack className=" shrink-0"/>
                                </div>
                                <h1 className={`${outfit.className} pl-3  tracking-wider text-zinc-900 group-hover:text-teal-500 duration-300`}>Get Started</h1>
                            </div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
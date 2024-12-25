"use client"
import Image from "next/image";
import hero1 from "@/app/assets/heroImage.png"
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
import Link from "next/link";
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
                {/* <div className=" md:relative z-20 absolute left-0 top-0 md:w-[60%] w-[90%] h-screen  rounded-md pt-20 px-6 ">

                    <div className="flex md:opacity-100 md:scale-100 scale-0 opacity-0 flex-col items-start relative">
                        <div className={`uppercase  tracking-wider w-[50%] leading-5 text-[1.2rem] flex items-center gap-1 relative ${kanit.className}`}>
                            <span className="smallLeftname">Gain internships </span>
                            <div className="w-32 h-4 smallLeftnameDiv origin-left rounded-full border-2 border-zinc-950"></div>
                            
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
                            <Link href="#contact"><div className="w-56  bigTextbutton h-10 rounded-full bg-zinc-100 text-[1.1rem] flex items-center px-2">
                                <div className="w-8 h-8 rounded-full bg-zinc-950 grid place-items-center text-base text-zinc-100 bigTextbuttonCalen">
                                    <FaCalendarCheck/>
                                </div>
                                <h1 className={`${outfit.className} pl-3 bigTextbuttonCalenText text-zinc-900`}>Book Your Future</h1>
                            </div></Link>
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
                    
                </div>  */}
               
            </div>
            <div className=" w-[full h-[90vh]  relative flex justify-center items-center">
                <div className=" w-[150%] h-full absolute rotate-[5deg] bg-zinc-100 px-4 flex items-center ">
                    <div className=" w-[55%] border border-zinc-900 h-full  flex justify-between items-start relative ">
                        <div className=" absolute w-1 top-0 left-[50%] -rotate-[5deg] h-[8rem] border border-teal-600 bg-teal-600 rounde-b-md ">
                            <div className=" absolute bottom-0 left-3 flex flex-col">
                                <div className=" w-10 h-10 rounded-full bg-teal-600 text-[1.8rem]  grid place-items-center  absolute  -left-16 text-zinc-100">1</div>
                                <h1 className=" w-[40%] text-semibold leading-5 text-[1.2rem]">Personalized Career Coaching</h1>
                            </div>
                            <div className="absolute -bottom-[1.9rem] -left-4 text-[2rem]  text-teal-600"><GrRadialSelected/></div>
                        </div>
                        <div className=" absolute w-1 top-0 left-[65%] -rotate-[5deg] h-[16rem] border border-teal-600 bg-teal-600 rounde-b-md">
                        <div className=" absolute bottom-0 left-3 flex flex-col ">
                        <div className=" w-10 h-10 rounded-full bg-teal-600 text-[1.8rem]  grid place-items-center  absolute  -left-16 text-zinc-100">2</div>
                                <h1 className=" w-[40%] text-semibold leading-5 text-[1.2rem]">Skill Enhancement Resources</h1>
                            </div>
                            <div className="absolute -bottom-[1.9rem] -left-4 text-[2rem]  text-teal-600"><GrRadialSelected/></div>

                        </div>
                        <div className=" absolute w-1 top-0 left-[80%] -rotate-[5deg] h-[30rem] border border-teal-600 bg-teal-600 rounde-b-md">
                        <div className=" absolute bottom-0 left-3 flex flex-col ">
                        <div className=" w-10 h-10 rounded-full bg-teal-600 text-[1.8rem]  grid place-items-center  absolute  -left-16 text-zinc-100">3</div>

                                <h1 className=" w-[43%] text-semibold leading-5 text-[1.2rem]">Job & Internship Matching</h1>
                            </div>
                            <div className="absolute -bottom-[1.9rem] -left-4 text-[2rem]  text-teal-600"><GrRadialSelected/></div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
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
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
        gsap.registerPlugin(ScrollTrigger);  // Register the ScrollTrigger plugin here
        const heroTl=gsap.timeline()
        heroTl.from(".circle1",{
            scale:0,
            duration:0.4,
            delay:0.8
        })
        heroTl.from(".circle2",{
            scale:0,
            duration:0.4
        })
        heroTl.from(".hero",{
            scale:0,
            duration:0.5
        })
        heroTl.from(".herotext",{
            x:40,
            opacity:0,
            duration:1.4,
            stagger:0.3
        })
        gsap.from(".sticks", {
          scaleY:0,
          duration: 1,
          stagger:0.1,
          scrollTrigger: {
            trigger: ".sticks",
            start: "top 40%",
            end: "top 40%",
          }
        });
        gsap.from(".stick-cont", {
            scale:0,
            duration: 1.3,
            stagger:0.2,
            delay:1,
            scrollTrigger: {
              trigger: ".stick-cont",
              start: "top 40%",
              end: "top 40%",
            }
          });
          gsap.from(".stick-contRight", {
            X:50,
            duration: 1.3,
            stagger:0.3,
            opacity:0,
            scrollTrigger: {
              trigger: ".stick-contRight",
              start: "top 40%",
              end: "top 40%",
            }
          });
        
    })
    
    return (
        <div id="topMain" className="w-full min-h-[100vh]  bg-teal-700 bg-opacity-15">
            <div className="relative  w-full h-full shrink-0 p-0 md:p-6 flex items-center  gap-5 max-w-screen mx-auto pt-[6%]  ">
                <div className=" w-full md:w-[50%] shrink-0 h-[85vh]    md:relative flex justify-center items-center overflow-hidden">
                    <div className="circle1 w-[30rem] h-[30rem]  rounded-full bg-teal-600 bg-opacity-80 absolute -bottom-20"></div>

                    <div className=" circle2 w-[24rem] h-[24rem] flex justify-center items-center rounded-full bg-teal-600 bg-opacity-30 absolute right-24">
                    <div className="  w-[20rem] h-[20rem] rounded-full bg-teal-600 bg-opacity-80 backdrop-blur-[1px] absolute right-10"></div>

                    </div>
                    <Image src={hero1} alt="hero" className=" hero absolute origin-bottom bottom-0 w-[36rem]"/>

                </div>
                <div className=" w-full border  md:w-[50%]  h-[90vh] md:h-[75vh]  absolute md:backdrop-blur-none backdrop-blur-md  md:relative flex justify-center flex-col items-center overflow-hidden">

                   <div className=" relative flex flex-col pl-[5%]  md:pl-[13%] text-[3.7rem] leading-[3.4rem] tracking-tight font-semibold text-zinc-100 md:text-zinc-950">
                        <h1 className=" text-[1.4rem] md:text-[1.6rem]  w-auto flex flex-wrap leading-4 gap-2 uppercase text-teal-600 font-semibold  text-start herotext mb-5"><span>Accelerate</span> <span>Your</span> <span>Career</span> <span>Growth</span></h1>
                    <h1 className="text-transparent bg-clip-text  bg-gradient-to-r md:from-teal-700 from-zinc-100 via-zinc-900 to-sky-500 md:text-zinc-900 herotext">Empowering</h1>
                    <h1 className="text-transparent bg-clip-text  bg-gradient-to-r md:from-teal-700 from-zinc-100 via-zinc-900 to-sky-500 md:text-zinc-900 herotext">Future IT Professionals</h1>
                    <p className=" text-[1.3rem]  text-zinc-200  md:text-zinc-500 tracking-wide  leading-6 mt-4  w-[90%] md:w-[70%] text-wrap herotext">Unlock your potential with expert guidance tailored to help you land your dream job.
                    Start your journey toward a brighter future today</p>
                    <Link href="#contact" className="herotext"><div className="w-56 mt-5  group  h-10 rounded-full bg-zinc-200 md:bg-teal-600 hover:bg-zinc-900 hover:bg-opacity-100 duration-300  md:bg-opacity-35 text-[1.1rem] flex items-center px-1 ">
                                <div className="w-8 h-8 rounded-full group-hover:bg-zinc-100 bg-zinc-950 grid duration-300 place-items-center text-base group-hover:text-zinc-900 text-zinc-100 ">
                                    <FaCalendarCheck/>
                                </div>
                                <h1 className={`${outfit.className} pl-3  tracking-wider text-zinc-900 group-hover:text-teal-500 duration-300`}>Book Your Future</h1>
                            </div></Link>
                   </div>

                </div>

               
            </div>
            <div className=" w-[full md:h-[90vh] h-[100vh]  relative flex justify-center items-center">
                <div className=" w-[150%] h-full absolute rotate-[5deg] bg-zinc-100 px-4 flex md:flex-row flex-col-reverse items-center  ">
                    <div className="  w-[100%] md:w-[55%]   md:border-none border-t border-zinc-900 h-full  flex justify-between items-start relative ">
                        <div className=" sticks origin-top absolute w-1 top-0 left-[26%] md:left-[50%] -rotate-[5deg] h-[5rem] md:h-[8rem] border border-teal-600 bg-teal-600 rounde-b-md ">
                            <div className=" absolute -bottom-16 left-6 flex flex-col stick-cont origin-left">
                                <div className=" w-10 h-10 rounded-full bg-teal-600 text-[1.8rem]  grid place-items-center stick-cont  absolute  -left-20 text-zinc-100">1</div>
                                <Image src={leadership} alt="leader" className="  w-12 md:w-16 "/>
                                <h1 className=" w-[40%] text-semibold leading-4 md:leading-5 text-[1rem]  md:text-[1.2rem] stick-cont">Personalized Career Coaching</h1>
                            </div>
                            <div className="absolute -bottom-[1.9rem] -left-4 text-[2rem]  text-teal-600"><GrRadialSelected/></div>
                        </div>
                        <div className="sticks origin-top absolute w-1 top-0 left-[46%] md:left-[65%] -rotate-[5deg] h-[14rem] md:h-[16rem] border border-teal-600 bg-teal-600 rounde-b-md">
                            <div className=" absolute -bottom-16 left-6 flex flex-col ">
                                <div className=" w-10 h-10 rounded-full bg-teal-600 text-[1.8rem]  grid place-items-center  absolute  -left-20 text-zinc-100 stick-cont">2</div>
                                <Image src={skill} alt="leader" className=" w-12 md:w-16 stick-cont"/>
                                <h1 className=" w-[40%] text-semibold leading-5 text-[1rem] md:text-[1.2rem] stick-cont">Skill Enhancement Resources</h1>
                            </div>
                            <div className="absolute -bottom-[1.9rem] -left-4 text-[2rem]  text-teal-600"><GrRadialSelected/></div>

                        </div>
                        <div className="sticks origin-top absolute w-1 top-0 left-[70%] md:left-[80%] -rotate-[5deg] h-[22rem] md:h-[30rem] border border-teal-600 bg-teal-600 rounde-b-md">

                            <div className=" absolute -bottom-16 left-6 flex flex-col ">
                                <div className=" w-10 h-10 rounded-full bg-teal-600 text-[1.8rem]  grid place-items-center  stick-cont absolute  -left-20 text-zinc-100">3</div>
                                <Image src={skill} alt="skill" className= "w-12 md:w-16 stick-cont"/>
                                <h1 className=" w-[40%] text-semibold leading-5 text-[1rem] md:text-[1.2rem] stick-cont">Job & Internship Matching</h1>
                            </div>
                            <div className="absolute -bottom-[1.9rem] -left-4 text-[2rem]  text-teal-600"><GrRadialSelected/></div>

                        </div>

                    </div>
                    <div className=" w-[100%] md:w-[50%] h-full  flex flex-col justify-center items-start pl-[20%] md:pl-[5%] -rotate-[5deg] md:mb-20">
                        <h1 className=" text-[1.5rem] text-zinc-900 stick-contRight">Land Your Dream Job</h1>
                        <h1 className=" text-[3rem] font-semibold text-teal-700 uppercase leading-[2.7rem] stick-contRight">In just 3 steps</h1>
                        <p className=" text-[1.2rem] w-[70%] md:w-[50%] stick-contRight">"Simple, Guided, and Effective—
                        Your Career Breakthrough Starts Here with Expert Support and Proven Strategies!"</p>
                        <Link href="#contact " className="stick-contRight"><div className="w-56 mt-5  group   h-11 rounded-full bg-teal-600 hover:bg-zinc-900 hover:bg-opacity-100 duration-300  bg-opacity-35 text-[1.1rem] flex items-center px-1 ">
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
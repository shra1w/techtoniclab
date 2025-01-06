"use client"
import Image from "next/image";
import dayLogo from "@/app/assets/Logo/techtonicLabDay.png"
import { Oswald } from 'next/font/google'
import { useState, useEffect } from "react";
import AnimatedButton from "./CustomButton";
import { IoMdSunny } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo1 from "@/app/assets/Logo/Techtonic-Lablogo.svg"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";

const oswald = Oswald({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
})

export default function HeaderSection() {
    const path=usePathname()
    const [miniNav, setMiniNav] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useGSAP(()=>{
        const headTl=gsap.timeline()
        headTl.from(".headblackbg",{
            scaleX:0,
            duration:0.8,
        })
        headTl.from(".logo",{
            y:-50,
            opacity:0,
            duration:0.7
        })
        headTl.from(".animbutton",{
            y:-50,
            opacity:0,
            duration:0.4
        })
       
    })
   

    return (
        <header className="w-screen h-auto py-3 px-3 md:px-8 z-40 fixed top-0 left-0  pt-4  flex justify-center  ">
            <div className=" relative headblackbg  origin-left flex justify-between items-center bg-zinc-900 py-2 rounded-md w-[90%] px-5">
            <div 
                className="flex items-center gap-1 md:gap-1 logo "
            >
                <div className="   shrink-0">
                    <Image src={logo1} alt="logo"  className=" w-[50px]  md:w-[60px] shrink-0" />
                </div>
               <h1 className=" text-[1.4rem] md:text-[1.8rem] font-[500]  text-zinc-100">Techtonic Lab</h1>
            </div>
            <div className=" hidden md:flex items-center pb-1 gap-7 cursor-pointer text-zinc-100">
            <Link href="/about" ><div className={`relative flex justify-center items-center group ${path==="/about"&&" text-teal-500"}`}>About Us <span className= {`absolute -bottom-1   border ${path==="/about"?"w-full text-teal-500":"w-3 group-hover:w-full"} border-teal-600 duration-500`}></span></div></Link>
                <Link href="/carrers" >
                <div className={`relative flex justify-center items-center group tracking-wider ${path==="/carrers"&&" text-teal-500"}`}>Carrers <span className={`absolute ${path==="/carrers"?"w-full text-teal-500":"w-3 group-hover:w-full"} -bottom-1   border border-teal-600 duration-500`}></span></div>
                </Link>
                <Link href="/#whyus"><div className=" relative flex justify-center items-center group tracking-wider">Why choose us? <span className=" absolute -bottom-1 w-3 group-hover:w-full border border-teal-600 duration-500"></span></div></Link>

            </div>
            <div className=" flex items-center gap-2 md:gap-5">
            <AnimatedButton/>
               
            </div>
            <div className=" md:hidden block text-[1.5rem] shrink-0 text-teal-500" onClick={()=>setMiniNav(!miniNav)}>
                <HiMenuAlt3/>
            </div>
            <div className={` ${miniNav?"h-auto py-3 pb-6 duration-200":"h-0"} w-full left-0 overflow-hidden absolute top-[102%] rounded-md  bg-zinc-100  z-20`}>
                <div className={` ${miniNav?" scale-100 duration-300 delay-300  ":" scale-0"} origin-top w-full h-auto flex flex-col items-center gap-3`} >
                <Link href="/about" ><div className=" w-[90%] h-16 border-b border-zinc-800 flex items-center text-[2rem] pl-4">About Us</div></Link>
                <Link href="/carrers" ><div className=" w-[90%] h-16 border-b border-zinc-800 flex items-center text-[2rem] pl-4">Carrers</div></Link>
                <Link href="/#whyus"><div className=" w-[90%] h-16 border-b border-zinc-800 flex items-center text-[2rem] pl-4">Why Choose Us?</div></Link>

                   

                </div>
            </div>
            </div>
            
        </header>
    );
}

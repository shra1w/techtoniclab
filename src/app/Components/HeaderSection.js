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

const oswald = Oswald({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
})

export default function HeaderSection() {
    const [isHovered, setIsHovered] = useState(true);
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
        headTl.from(".mode",{
            y:-50,
            opacity:0,
            duration:0.4
        })
    })
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    useEffect(()=>{
        setTimeout(()=>{
            setIsHovered(false)
        },3000)
    },[])

    return (
        <header className="w-screen h-auto py-3 px-3 md:px-8 z-40 fixed top-0 left-0  pt-4  flex justify-center  ">
            <div className=" headblackbg  origin-left flex justify-between items-center bg-zinc-900 py-2 rounded-md w-[90%] px-5">
            <div 
                className="flex items-center gap-1 md:gap-1 logo "
            >
                <div className="   shrink-0">
                    <Image src={logo1} alt="logo"  className=" w-[50px]  md:w-[60px] shrink-0" />
                </div>
               <h1 className=" text-[1.4rem] md:text-[1.8rem] font-[500]  text-zinc-100">Techtonic Labs</h1>
            </div>
            <div className=" flex items-center gap-2 md:gap-5">
            <AnimatedButton/>
                <div className=" mode">
            </div>
            </div>
            </div>
            
        </header>
    );
}

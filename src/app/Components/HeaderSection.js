"use client"
import Image from "next/image";
import dayLogo from "@/app/assets/Logo/techtonicLabDay.png"
import { Oswald } from 'next/font/google'
import { useState, useEffect } from "react";
import AnimatedButton from "./CustomButton";
import { IoMdSunny } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const oswald = Oswald({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
})

export default function HeaderSection() {
    const [isHovered, setIsHovered] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useGSAP(()=>{
        const headTl=gsap.timeline()
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
        <header className="w-screen h-auto py-3 px-8 z-40 fixed left-0 top-0  flex justify-between backdrop-blur-sm ">
            <div 
                className="flex items-center gap-3 logo"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="w-10">
                    <Image src={dayLogo} alt="logo" className="w-full" />
                </div>
                {isLoaded && (
                    <h1 className={`text-[1.9rem] font-[600] mb-1 tracking-tight flex overflow-hidden ${oswald.className}`}>
                        {"Techtonic  Labs".split('').map((char, index) => (
                            <span
                                key={index}
                                className={`transform transition-all ${
                                    isHovered 
                                        ? 'translate-x-0 opacity-100 scale-100 duration-300 origin-left visible' 
                                        : '-translate-x-full opacity-0 scale-0 invisible'
                                }`}
                                style={{
                                    transitionDelay: isHovered ? `${index * 50}ms` : '0ms'
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>
                )}
            </div>
            <div className=" flex items-center gap-5">
            <AnimatedButton/>
            <div className=" mode">
            <div className="  w-9 h-9 text-[1.2rem] text-zinc-800 cursor-pointer rounded-full hover:bg-zinc-200 duration-300 dark:bg-zinc-700 grid place-items-center">
                <IoMdSunny/>
            </div>
            </div>
            </div>
        </header>
    );
}

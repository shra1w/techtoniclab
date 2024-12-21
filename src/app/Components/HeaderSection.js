"use client"
import Image from "next/image";
import dayLogo from "@/app/assets/Logo/techtonicLabDay.png"
import { Oswald } from 'next/font/google'
import { useState, useEffect } from "react";
import AnimatedButton from "./CustomButton";
import { IoMdSunny } from "react-icons/io";

const oswald = Oswald({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
})

export default function HeaderSection() {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Ensure text is hidden on initial load
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <header className="w-full h-auto py-3 px-8 absolute left-0 top-0  flex justify-between backdrop-blur-sm ">
            <div 
                className="flex items-center gap-3"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="w-11">
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
            <div className=" w-9 h-9 text-[1.2rem] text-zinc-800 cursor-pointer rounded-full hover:bg-zinc-200 duration-300 dark:bg-zinc-700 grid place-items-center">
                <IoMdSunny/>
            </div>
            </div>
        </header>
    );
}

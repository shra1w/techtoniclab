"use client"

import Link from "next/link"
import HeaderSection from "./Components/HeaderSection"
import ImageFound from "@/app/assets/nofound.svg"
import Image from "next/image"

export default function NotFoundPage() {
    return (
        <div className="w-screen h-screen overflow-hidden relative flex flex-col">
            <HeaderSection />
            <div className="h-[90%] w-full flex flex-col lg:flex-row items-center justify-center px-4 lg:px-0 pt-10">
                <div className="w-full lg:w-[40%] h-full flex items-center lg:items-start justify-center flex-col text-center lg:text-left lg:pl-[5vw] space-y-4 lg:space-y-6 pt-8 lg:pt-0">
                    <h1 className="font-semibold text-2xl md:text-3xl lg:text-[3.5rem] tracking-tight text-teal-700">
                        Oops...
                    </h1>
                    <h1 className="text-2xl md:text-3xl lg:text-[3.5rem] tracking-tight">
                        Page Not Found
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-[2rem] font-semibold leading-normal lg:leading-8 mt-2 lg:mt-4 px-4 lg:px-0">
                        Oops! The page you're looking for doesn't seem to exist.
                    </h2>
                    <h2 className="text-lg md:text-xl lg:text-[1.6rem] text-zinc-600 px-4 lg:px-0">
                        Don't worry, though—let's get you back on track!
                    </h2>
                    <div className="w-full flex items-center justify-center lg:justify-start lg:pl-10 mt-6 lg:mt-4">
                        <Link href="/">
                            <button className="px-6 lg:px-8 py-2 lg:py-[0.5rem]  text-base lg:text-[1.1rem] text-zinc-100 rounded-md uppercase border-r-zinc-950 bg-teal-700 border border-teal-700 hover:text-teal-800 duration-300 hover:bg-zinc-100 transition-colors">
                                GO TO HomePage
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-[60%] h-full flex flex-col justify-center items-center mt-8 lg:mt-0">
                    <Image 
                        src={ImageFound} 
                        alt="NotFound" 
                        className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[45rem] h-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
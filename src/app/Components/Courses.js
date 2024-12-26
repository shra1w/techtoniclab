"use client"
import bigShape from "@/app/assets/courseShape/shapesImage.jpg"
import Image from "next/image"
import { useState } from "react";
import { PiSelectionBold } from "react-icons/pi";
import { PiSelectionAllFill } from "react-icons/pi";
import { MdLocalActivity } from "react-icons/md";

export default function OurCourses(){
    const [section,setSection]=useState("section1")
    return(
        <div className=" w-full min-h-screen  flex flex-col gap-5  items-center bg-teal-700 bg-opacity-15 px-3 py-10">
            <h1 className=" text-[2.5rem] font-[500]">Our Expertise</h1>
            <p className=" text-[0.9rem] md:text-[1.2rem] w-[90%] md:w-[80%] text-center">At Techtonic-Lab, we drive business transformation with IT consulting, SAP integration, and data analytics. Our expert team leverages technology to simplify digital transformation, optimize processes, and unlock data's full potential.</p>
            <div className=" w-full h-aut0 pt-8 space-y-2">
                <div className=" w-full h-auto md:flex-row flex-col flex p-2 gap-5 ">
                    <div className=" w-full md:w-[50%] h-[50vh]  bg-zinc-900 flex  rounded-2xl justify-center items-center flex-col gap-4">
                    <h1 className=" text-[1.7rem] text-center md:text-[2.4rem]  font-[500] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-orange-200 to-sky-300">
    Seamless SAP Integration Solutions
</h1>
<p className=" text-[1rem] md:text-[1.2rem] text-center text-zinc-200 w-[90%] md:w-[70%]">With deep expertise in SAP systems, we offer end-to-end integration
services that streamline operations, improve resource management, and drive business
value.</p>
                    </div>
                    <div className=" w-full md:w-[50%] h-[50vh]  relative overflow-hidden rounded-2xl flex justify-center items-center ">
                            <Image src={bigShape} alt="shape" className=" absolute -bottom-10 right-0 w-full "/>
                            <div className=" absolute bg-zinc-800 bg-opacity-25 w-[94%] h-[94%] rounded-xl z-10  flex flex-col py-3 items-center">
                                <h1 className=" text-[2.5rem] font-bold tracking-wide backdrop-blur-md">Features</h1>
                                <div className=" w-[90%] md:w-[80%] py-3 h-auto flex md:flex-row flex-col items-center justify-center gap-3  md:gap-6 ">
                                    <button className= {` px-3 md:px-7 py-3 rounded-full text-[1rem] md:text-[1.3rem]  flex items-center ${section==="section1"?"bg-gradient-to-tr from-sky-300  via-orange-200 to-sky-300":"border border-zinc-950 backdrop-blur-sm"} gap-5`} onClick={()=>setSection("section1")}>{section==="section1"?<PiSelectionAllFill className=" shrink-0 text-[1.6rem]"/>:<PiSelectionBold className=" text-[1.6rem]"/>}What We Provide</button>
                                    <button className={` px-3 md:px-7 py-3 rounded-full text-[1rem] md:text-[1.3rem]   flex   items-center gap-5 ${section==="section2"?"bg-gradient-to-tr from-sky-300  via-orange-200 to-sky-300":"border border-zinc-950 backdrop-blur-sm"}`} onClick={()=>setSection("section2")}>{section==="section2"?<PiSelectionAllFill className=" text-[1.6rem]"/>:<PiSelectionBold className=" text-[1.6rem]"/>}What You’ll Gain
                                    </button>
                                </div>
                                {section==="section1"?<div className=" w-full  h-[60%] py-2 px-2 sm:px-4  flex flex-wrap  items-center gap-2 sm:gap-6 justify-center  ">
                                    <div className=" flex items-center gap-3  px-7 h-[3rem] md:h-[4rem] rounded-full hover:-translate-y-1 duration-300 border text-zinc-100 border-zinc-900 backdrop-blur-sm cursor-pointer hover:text-zinc-100 hover:bg-zinc-900 text-[1.3rem] "><MdLocalActivity/> lorem32</div>
                                    <div className=" flex items-center gap-3 px-7 h-[3rem] md:h-[4rem] py-2 rounded-full hover:-translate-y-1 border text-zinc-100 border-zinc-900 backdrop-blur-sm duration-300 cursor-pointer hover:text-zinc-100 hover:bg-zinc-900 text-[1.3rem]"><MdLocalActivity/> lorem32</div>
                                    <div className=" flex items-center gap-3 px-7 h-[3rem] md:h-[4rem] py-2 rounded-full hover:-translate-y-1 border text-zinc-100 border-zinc-900 backdrop-blur-sm duration-300 cursor-pointer hover:text-zinc-100 hover:bg-zinc-900 text-[1.3rem]"><MdLocalActivity/> lorem32</div>
                                    <div className=" flex items-center gap-3 px-7 h-[3rem] md:h-[4rem] py-2 rounded-full hover:-translate-y-1 border text-zinc-100 border-zinc-900 backdrop-blur-sm duration-300 cursor-pointer hover:text-zinc-100 hover:bg-zinc-900 text-[1.3rem]"><MdLocalActivity/> lorem32</div>
                                    <div className=" flex items-center gap-3 px-7 h-[3rem] md:h-[4rem] py-2 rounded-full hover:-translate-y-1 border text-zinc-100 border-zinc-900 backdrop-blur-sm duration-300 cursor-pointer hover:text-zinc-100 hover:bg-zinc-900 text-[1.3rem]"><MdLocalActivity/> lorem32</div>
                                </div>:<div className=" w-full h-[60%] py-2 px-4  flex flex-wrap  items-center gap-6 justify-center  ">
                                    <div className=" flex items-center gap-3  px-7 h-[4rem] rounded-full hover:-translate-y-1 duration-300 border border-zinc-900 backdrop-blur-sm cursor-pointer hover:text-zinc-100 hover:bg-zinc-900 text-[1.3rem] "><MdLocalActivity/> lorem32</div>
                                    <div className=" flex items-center gap-3 px-7 h-[4rem] py-2 rounded-full hover:-translate-y-1 border border-zinc-900 backdrop-blur-sm duration-300 cursor-pointer hover:text-zinc-100 hover:bg-zinc-900 text-[1.3rem]"><MdLocalActivity/> lorem32</div>
                                    <div className=" flex items-center gap-3 px-7 h-[4rem] py-2 rounded-full hover:-translate-y-1 border border-zinc-900 backdrop-blur-sm duration-300 cursor-pointer hover:text-zinc-100 hover:bg-zinc-900 text-[1.3rem]"><MdLocalActivity/> lorem32</div>
                                    <div className=" flex items-center gap-3 px-7 h-[4rem] py-2 rounded-full hover:-translate-y-1 border border-zinc-900 backdrop-blur-sm duration-300 cursor-pointer hover:text-zinc-100 hover:bg-zinc-900 text-[1.3rem]"><MdLocalActivity/> lorem32</div>
                                    <div className=" flex items-center gap-3 px-7 h-[4rem] py-2 rounded-full hover:-translate-y-1 border border-zinc-900 backdrop-blur-sm duration-300 cursor-pointer hover:text-zinc-100 hover:bg-zinc-900 text-[1.3rem]"><MdLocalActivity/> lorem32</div>
                                    <div className=" flex items-center gap-3 px-7 h-[4rem] py-2 rounded-full hover:-translate-y-1 border border-zinc-900 backdrop-blur-sm duration-300 cursor-pointer hover:text-zinc-100 hover:bg-zinc-900 text-[1.3rem]"><MdLocalActivity/> lorem32</div>
                                </div>}
                            </div>
                    </div>
                </div>
                <div className=" w-full   flex md:flex-row flex-col-reverse p-2 gap-5 ">
                    <div className=" w-full md:w-[50%] h-[50vh] "></div>
                    <div className=" w-full md:w-[50%] h-[50vh] bg-zinc-900 flex  rounded-2xl justify-center items-center flex-col">
                    <h1 className=" text-[1.7rem] text-center md:text-[2.4rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-orange-200 to-sky-300">
                    Innovative IT Consulting Services
</h1>
<p className="text-[1rem] md:text-[1.2rem] text-center text-zinc-200 w-[90%] md:w-[70%]">We partner with businesses to provide strategic guidance on technology
solutions tailored to meet their unique needs, enabling growth and efficiency.</p>
                    </div>
                </div>
                <div className=" w-full   flex md:flex-row flex-col p-2 gap-5 ">
                    <div className=" w-full md:w-[50%] h-[50vh]  bg-zinc-900 flex  rounded-2xl justify-center items-center flex-col">
                    <h1 className="text-[2.4rem] font-[500] text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-orange-200 to-sky-300">
                    Advanced Data Analytics Solutions
</h1>
<p className=" text-[1.2rem] text-center text-zinc-200 w-[70%]">Our data analytics services empower companies to make data-driven
decisions, extract actionable insights, and enhance performance across all areas of
operation.</p>
                    </div>
                    <div className=" w-full md:w-[50%] h-[50vh]"></div>
                </div>
            </div>
        </div>
    )
}
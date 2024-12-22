"use client"
import { useGSAP } from "@gsap/react";
import ImageCarousel from "./ImageGallery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClassRommSection(){
    
    useGSAP(() => {
        // gsap.registerPlugin(ScrollTrigger);  // Register the ScrollTrigger plugin here
        gsap.from(".classhead", {
          y: -80,
          duration: 0.5,
          opacity: 0,
          scrollTrigger: {
            trigger: ".classhead",
            start: "top 40%",
            end: "top 40%",
          }
        });
        gsap.from(".classsubhead", {
          y: -80,
          duration: 0.5,
          opacity: 0,
          scrollTrigger: {
            trigger: ".classsubhead",
            start: "top 36%",
            end: "top 36%",
          }
        });
        gsap.from(".classes", {
            scaleX:0,
            duration: 0.5,
            opacity: 0,
            scrollTrigger: {
              trigger: ".classes",
              start: "top 30%",
              end: "top 30%",
            }
          });
      });
    return(
        <div className=" w-screen h-auto  ">
            <div className=" w-full h-full bg-gradient-to-tr from-sky-300 flex flex-col items-center via-orange-200 to-sky-300  px-4 py-10 gap-4">
                <h1 className="classhead text-[2rem] text-center md:text-[3rem] tracking-wide font-[500]">Building Skills, Shaping Futures</h1>
                <p className="classsubhead text-[0.7rem] md:text-[1.2rem] w-[95%] md:w-[70%] text-center">Explore our state-of-the-art classrooms and training sessions designed to empower students with industry-ready skills. Experience a learning environment that fosters growth and innovation.</p>
                <div className="classes origin-left w-[100%] md:w-[70%] h-auto md:mt-6 mt-10  backdrop-blur-sm bg-zinc-800 bg-opacity-25 rounded-xl p-2">
                    <div className=" w-full h-full">
                        <ImageCarousel/>
                    </div>
                </div>
            </div>
        </div>
    )
}
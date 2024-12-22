"use client"
import { Outfit } from 'next/font/google';
import timeIcon from "@/app/assets/Icons/timeismoney.png"
import archive from "@/app/assets/Icons/archive.png"
import Image from 'next/image';
import teacher from "@/app/assets/Icons/teacher.png"
import money from "@/app/assets/Icons/money.png"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function WhyChooseUS(){
    const whyUsdata=[
        {
          "title": "Flexible Scheduling",
          "description": "Tailored learning schedules that adapt to your lifestyle, making education convenient and accessible.",
          Icon: timeIcon
        },
        {
          "title": "Top-Quality Resources",
          "description": "Premium training materials designed to meet industry standards and ensure practical learning.",
          Icon: archive  // Added Icon
        },
        {
          "title": "Affordable Programs",
          "description": "High-value training at budget-friendly prices, empowering you to invest in your future with confidence.",
          Icon: money  // Added Icon
        },
        {
          "title": "Expert Mentorship",
          "description": "Learn from seasoned professionals who bring real-world experience and insights to every session.",
          Icon: teacher  // Added Icon
        }
      ]
      useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);  // Register the ScrollTrigger plugin here
    gsap.from(".headAbout", {
      y: -80,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".headAbout",
        start: "top 45%",
        end: "top 45%",
      }
    });
    gsap.from(".subheadAbout", {
      y: -80,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".subheadAbout",
        start: "top 40%",
        end: "top 40%",
      }
    });
    gsap.from(".subheadAboutCard", {
        y: -80,
        duration: 0.5,
        opacity: 0,
        stagger:0.3,
        scrollTrigger: {
          trigger: ".subheadAboutCard",
          start: "top 35%",
          end: "top 35%",
          markers:true
        }
      });
  });
    return(
        <div className={`${outfit.className} w-full h-auto bg-zinc-900 flex flex-col items-center py-10 gap-5`}>
              <h1 className=" headAbout w-[80%] md:w-[50%] text-[2rem] md:text-[3rem] text-zinc-100 tracking-wide text-center">
                Why Choose Us?
              </h1>
             <p className=' subheadAbout text-[0.8rem] md:text-[1.3rem] text-zinc-200 text-center w-[100%] md:w-[70%]'>We provide expert training, hands-on experience, and strong industry connections to help you secure top IT internships and placements. Empower your future with skills that stand out!</p>
             <div className='w-[90%] flex items-center justify-center flex-wrap gap-6 min-h-[40vh] py-8 overflow-hidden h-auto mt-6'>
                {whyUsdata.map((whyus,index)=>{
                    return(
                        <div key={index} className="subheadAboutCard">
                        <div  className='  w-[10rem] hover:scale-[104%] overflow-hidden duration-300 cursor-pointer bg-gradient-to-br from-sky-300 via-orange-200 to-sky-300 h-[10rem] md:w-[20rem] md:h-[20rem] flex shrink-0 flex-col gap-2 items-center justify-center border rounded-md'>
                            <div className='w-[35%] h-[35%] rounded-full grid place-items-center bg-sky-600 shrink-0 overflow-hidden'>
                                {whyus?.Icon ? <Image src={whyus.Icon} alt='Icons' className={` ${whyus.Icon===teacher?"w-20":whyus.Icon===money?"w-16":"ml-3  w-16"}`} /> : "Icon"}
                            </div>
                            <h1 className='text-[0.8rem] text-center md:text-[1.4rem] tracking-wide font-[500]'>{whyus.title}</h1>
                            <p className='hidden md:block text-[0.9rem] w-[90%] text-center text-zinc-900'>{whyus.description}</p>
                        </div>
                        </div>
                    )
                })}
             </div>
        </div>
    )
}
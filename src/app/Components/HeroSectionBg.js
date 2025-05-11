"use client"
import { animate, useMotionTemplate, useMotionValue,motion } from "motion/react"
import { useEffect, useState } from "react"
import HeroSectionContent from "./HeroSectionContent"
import ThreeStepSection from "./ThreeStepsSection"

const colors=[
    'rgba(172, 19, 59, 0.52)',
    'rgba(30, 171, 19, 0.52)',
    'rgba(19, 166, 171, 0.52)',
    'rgba(109, 19, 171, 0.52)'
]
export default function RadialGradientSection(){
    const currentColor=useMotionValue(colors[1])
    const backgrounRadial=useMotionTemplate`radial-gradient(100% 130% at 50% 0%, #080707 50% ,${currentColor})`
     useEffect(()=>{
        animate(currentColor,colors,{
            ease:'easeInOut',
            duration:20,
            repeat:Infinity,
            repeatType:'mirror'
        })
     },[])
  
    return(
        <div className=" w-full h-full relative ">
         <motion.section
        style={{
            backgroundImage:backgrounRadial
        }}
         className=" w-full h-full py-20  ">

<HeroSectionContent currentColor={currentColor}/>

        </motion.section>
        <ThreeStepSection/>

        </div>
       
    )
}
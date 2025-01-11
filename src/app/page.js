"use client"
import Image from "next/image";
import HeaderSection from "./Components/HeaderSection";
import HeroSection from "./Components/HeroSection";
import PartnerSection from "./Components/Partners";
import {Outfit } from 'next/font/google'
import ClassRommSection from "./Components/ClassRoomAndSectins";
import WhyChooseUS from "./Components/WhyChoseUs";
import OurCourses from "./Components/Courses";
import FacultyAndLEaders from "./Components/FacultyAndLeaders";
import ContactUsDetails from "./Components/ContactUsPage";
import FooterSection from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const outfit = Outfit({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
})

export default function Home() {
      const [miniNav, setMiniNav] = useState(false);
  
  return (
    <div className={` ${outfit.className} relative w-full overflow-hidden min-h-screen`} onClick={()=>{miniNav && setMiniNav(false)}} onScroll={()=>{miniNav && setMiniNav(false)}}>
      <HeaderSection miniNav={miniNav} setMiniNav={setMiniNav}/>
      <Toaster/>
      <main className="w-full min-h-screen" >
        <HeroSection/>
        <PartnerSection/>
        <ClassRommSection/>
        <WhyChooseUS/>
        <OurCourses/>
        <FacultyAndLEaders/>
        <ContactUsDetails/>
        <FooterSection/>
      </main>
    </div>
  );
}
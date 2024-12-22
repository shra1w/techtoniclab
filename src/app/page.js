import Image from "next/image";
import HeaderSection from "./Components/HeaderSection";
import HeroSection from "./Components/HeroSection";
import PartnerSection from "./Components/Partners";
import {Outfit } from 'next/font/google'
import ClassRommSection from "./Components/ClassRoomAndSectins";
import WhyChooseUS from "./Components/WhyChoseUs";
import OurCourses from "./Components/Courses";
import FacultyAndLEaders from "./Components/FacultyAndLeaders";

const outfit = Outfit({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={` ${outfit.className} relative w-full overflow-hidden min-h-screen`}>
      <HeaderSection/>
      <main className="w-full min-h-screen">
        <HeroSection/>
        <PartnerSection/>
        <ClassRommSection/>
        <WhyChooseUS/>
        <OurCourses/>
        <FacultyAndLEaders/>
      </main>
    </div>
  );
}
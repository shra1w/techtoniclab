import CoursesSection from "./Components/CoursesOffered";
import FooterSection from "./Components/FooterSection";
import HeaderSection from "./Components/HeaderSection";
import RadialGradientSection from "./Components/HeroSectionBg";
import FacultyAndLEaders from "./Components/LeadersandFaculty";
import SmoothScroll from "./Components/SmoothScroll";
import TopCompaniesSection from "./Components/SuccefullyPlaced";
import TestimonialCarousel from "./Components/TestimonialSection";
import ThreeStepSection from "./Components/ThreeStepsSection";
import TrustedPartners from "./Components/TrustedPartners";

export default function Home() {
  
  
  return (
    <>
    <SmoothScroll>
    <main className=" w-full min-h-screen bg-zinc-950 ">

      <HeaderSection/>
      <div className=" relative w-full h-[100vh]">
        <RadialGradientSection/>
      </div>

      <div className=" w-full h-[65vh]   sm:h-[60vh]   "></div>
      <div className=" w-full min-h-[50vh] pt-[10vh]  ">
        <div className="  w-full h-auto">
          <TrustedPartners />
        </div>
      </div>
      <div id="courses" className="  w-full h-auto pt-[10vh] bg-zinc-100">
          <CoursesSection/>
        </div>
      <div className=" py-[8vh] bg-zinc-100 ">
        <TopCompaniesSection/>
      </div>
      <div className=" w-full min-h-[100vh]">
        <TestimonialCarousel/>
      </div>
      <FacultyAndLEaders/>
      <FooterSection/>
    </main>
    </SmoothScroll>
    </>
  );
}

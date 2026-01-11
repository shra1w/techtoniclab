import ContactUsSection from "./Components/ContactUsSection";
import CoursesSection from "./Components/CoursesOffered";
import FAQSection from "./Components/FaQSection";
import FooterSection from "./Components/FooterSection";
import HeaderSection from "./Components/HeaderSection";
import RadialGradientSection from "./Components/HeroSectionBg";
import HistorySection from "./Components/HistorySection";
import IndustryTrainingSection from "./Components/IndustryTrainingSetion";
import FacultyAndLEaders from "./Components/LeadersandFaculty";
import SmoothScroll from "./Components/SmoothScroll";
import TopCompaniesSection from "./Components/SuccefullyPlaced";
import TestimonialCarousel from "./Components/TestimonialSection";
import ThreeStepSection from "./Components/ThreeStepsSection";
import TrustedPartners from "./Components/TrustedPartners";
import WhyNagpurSection from "./Components/WhyNagpurSection";

export default function Home() {
  
  
  return (
    <>
    <SmoothScroll>
    <main className=" w-full min-h-screen bg-zinc-950 ">

      <HeaderSection/>
      <div className=" relative w-full min-h-[180vh] ">
        <RadialGradientSection/>
      </div>

          <TrustedPartners />

      <HistorySection/>

      <div id="courses" className="  w-full h-auto pt-[5vh] bg-zinc-50">
          <CoursesSection/>
        </div>
      <WhyNagpurSection/>
      <div className=" py-[5vh] bg-zinc-50 ">
        <TopCompaniesSection/>
      </div>
      <div className=" w-full min-h-[100vh]">
        <TestimonialCarousel/>
      </div>
      <FacultyAndLEaders/>
      <FAQSection/>
      <ContactUsSection/>
      <IndustryTrainingSection/>
      <FooterSection/>
    </main>
    </SmoothScroll>
    </>
  );
}

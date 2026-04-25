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
import TrustedPartners from "./Components/TrustedPartners";
import WhyNagpurSection from "./Components/WhyNagpurSection";

// Add Canonical Tag for the Homepage
export const metadata = {
  alternates: {
    canonical: 'https://techtoniccorporate.com/',
  },
};

const educationalSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Techtonic Lab",
  "alternateName": "Skillcloud Solutions Pvt. Ltd.",
  "url": "https://techtoniccorporate.com",
  "logo": "https://techtoniccorporate.com/images/logo.svg",
  "description": "Techtonic Lab is a practical IT training institute in Nagpur, Maharashtra, offering job-oriented courses in SAP, Data Analytics, and Data Science with placement support for freshers, working professionals, and career switchers.",
  "telephone": "+918766069947",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Second Floor, Plot No.10, SAI NIT-JIT PLAZA, Beltarodi Rd, nr. GULMOHAR RESTAURANT",
    "addressLocality": "Manish Nagar, Somalwada",
    "addressRegion": "Maharashtra",
    "postalCode": "440037",
    "addressCountry": "IN"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IT Training Courses",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "SAP Course in Nagpur",
          "url": "https://techtoniccorporate.com/sap-course"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Data Analytics Course in Nagpur",
          "url": "https://techtoniccorporate.com/data-analytics-course"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Data Science Course in Nagpur",
          "url": "https://techtoniccorporate.com/data-science-course"
        }
      }
    ]
  },
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 2,
    "maxValue": 9
  },
  "foundingDate": "December 2024",
  "sameAs": [
    "https://www.instagram.com/techtonic_lab/"
  ]
};

export default function Home() {
  return (
    <>
      {/* Educational Organization Schema (Homepage Only) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalSchema) }}
      />
      
      <SmoothScroll>
        <main className=" w-full min-h-screen bg-zinc-950 ">
          <HeaderSection />
          
          <div className=" relative w-full min-h-[180vh] ">
            <RadialGradientSection />
          </div>

          <TrustedPartners />

          <HistorySection />

          <div id="courses" className="  w-full h-auto pt-[5vh] bg-zinc-50">
            <CoursesSection />
          </div>
          
          <WhyNagpurSection />
          
          <div className=" py-[5vh] bg-zinc-50 ">
            <TopCompaniesSection />
          </div>
          
          <div className=" w-full min-h-[100vh]">
            <TestimonialCarousel />
          </div>
          
          <FacultyAndLEaders />
          
          <FAQSection />
          
          <ContactUsSection />
          
          <IndustryTrainingSection />
          
          <FooterSection />
        </main>
      </SmoothScroll>
    </>
  );
}
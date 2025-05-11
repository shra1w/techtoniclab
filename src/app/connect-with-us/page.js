// app/contact/page.jsx

import Link from "next/link";
import FooterSection from "../Components/FooterSection";
import HeaderSection from "../Components/HeaderSection";
import ContactForm from "./ContactForm";

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our team',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
        <HeaderSection/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[8vh] pt-[10vh]">
        <div className="space-y-12">
          <div className="text-center w-full">
            <h1 className="text-[2rem] font-semibold text-gray-900 sm:text-[5rem] sm:leading-[5.5rem] text-start">Looking for growth, opportunity
               and the right guidance? Let’s connect and shape your journey together.</h1>
           
          </div>
          
          <ContactForm />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href="tel:+91-8766069947"><div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Call us</h3>
              <p className="mt-2 text-base text-gray-600">+91-8766069947</p>
            </div></Link>
            
            <Link href="mailto:admin@techtoniccorporate.com"><div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Email us</h3>
              <p className="mt-2 text-base text-gray-600">admin@techtoniccorporate.com</p>
            </div></Link>
            
            <Link href="https://www.google.com/maps/search/?api=1&query=SAI+NIT-JIT+PLAZA%2C+Second+Floor%2C+Plot+No.10%2C+Beltarodi+Rd.+nr.+GULMOHAR+RESTAURANT%2C+Manish+Nagar%2C+Somalwada%2C+nagpur%2C+MH-440037" target="__blank"><div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Visit us</h3>
              <p className="mt-2 text-base text-gray-600">SAI NIT-JIT PLAZA, Second Floor, Plot No.10, Beltarodi Rd. nr. GULMOHAR RESTAURANT, Manish Nagar, Somalwada, nagpur, MH-440037</p>
            </div></Link>
          </div>
        </div>
      </div>
      <FooterSection/>

    </main>
  );
}
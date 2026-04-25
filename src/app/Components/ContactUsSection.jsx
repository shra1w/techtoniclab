// app/contact/page.jsx

import ContactForm from "../connect-with-us/ContactForm";




// export const metadata = {
//   title: 'Contact Us',
//   description: 'Get in touch with our team',
// };

export default function ContactUsSection() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-[5rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center w-full">
            <p className="text-[2rem] font-semibold text-gray-900 sm:text-[3rem] sm:leading-[3.5rem] text-start">Looking for growth, opportunity
               and the right guidance? Let’s connect and shape your journey together.</p>
           
          </div>
          
          <ContactForm />
          
          
        </div>
      </div>
      {/* <FooterSection/> */}

    </div>
  );
}
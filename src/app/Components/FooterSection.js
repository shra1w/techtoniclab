import React from 'react';
import { Instagram, Linkedin, Github, Youtube, Twitter, Mail, Phone, MapPin, Facebook } from 'lucide-react';
import logo from "@/app/assets/logo/techtonicLogo.svg"
import Image from 'next/image';
import Link from 'next/link';

const FooterSection = () => {
  return (
    <footer className="bg-zinc-950  text-white  py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Logo and Social Links */}
          <div className="flex flex-col items-start">
          <div id="logo" className={`duration-300  overflow-hidden mb-4`}>
                <div 
                    className="flex items-center gap-1" 
                    
                >
                    <Image src={logo} alt="techtomic lab" className="w-[2.5rem] md:w-[2.8rem]"/>
                    <h1 className="text-[1.3rem] md:text-[1.8rem] font-semibold tracking-tight text-zinc-100">Techtonic Lab</h1>
                </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Techtonic Lab a subsidiary of Skillcloud Solutions Pvt. Ltd. offers internships and placements to help 
              students gain real-world experience and bridge the gap 
              between academics and industry.
            </p>
            <p className="mb-4 text-gray-400">Let&apos;s connect with our socials</p>
            <div className="flex gap-4 pl-5">
              <Link href="https://www.instagram.com/techtonic_lab?igsh=cWJzNzJhaWlqa2p0" className="text-white hover:text-emerald-500 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61570667766428" className="text-white hover:text-emerald-500 transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-medium mb-6">COMPANY</h3>
            <ul className="space-y-4 pl-4">
              <li><Link href="/aboutus" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/connect-with-us" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms and Condition</Link></li>
              <li><Link href="/hire-from-us" className="text-gray-400 hover:text-white transition-colors">Hire From Us</Link></li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="flex flex-col">
            
            
            <h3 className="text-lg font-medium mb-4 uppercase">Our Address</h3>
            <div className="space-y-4 pl-4">
              <div className="flex items-start">
                <MapPin size={18} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p className="font-medium text-gray-300">Head Office:</p>
                  <p>SAI NIT-JIT PLAZA, Second Floor, Plot No.10, Beltarodi Rd. nr. GULMOHAR RESTAURANT, Manish Nagar, Somalwada, nagpur, MH-440037</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p className="font-medium text-gray-300">Branch Office:</p>
                  <p>Plot No. 81, First Floor, Hiranwar Layout, Near Mayur Kirana Store, Jaitala Road, Nagpur, MH-440036</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-lg font-medium mb-6">Get In Touch</h3>
            <ul className="space-y-4 pl-4">
              <li className="flex items-center">
                <Phone size={18} className="text-blue-500 mr-3" />
                <Link href="tel:+91-8766069947" className="text-gray-400 hover:text-white transition-colors">+91-8766069947</Link>
              </li>
              {/* <li className="flex items-center">
                <Phone size={18} className="text-blue-500 mr-3" />
                <a href="tel:+918109167152" className="text-gray-400 hover:text-white transition-colors">+91-8109167152</a>
              </li> */}
              <li className="flex items-center">
                <Mail size={18} className="text-blue-500 mr-3 shrink-0" />
                <Link href="mailto:admin@techtoniccorporate.com" className="text-gray-400 hover:text-white transition-colors">admin@techtoniccorporate.com</Link>
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mb-4 mt-8">Follow Us</h3>
            <div className="flex gap-4 pl-4">
              <Link href="https://www.instagram.com/techtonic_lab?igsh=cWJzNzJhaWlqa2p0" className="text-white hover:text-emerald-500 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61570667766428" className="text-white hover:text-emerald-500 transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>
        </div>
        {/* <div className=' w-[115%] -ml-[7%] h-0 border-t border-zinc-700 mx-auto mt-10'></div> */}

        {/* Copyright Information */}
        <div className="mt-12 pt-8  text-center text-gray-400 text-sm">
          <p>Copyright © 2025 Techtonic Lab Pvt. Ltd.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
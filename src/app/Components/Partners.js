"use client"
import { Outfit } from 'next/font/google';
import Image from 'next/image';
import synechron from "@/app/assets/clients/syne.svg";
import hp from "@/app/assets/clients/hplogo.png";
import amdocs from "@/app/assets/clients/amdocs.png"
import ibm from "@/app/assets/clients/ibmlogog.png"
import barclay from "@/app/assets/clients/barclay.png";
import bankofamerica from "@/app/assets/clients/boa.svg";
import cog from "@/app/assets/clients/COG.svg";
import infosys from "@/app/assets/clients/infosy.png";
import bmc from "@/app/assets/clients/bmclogo.svg";
import capgemini from "@/app/assets/clients/capgemini.svg";
import namco from "@/app/assets/clients/Namco.png";
import tcs from "@/app/assets/clients/tcs.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Marquee from "react-fast-marquee";

const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const ImageWrapper = ({ src, alt, className = '' }) => {
  const isSVG = src.src?.endsWith('.svg') || typeof src === 'string' && src.endsWith('.svg');
  
  return (
    <div className={`relative w-48 h-24 flex items-center justify-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-contain ${!isSVG ? 'w-auto h-full' : ''}`}
        priority
      />
    </div>
  );
};

export default function PartnerSection() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#partner", {
      y: -80,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: "#partner",
        start: "top 55%",
        end: "top 55%",
      }
    });
  });

  const partners = [
    { src: synechron, alt: 'Synechron' },
    { src: hp, alt: 'HP', className: 'bg-zinc-200 rounded-full' },
    { src: amdocs, alt: 'Amdocs' },
    { src: bankofamerica, alt: 'Bank of America' },
    { src: ibm, alt: 'IBM' },
    { src: barclay, alt: 'Barclays' },
    { src: cog, alt: 'Cognizant' },
    { src: infosys, alt: 'Infosys' },
    { src: bmc, alt: 'BMC' },
    { src: capgemini, alt: 'Capgemini' },
    { src: namco, alt: 'Namco' },
    { src: tcs, alt: 'TCS' }
  ];

  return (
    <div className={`${outfit.className} w-full h-auto z-50 bg-zinc-900 flex flex-col items-center py-10 gap-5`}>
      <h1 
        id='partner' 
        className="partner w-[80%] md:w-[50%] text-[2rem] md:text-[3rem] text-zinc-100 tracking-wide text-center"
      >
        Our Trusted Partners
      </h1>
      <div className="w-full overflow-hidden mt-10 mb-10">
        <Marquee 
          speed={40}
          gradient={false}
          className="flex items-center"
        >
          <div className="flex items-center">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className= " mx-10 md:mx-20 flex items-center justify-center" // Increased margin here
              >
                {partner.src&&<ImageWrapper
                  src={partner.src}
                  alt={partner.alt}
                  className={partner.className}
                />}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
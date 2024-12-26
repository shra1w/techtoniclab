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

export default function PartnerSection() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);  // Register the ScrollTrigger plugin here
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

  return (
    <div className={`${outfit.className} w-full h-auto z-50 bg-zinc-900 flex flex-col items-center py-10 gap-5`}>
      <h1 id='partner' className="partner w-[80%] md:w-[50%] text-[2rem] md:text-[3rem] text-zinc-100 tracking-wide text-center">
        Our Trusted  Partners
      </h1>
      <div className='max-w-[100%] h-auto relative mt-10 mb-10'>
        <div id='partner-logo' className=" w-auto h-full">
          <div id='logdiv' className=" gap-2 md:gap-16 flex">
            <Marquee>
            <div className="flex items-center justify-center shrink-0 mx-10">
              <Image src={synechron} alt='Synechron' width={200} height={100} className="max-w-[60%] md:max-w-[20rem]" />
            </div>
            <div className="flex items-center justify-center shrink-0 mx-10">
              <Image src={hp} alt='HP' width={100} height={100} className='bg-zinc-200 rounded-full max-w-[40%] md:max-w-[20rem]' />
            </div>
            <div className="flex items-center justify-center shrink-0 mx-10">
              <Image src={amdocs} alt='amdocs' width={180} height={180} className='max-w-[40%] md:max-w-[20rem]' />
            </div>
            <div className="flex items-center justify-center shrink-0 mx-10">
              <Image src={bankofamerica} alt='boa' width={380} height={380} className='pb-4 md:max-w-[20rem]' />
            </div>
            <div className="flex items-center justify-center shrink-0 mx-10">
              <Image src={ibm} alt='ibm' width={150} height={150} className='max-w-[40%] md:max-w-[20rem]' />
            </div>
            <div className="flex items-center justify-center shrink-0 mx-10">
              <Image src={barclay} alt='amdocs' width={240} height={240} className='max-w-[40%] md:max-w-[20rem]' />
            </div>
            <div className="flex items-center justify-center shrink-0 mx-10">
              <Image src={cog} alt='cognizant' width={240} height={240} className='max-w-[40%] md:max-w-[20rem]' />
            </div>
            <div className="flex items-center justify-center shrink-0 mx-10">
              <Image src={infosys} alt='infosys' width={150} height={150} className='max-w-[40%] md:max-w-[20rem]' />
            </div>
            <div className="flex items-center justify-center shrink-0 mx-10">
              <Image src={bmc} alt='bmc' width={150} height={150} className='max-w-[40%] md:max-w-[20rem]' />
            </div>
            <div className="flex items-center justify-center shrink-0 pt-5 mx-10">
              <Image src={capgemini} alt='gapgemini' width={250} height={250} className='max-w-[40%] md:max-w-[20rem]' />
            </div>
            <div className="flex items-center justify-center shrink-0 mx-10">
              <Image src={namco} alt='gapgemini' width={250} height={250} className='max-w-[40%] md:max-w-[20rem]' />
            </div>
            <div className="flex items-center justify-center shrink-0 mx-10">
              <Image src={tcs} alt='tcs' width={100} height={100} className='max-w-[40%] md:max-w-[20rem]' />
            </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

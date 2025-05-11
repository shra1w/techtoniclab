"use client"
import Image from "next/image";
import logo from "@/app/assets/logo/techtonicLogo.svg"
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { motion } from "motion/react"
import { useEffect, useState } from "react";
import SideNavBar from "./SideNavbar";
import ContactAvatar from "./ContactAvatar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderSection(){
    const path=usePathname()
    const [hasScrolled, setHasScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    
    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
          // Calculate the scroll threshold (20% of viewport height)
          const scrollThreshold = window.innerHeight * 0.2;
          
          // Check if user has scrolled past the threshold
          if (window.scrollY > scrollThreshold) {
            setHasScrolled(true);
          } else {
            setHasScrolled(false);
          }
        };
    
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);
        
        // Initial check in case the page is already scrolled on load
        handleScroll();
        
        // Clean up event listener when component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className={` ${path==="/career" ? "bg-zinc-900":""} w-full px-3 md:px-6 py-2 flex z-20 items-center justify-between fixed top-0 left-0`}>
            <SideNavBar isOpen={openMenu} setIsOpen={setOpenMenu}  />
            <ContactAvatar/>
            <Link href="/"><div id="logo" className={`duration-300 ${hasScrolled && "scale-0 opacity-0"} overflow-hidden`}>
                <motion.div 
                    className="flex items-center gap-1" 
                    initial={{y:40}} 
                    animate={{y:0}} 
                    transition={{duration:0.5}}
                >
                    <Image src={logo} alt="techtomic lab" className="w-[2.5rem] md:w-[2.8rem]"/>
                    <h1 className="text-[1.3rem] md:text-[1.8rem] font-semibold tracking-tight text-zinc-100">Techtonic Lab</h1>
                </motion.div>
            </div></Link>
            
            <div className="flex items-center gap-3">
                <div className="overflow-hidden md:block hidden text-emerald-600">
                    <motion.div 
                        initial={{x:50}} 
                        animate={{x:0}} 
                        transition={{duration:0.5, delay:1}}
                    >
                        Menu
                    </motion.div>
                </div>
                
                <div className="relative" onClick={() => setOpenMenu(!openMenu)}>
                    {/* Background circle that appears when scrolled or menu is open */}
                    <motion.span 
                        className={`absolute w-full h-full rounded-full duration-300 ${
                            hasScrolled || openMenu 
                                ? `scale-100 ${openMenu ? "bg-rose-600" : "bg-zinc-100"} shadow-xl shadow-emerald-800` 
                                : "scale-0"
                        }`}
                    ></motion.span>
                    
                    {/* Menu button */}
                    <motion.div  
                        initial={{scale: 0}} 
                        animate={{scale: 1}} 
                        transition={{delay:0.3}} 
                        className={`w-11 h-11 rounded-full m-2 z-50 border border-zinc-400 relative mr-2 cursor-pointer hover:bg-zinc-100 duration-300 ${
                            openMenu ? "bg-rose-600" : ""
                        }`}
                    >
                        {!openMenu ? (
                            <div className="w-full h-full relative flex items-center flex-col justify-center gap-1">
                                <span className="w-[50%] h-0 border border-zinc-400"></span>
                                <span className="w-[50%] h-0 border border-zinc-400"></span>
                            </div>
                        ) : (
                            <div className="w-full h-full relative flex items-center flex-col justify-center">
                                <span className="w-[45%] absolute rotate-45 h-0 border border-zinc-400"></span>
                                <span className="w-[45%] absolute -rotate-45 h-0 border border-zinc-400"></span>
                            </div>
                        )}
                    </motion.div>
                </div>
                
                <Link href="/connect-with-us"><div className={`overflow-hidden duration-300 ${hasScrolled && "scale-0 opacity-0 hidden"}`}>
                    <motion.button 
                        initial={{y:60}} 
                        animate={{y:0}} 
                        transition={{duration:0.5, delay:0.6}}  
                        className="flex items-center justify-center gap-2 text-[0.8rem] text-nowrap md:text-[1rem] group px-2 md:px-5 cursor-pointer py-2 rounded-xl text-zinc-950 font-semibold bg-zinc-100"
                    >
                        <span className="md:block hidden">Get in touch</span> 
                        <div className="relative w-8 h-8 rounded-full flex items-center justify-center">
                            <motion.span 
                                transition={{ease:'circOut'}} 
                                className="rounded-full w-full h-full group-hover:bg-zinc-950 z-10 absolute duration-300 scale-0 group-hover:scale-100"
                            ></motion.span>
                            <LuCircleArrowOutUpRight className="absolute text-[1.3rem] md:text-[1rem] z-20 group-hover:text-zinc-100"/>
                        </div>
                    </motion.button>
                </div></Link>
            </div>
        </div>
    )
}
import Image from "next/image";
import logo1 from "@/app/assets/Logo/Techtonic-Lablogo.svg"
import { TbArrowForwardUpDouble } from "react-icons/tb";
import { MdAddLocationAlt } from "react-icons/md";
import { LuMousePointerClick } from "react-icons/lu";
import { MdAttachEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterSection(){
    return(
        <footer className=" w-full bg-gradient-to-br from-sky-300 via-orange-200 to-sky-300 flex  justify-center   ">
            <div className=" w-[100%] min-h-[50vh] bg-zinc-900 rounded-t-xl  py-8 px-[4%] flex ">
                <div className=" w-[50%] h-full  pt-10">
                    <div className=" flex items-center gap-2">
                        <Image src={logo1} alt="logo"  className=" w-16"/>
                        <h1 className=" text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-orange-700 to-sky-300 text-center tracking-tight font-semibold">Techtonic Labs</h1>
                    </div>
                    <p className=" w-[60%] text-[1rem] text-zinc-300 tracking-wider pl-20  leading-5">Techtonic Lab offers internships and placements to help students gain real-world experience and bridge the gap between academics and industry.</p>
                    <div className=" py-10 flex flex-col gap-2 pl-[10%]">
                        <div className=" text-[1.4rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-sky-700 to-zinc-600 flex items-center group hover:underline underline-offset-1 gap-1 "> <MdAddLocationAlt className=" text-zinc-100 text-[1.4rem] mb-1"/><span className=" group-hover:text-orange-400 duration-300 cursor-pointer">Our Address</span></div>
                        <div className=" pl-[6%] space-y-4">
                            <div className=" flex gap-2 ">
                                <TbArrowForwardUpDouble  className=" text-sky-500 text-[1.6rem]"/>
                                <p className=" w-[70%] text-zinc-400"><span className="font-semibold tracking-wider mr-1 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-sky-700 to-zinc-600">Head Office :</span> SAI NIT-JIT PLAZA , Second Floor,Plot No.10,Beltarodi Ed. nr. GULMOHAR RESTAURANT, Manish Nagar,Somalwar , nagpur,MH-440037 </p>
                            </div>
                            <div className=" flex gap-2 ">
                                <TbArrowForwardUpDouble  className=" text-sky-500 text-[1.6rem]"/>
                                <p className=" w-[70%] text-zinc-400"><span className="font-semibold tracking-wider mr-1 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-sky-700 to-zinc-600">Branch Office :</span> SAI NIT-JIT PLAZA , Second Floor,Plot No.10,Beltarodi Ed. nr. GULMOHAR RESTAURANT, Manish Nagar,Somalwar , nagpur,MH-440037 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-[50%] h-full  pt-10 px-[10%]">
                    <div className=" w-auto">
                    <div className=" text-[1.4rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-sky-700 to-zinc-600 flex items-center group hover:underline underline-offset-1 gap-1 "> <LuMousePointerClick className=" text-zinc-100 text-[1.6rem] mb-1"/><span className="  duration-300 cursor-pointer">Get in Touch</span></div>
                    <div className=" pl-[5%] pt-4 text-zinc-300">
                        <div className=" flex px-8 items-center gap-2 text-[1.2rem] ">
                                                    <MdAttachEmail className=" text-[1.4rem] text-sky-700"/>
                                                    <p className="  hover:underline underline-offset-2 ">demo@tectoniclab.tech</p>
                                                </div>
                                                <div className=" flex px-8 items-center gap-2 text-[1.2rem] ">
                                                    <PiPhoneCallFill className=" text-[1.4rem] text-sky-700"/>
                                                    <p className=" ">378217-321-312-32-2321-312</p>
                                                </div>
                    </div>
                    
                    </div>
                    <div className=" w-auto mt-10">
                    <div className=" text-[1.4rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-sky-700 to-zinc-600 flex items-center group hover:underline underline-offset-1 gap-1 "> <FaUsers className=" text-zinc-100 text-[1.6rem] mb-1"/><span className="  duration-300 cursor-pointer">Follow Us</span></div>
                    <div className=" pl-[13%] pt-4 text-zinc-300 flex items-center gap-6">
                        <FaSquareInstagram className=" text-[1.8rem]"/>
                        <FaFacebookSquare className=" text-[1.8rem]"/>
                        <FaXTwitter className=" text-[1.8rem]"/>
                    </div>
                    
                    </div>
                </div>
            </div>
        </footer>
    )
}
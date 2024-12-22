import { TbLayoutDashboardFilled } from "react-icons/tb";
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
})
export default function BoxesDesign(){
    return(
        <div className={` ${outfit.className} absolute left-[50%] top-[10%] grid md:mt-0 mt-10 grid-rows-3 grid-cols-3 gap-1`}>
            <span className=" w-20 h-20 rounded-br-lg  md:block hidden border-r-[3px] border-b-[3px] border-zinc-300 "></span>
            <span className=" w-20 h-20  md:block hidden rounded-b-lg border-t-0 border-[3px] border-zinc-300"></span>
            <span className=" w-20 h-20  md:block hidden rounded-bl-lg border-l-[3px] border-b-[3px] border-zinc-300"></span>
            <span className=" w-20 h-20  md:block hidden rounded-r-lg border-t-[3px] border-r-[3px] border-b-[3px] border-zinc-300"></span>
            <span className=" w-20 h-20  md:block hidden rounded-lg border-[3px] border-zinc-300"></span>
            <span className=" w-20 h-20  md:block hidden rounded-l-lg border-[3px] border-r-0 border-zinc-300"></span>
            <span className=" w-20 h-20  md:block hidden rounded-tr-lg border-t-[3px] border-r-[3px]  border-zinc-300"></span>
            <span className=" w-20 h-20  md:block hidden rounded-t-lg border-[3px] border-b-0 border-zinc-300"></span>
            <span className=" w-20 h-20  md:block hidden rounded-tl-lg border-[3px] border-b-0 border-r-0 border-zinc-300"></span>
            <div className=" w-[14vw] h-[12vh] flex justify-center items-center top-6 rounded-lg bg-zinc-200 bg-opacity-10 backdrop-blur-sm absolute p-2">
                <div className=" w-full h-full  rounded-md"></div>
                <div className=" layout w-10 h-10 shrink-0 absolute text-zinc-100 text-[1.4rem] rounded-full grid place-items-center bg-zinc-950 ">
                    <TbLayoutDashboardFilled />
                </div>
                <div className=" layout-text origin-left w-[14rem] h-[5rem]  text-[1.1rem] absolute left-[70%] md:left-[60%] bottom-[70%] md:bottom-[65%] rounded-md bg-zinc-100 shadow-xl shadow-orange-200 p-2 flex items-center text-sky-700  leading-5 px-3 text-center">
                From learning to earning, we've got you covered.
                </div>
                <div className=" w-[15rem] layout-text origin-right h-[5rem] text-[1.1rem] absolute right-[70%] md:right-[60%] top-[70%] md:top-[65%] rounded-md bg-zinc-100 shadow-xl flex items-center shadow-sky-200 p-2 text-sky-700  leading-5 px-3 text-center">
                    Empowering students with skills and opportunities.

                </div>

            </div>
        </div>
    )
}
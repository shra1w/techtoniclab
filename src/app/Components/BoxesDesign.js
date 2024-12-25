import { TbLayoutDashboardFilled } from "react-icons/tb";
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
})
export default function BoxesDesign(){
    return(
        <>
        <div className="md:block hidden">
        <div className={` ${outfit.className} absolute    left-[50%] top-[10%] grid md:mt-0 mt-10 grid-rows-3 grid-cols-3 gap-1`}>
            <span className=" w-20 h-20 rounded-br-lg  border-r-[3px] border-b-[3px] border-zinc-300 "></span>
            <span className=" w-20 h-20  rounded-b-lg border-t-0 border-[3px] border-zinc-300"></span>
            <span className=" w-20 h-20  rounded-bl-lg border-l-[3px] border-b-[3px] border-zinc-300"></span>
            <span className=" w-20 h-20  rounded-r-lg border-t-[3px] border-r-[3px] border-b-[3px] border-zinc-300"></span>
            <span className=" w-20 h-20  rounded-lg border-[3px] border-zinc-300"></span>
            <span className=" w-20 h-20  rounded-l-lg border-[3px] border-r-0 border-zinc-300"></span>
            <span className=" w-20 h-20  rounded-tr-lg border-t-[3px] border-r-[3px]  border-zinc-300"></span>
            <span className=" w-20 h-20  rounded-t-lg border-[3px] border-b-0 border-zinc-300"></span>
            <span className=" w-20 h-20  rounded-tl-lg border-[3px] border-b-0 border-r-0 border-zinc-300"></span>
            
            
        </div>
        </div>

</>
    )
}
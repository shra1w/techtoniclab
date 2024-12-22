import Image from "next/image";
import CardShape from "@/app/assets/Icons/leadshape.svg"
import { LuCircleFadingArrowUp } from "react-icons/lu";

export default function LeadersCardDesign({eachLeader}){
    return(
        <div className=" w-[18rem] h-[24rem] group shrink-0 hover:rounded-r-none  rounded-2xl border border-zinc-700 relative flex justify-center items-center">
             <div className=" absolute bottom-0 h-[47%]  w-full rounded-xl overflow-hidden group-hover:rounded-r-none  ">
                 <div className=" w-[27rem] h-[9rem] absolute group-hover:bg-sky-700 duration-300 -left-5 top-6 bg-zinc-700  backdrop-blur-md bg-opacity-35 -rotate-[12deg]"></div>
                 <div className=" w-[25rem] h-[8rem] absolute -left-3 top-[2.13rem] bg-zinc-700  backdrop-blur-md bg-opacity-60 group-hover:bg-opacity-90 -rotate-[12deg]">
                    
                    
                 </div>
                 <div className=" w-full h-[7rem]  border-zinc-100 absolute bottom-0 left-0 flex flex-col items-center">
                     <h1 className=" text-[1.4rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-orange-200 to-sky-300 text-center">{eachLeader?.name || "casc"}</h1>
                     <p className=" text-[1rem] text-zinc-400 leading-5 text-center w-full pt-1 px-2 ">{eachLeader?.tag}</p>
                     <LuCircleFadingArrowUp className=" absolute -top-10 text-[2.1rem] rotate-90 group-hover:rotate-[270deg] duration-300 text-sky-500 right-2"/>
                     </div>
             </div>
             <div className=" group-hover:w-[25rem] w-0 duration-500 absolute grid place-items-center rounded-r-xl group-hover:border border-blue-600 top-0 h-full left-[100.5%] bg-sky-800 bg-opacity-70 z-20 ">
                <div className=" w-[95%] h-[95%] bg-zinc-800  rounded-xl overflow-x-hidden">
                    <ul className=" flex flex-col items-center overflow-x-hidden overflow-y-auto">
                        <h1 className={`text-[1.7rem]  font-[500] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-orange-200 to-sky-300 pt-3 pb-4 group-hover:opacity-100 opacity-0 group-hover:scale-100 scale-0 origin-left duration-300 group-hover:delay-300`}>Professional Overview</h1>
                        {eachLeader?.content.map((each,index)=>{
                            return(
                                <p key={index} className={` group-hover:opacity-100 opacity-0 group-hover:scale-100 scale-0 origin-left duration-300 group-hover:delay-300 w-[90%] text-zinc-200 text-[0.9rem] py-2`}>{each}</p>
                            )
                        })}
                    </ul>
                </div>
             </div>
         </div>
    )
}


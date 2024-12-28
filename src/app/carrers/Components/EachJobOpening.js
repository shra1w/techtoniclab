import { TiUser } from "react-icons/ti";
import { MdAddLocationAlt } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function EachJobOpening({eachJob,setCarrerContact}){
    return(



<>
<div className=" md:block hidden w-full" onClick={()=>setCarrerContact(true)}>
<div className=" mx-auto  w-[90%] h-[11rem] border bg-zinc-100 border-zinc-300  duration-300 group rounded-lg grid mb-4 p-1" 
            style={{ gridTemplateColumns: '40% 20% 30% 10%' }}>
            <div className="">
                <h2 className=" w-full h-[30%] text-zinc-600  shrink-0 pl-[10%] flex gap-1 items-center"><TiUser className=" text-[1.3rem]"/>Position</h2>
                <div className=" px-4 pl-[10%] text-[2.5rem] leading-9 group-hover:text-teal-600 font-semibold h-[70%] flex  items-center">{eachJob?.position}</div>
            </div>
            <div className="">
            <h2 className=" w-full h-[30%]  text-zinc-600 shrink-0 pl-[10%] flex gap-1 items-center"><MdAddLocationAlt className=" text-[1.3rem]"/>Location</h2>
            <div className=" px-4 text-[1.4rem] font-semibold h-[70%] pl-[15%] flex  items-center">{eachJob.location}</div>
            </div>
            <div className="">

            <h2 className=" w-full h-[30%]  text-zinc-600 shrink-0 pl-[10%] flex gap-1 items-center"><FaTags className=" text-[1.3rem]"/>Skills</h2>
            <div className="px-4 text-[1.4rem] font-semibold h-[70%] pl-[15%] flex items-center  flex-wrap">
                <div className=" flex flex-wrap gap-x-6 ">
                {eachJob?.skills.map((eachSkill,index)=>{
        return(
            <h1 key={index} className="text-[0.9rem] shrink-0 text-nowrap font-medium hover:underline hover:text-teal-700 cursor-pointer duration-300">
                {eachSkill}
            </h1>
        )
    })}
                </div>
    
</div>
            </div>
            <div className=" text-zinc-600 group-hover:text-teal-600 flex justify-center items-center">
                <IoArrowUpCircleOutline className=" text-[3rem] rotate-45 group-hover:rotate-90 duration-300"/>
            </div>
        </div>
        </div>
<div className="md:hidden block w-[22rem] p-2 h-[16rem] rounded-lg border border-zinc-300 bg-zinc-100" onClick={()=>setCarrerContact(true)}>
    <div className=" w-full flex  items-center gap-2 text-zinc-600">
        <MdAddLocationAlt/> {eachJob.location}
    </div>
    <div className=" text-[2.5rem] pl-[5%] leading-9 font-semibold  w-full h-[60%] flex justify-center items-center">
    {eachJob?.position}
    </div>
    <div className=" w-full flex  items-end h-[30%]  pl-[8%]">
        <div className="  flex flex-wrap gap-x-3">
        {eachJob?.skills.map((eachSkill,index)=>{
        return(
            <h1 key={index} className="text-[0.9rem] shrink-0 text-nowrap font-medium hover:underline hover:text-teal-700 cursor-pointer duration-300">
                {eachSkill}
            </h1>
        )
    })}
        </div>
 
    </div>
</div>
</>
    )
}
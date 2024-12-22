import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
})
export default function PartnerSection(){
    return(
        <div className={` ${outfit.className} w-full h-auto bg-zinc-900 flex flex-col items-center py-10 gap-5  `}>
            <h1 className=" w-[80%] md:w-[50%] text-[2rem] md:text-[3rem] text-zinc-100 tracking-wide">Our Trusted Placement Partners</h1>
            <div className=' w-[86%] h-[20%] border relative mt-10 mb-10'>
            <div className="scroll-container w-full h-full">
    <div className="scroll-content ">
        <div className="w-[14rem] h-full border border-gray-300 bg-white m-2"></div>
        <div className="w-[14rem] h-full border border-gray-300 bg-white m-2"></div>
        <div className="w-[14rem] h-full border border-gray-300 bg-white m-2"></div>
        <div className="w-[14rem] h-full border border-gray-300 bg-white m-2"></div>
    </div>
</div>
            </div>
        </div>
    )
}
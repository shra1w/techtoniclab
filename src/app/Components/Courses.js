export default function OurCourses(){
    return(
        <div className=" w-full min-h-screen bg-gradient-to-tr from-sky-300 flex flex-col gap-5  items-center via-orange-200 to-sky-300 px-3 py-10">
            <h1 className=" text-[2.5rem] font-[500]">Our Expertise</h1>
            <p className=" text-[1.2rem] w-[80%] text-center">At Techtonic-Lab, we drive business transformation with IT consulting, SAP integration, and data analytics. Our expert team leverages technology to simplify digital transformation, optimize processes, and unlock data's full potential.</p>
            <div className=" w-full h-aut0 pt-8 space-y-2">
                <div className=" w-full h-[60vh]  flex p-2 gap-5 ">
                    <div className=" w-[50%] h-full bg-zinc-900 flex  rounded-2xl justify-center items-center flex-col gap-4">
                    <h1 className="text-[2.4rem]  font-[500] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-orange-200 to-sky-300">
    Seamless SAP Integration Solutions
</h1>
<p className=" text-[1.2rem] text-center text-zinc-200 w-[70%]">With deep expertise in SAP systems, we offer end-to-end integration
services that streamline operations, improve resource management, and drive business
value.</p>
                    </div>
                    <div className=" w-[50%] h-full"></div>
                </div>
                <div className=" w-full h-[60vh]  flex p-2 gap-5 ">
                    <div className=" w-[50%] h-full "></div>
                    <div className=" w-[50%] h-full bg-zinc-900 flex  rounded-2xl justify-center items-center flex-col">
                    <h1 className="text-[2.4rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-orange-200 to-sky-300">
                    Innovative IT Consulting Services
</h1>
<p className=" text-[1.2rem] text-center text-zinc-200 w-[70%]">We partner with businesses to provide strategic guidance on technology
solutions tailored to meet their unique needs, enabling growth and efficiency.</p>
                    </div>
                </div>
                <div className=" w-full h-[60vh]  flex p-2 gap-5 ">
                    <div className=" w-[50%] h-full bg-zinc-900 flex  rounded-2xl justify-center items-center flex-col">
                    <h1 className="text-[2.4rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-orange-200 to-sky-300">
                    Advanced Data Analytics Solutions
</h1>
<p className=" text-[1.2rem] text-center text-zinc-200 w-[70%]">Our data analytics services empower companies to make data-driven
decisions, extract actionable insights, and enhance performance across all areas of
operation.</p>
                    </div>
                    <div className=" w-[50%] h-full"></div>
                </div>
            </div>
        </div>
    )
}
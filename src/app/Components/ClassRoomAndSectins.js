import ImageCarousel from "./ImageGallery";

export default function ClassRommSection(){
    return(
        <div className=" w-screen h-auto  ">
            <div className=" w-full h-full bg-gradient-to-tr from-sky-300 flex flex-col items-center via-orange-200 to-sky-300  px-4 py-10 gap-4">
                <h1 className=" text-[3rem] tracking-wide font-[500]">Building Skills, Shaping Futures</h1>
                <p className=" text-[1.2rem] w-[70%] text-center">Explore our state-of-the-art classrooms and training sessions designed to empower students with industry-ready skills. Experience a learning environment that fosters growth and innovation.</p>
                <div className=" w-[70%] h-auto  backdrop-blur-sm bg-zinc-800 bg-opacity-25 rounded-xl p-2">
                    <div className=" w-full h-full">
                        <ImageCarousel/>
                    </div>
                </div>
            </div>
        </div>
    )
}
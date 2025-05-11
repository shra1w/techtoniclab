"use client"
import Image from "next/image";
import { LuCircleFadingArrowUp } from "react-icons/lu";
import { motion } from "framer-motion";

export default function LeadersCardDesign({ eachLeader, setShowDetails, setCategory }) {
    const handleShowDetails = (e) => {
        e.stopPropagation();
        setShowDetails(true);
    };

    return (
        <motion.div 
            className="w-[16rem] sm:w-[18rem] h-[24rem] group shrink-0 hover:rounded-r-none overflow-hidden rounded-2xl shadow-xl shadow-zinc-800/40 hover:shadow-emerald-800/40 duration-300 cursor-pointer relative flex justify-center items-center"
            whileHover={{ y: -16 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
            {eachLeader.profile && (
                <Image 
                    src={eachLeader.profile} 
                    alt="profile image" 
                    className="object-cover h-full w-full"
                    priority
                />
            )}
            
            <div className="absolute bottom-0 h-[47%] w-full rounded-xl overflow-hidden group-hover:rounded-r-none">
                <motion.div 
                    className="w-[27rem] h-[9rem] absolute -left-5 top-6 bg-zinc-700 backdrop-blur-md bg-opacity-35 -rotate-[12deg]"
                    animate={{ backgroundColor: "var(--emerald-500)" }}
                    transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                    className="w-[25rem] h-[8rem] absolute -left-3 top-[2.13rem] bg-zinc-700 backdrop-blur-md bg-opacity-60 group-hover:bg-opacity-90 -rotate-[12deg]"
                />
                
                <div className="w-full h-[7rem] border-zinc-100 absolute bottom-0 left-0 flex flex-col items-center">
                    <h1 className="text-xl sm:text-[1.4rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-orange-200 to-sky-300 text-center px-1">
                        {eachLeader?.name || "Name"}
                    </h1>
                    <p className="text-sm sm:text-base text-zinc-400 leading-5 text-center w-full pt-1 px-2">
                        {eachLeader?.tag}
                    </p>
                    
                    <motion.div
                        className="absolute -top-10 text-[2.1rem] text-sky-500 right-2 z-10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleShowDetails}
                    >
                        <motion.div
                            animate={{ rotate: [90, 270] }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="group-hover:rotate-[270deg]"
                        >
                            <LuCircleFadingArrowUp />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
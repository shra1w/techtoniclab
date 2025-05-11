import Image from "next/image";
import CircularLogo from "./CircularLogo";
import { useRouter } from "next/navigation";

export default function ContactAvatar(){
    const router=useRouter()
    return(
        <div className="  hidden w-44 h-44 fixed rounded-full group hover:scale-[105%] duration-300 hover:bg-emerald-600/40 cursor-pointer md:flex items-center justify-center overflow-hidden z-50 right-3 bottom-3 " onClick={()=>router.push("/connect-with-us")}>
            <div className=" absolute bg-emerald-100/10 w-full h-full animate-pulse"></div>

<div className=" w-32 h-32   rounded-full flex items-center justify-center z-50  bg-emerald-100/20">
<CircularLogo/>
<div className=" w-14 h-14 rounded-full absolute  bg-zinc-200 grid place-items-center overflow-hidden">
    <Image src="/callAvatar.png" alt="avatar" width={55} height={55} className=" mt-1"/>
</div>
</div>

        </div>
    )
}
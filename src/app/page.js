import Image from "next/image";
import HeaderSection from "./Components/HeaderSection";
import HeroSection from "./Components/HeroSection";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] flex justify-center w-screen min-h-screen items-center">
      <HeaderSection/>
      <HeroSection/>
    </div>
  );
}

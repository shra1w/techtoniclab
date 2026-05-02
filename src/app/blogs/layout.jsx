import FooterSection from "../Components/FooterSection";
import HeaderSection from "../Components/HeaderSection";

export default function RootLayout({ children }) {
  return (    
      <div className=" pt-20 flex text-black flex-col"
      >
        <HeaderSection/>
                {children}
                <FooterSection/>
      </div>
    
  );
}
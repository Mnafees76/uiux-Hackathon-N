import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function Herocon() {
  return (
    <main className="w-full relative flex flex-col justify-center items-center h-[200px] sm:h-[300px] max-w-screen-2xl mx-auto">
    {/* Background Layer */}
    <div
className="absolute inset-0 bg-cover bg-center h-[200px] sm:h-[300px] mx-2 sm:mx-5"
style={{
  backgroundImage: "url('/images/s.hero.jpeg')",
  opacity: 0.8,
  filter: "blur(2px)", // Blur effect add kiya
}}
></div>




    {/* Rocket Image */}
    <div className="w-full relative flex justify-center items-center mb-20 sm:mb-[85px]">
      <Image
        src="/images/sp2.png"
        width={80}
        height={80}
        alt="Rocket Single Seater"
        className="h-auto object-contain max-w-full w-[40px]  sm:w-[80px]  sm:h-[80px]"
      />
    </div>

    {/* Title */}
    <div className="absolute top-[40%] sm:top-[50%] translate-y-[-50%] flex flex-col items-center text-center">
      <h1 className="text-md sm:text-2xl font-bold">Contact</h1>
    </div>

    {/* Breadcrumb Navigation */}
    <div className="absolute sm:bottom-14 flex justify-center items-center text-xs sm:text-base mt-2 sm:mt-0 mb-0  sm:mb-11">
     <Link href="/">
     <span className="text-gray-700 mr-1 sm:mr-2">Home</span>
     </Link>
      <FaChevronRight className="text-gray-700" />
     
     <span className="text-gray-700 ml-1 sm:ml-2">Contact</span>
    
    </div>
  </main>
    
  );
}

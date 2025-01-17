import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

export default function Myhero() {
  return (
    <main className="relative flex flex-col justify-center items-center w-full h-[400px] sm:h-[500px] max-w-screen-2xl mx-auto">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/imags/s.hero.jpeg')",
          opacity: 0.3,
        }}
      ></div>

      {/* Rocket Image */}
      <div className="w-full relative flex justify-center items-center mb-16 sm:mb-32">
        <Image
          src="/imags/sp2.png"
          width={80}
          height={80}
          alt="Rocket Single Seater"
          className="h-auto object-contain max-w-full"
        />
      </div>

      {/* Title */}
      <div className="absolute top-[50%] translate-y-[-50%] flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mt-5">My Account</h1>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="absolute sm:bottom-14 flex justify-center items-center text-sm sm:text-base mb-32">
        <span className="text-gray-700 mr-4 sm:mr-6">Home</span>
        <FaChevronRight className="text-gray-700" />
        <span className="text-gray-700 ml-4 sm:ml-6">My account</span>
      </div>
    </main>
  );
}

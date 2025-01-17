import Image from "next/image";

export default function Hearo() {
  return (                                                                                                                                 //ye dekho//                                                                   
    <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center w-full h-auto sm:h-[500px] bg-[#FBEBB5] p-4 sm:p-6 md:p-10 max-w-screen-2xl mx-auto">
      {/* Text Section */}
      <div className="text-center sm:text-left mt-4 sm:mt-0 sm:ml-10 flex flex-col justify-center items-center sm:items-start">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold md:font-bold max-w-[440px] leading-tight">
          Rocket Single Seater
        </h1>
        <button className="mt-6 sm:mt-8 underline underline-offset-8 text-lg sm:text-xl">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center mt-8 sm:mt-0 w-full sm:w-auto">
        <Image
          src="/imags/hearo.png"
          width={400}
          height={400}
          alt="Rocket Single Seater"
          className="w-[200px] sm:w-[300px] md:w-[400px] h-auto object-contain max-w-full"
         
        />
         
         
      </div>
      
      
    </div>
  );
}

import Image from "next/image"
export default function Product(){
  return(
     <main className="flex justify-center items-center flex-col md:flex-row w-full h-[600px] md:h-full bg-[#FAF4F4] max-w-screen-2xl mx-auto">
            {/* left side */}
             <div className="flex justify-center items-center w-full h-[300px] md:h-full">
                 <Image src={"/images/p1.png"} width={300} height={300} alt="pic" className="-ml-12 md:ml-36 -mt-10 md:-mt-0"></Image>
             </div>
              <span className="absolute mr-0 md:mr-96 md:mt-52 font-semibold mb-20 sm:mb-0">Side table</span>
              <button className="absolute text-xs underline underline-offset-8 md:mt-64 mr-0 md:mr-96 mb-8 md:mb-0">View More</button>

              {/* Right side */}
               <div className="flex justify-center items-center w-full h-[200px] md:h-[400px]">
               <Image src={"/images/p2.png"} width={400} height={400} alt="pic" className="pr-20 sm:pr-0" ></Image>
              
               </div>
               <span className="absolute font-semibold mt-96 md:mt-56 md:ml-80">Side table</span>
               <button className="absolute text-xs underline underline-offset-8 mt-[430px] md:mt-[270px] md:ml-[315px]">View More</button>


     </main>                      
  )
}
 
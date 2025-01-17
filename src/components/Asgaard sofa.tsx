import Image from "next/image"
export default function Asgaardsofa(){
    return(
        <main className="flex-col md:flex-row flex justify-between max-w-screen-2xl mx-auto w-full sm:w-full h-full md:h-[500px] bg-[#fff9E5]">
                 {/* Left side */}
                  <div className="mr-0 ml-0">
                      <Image src={"/imags/p7.png"} width={550} height={550} alt="pic"></Image>
                  </div>
                   {/* Rihgt side */}
                     <div className="w-full md:w-[500px] md:ml-20 pt-0 md:pt-40 pl-24 md:pl-0 pb-5 md:pb-0">
                          <span className="text-xs pl-10">New Arrivals</span>
                          <h1 className="text-2xl font-bold">Asgaard sofa</h1>
                          <button className="text-xs outline ml-10 px-3 mt-5">Order Now</button>
                     </div>
        </main>
    )
}
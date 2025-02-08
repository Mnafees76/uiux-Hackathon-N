import { FaSliders } from "react-icons/fa6";
import { CiGrid41 } from "react-icons/ci";
import { AiOutlinePicCenter } from "react-icons/ai";



import { SelectDemo } from "./select";
import { SheetDemo } from "./ui/sheet2";
import { SheetSide } from "./sheet";



export default function Navebar() {
    return ( 
         <>
         
        <main className="flex  w-full h-[50px] max-w-screen-2xl mx-auto bg-[#FAF4F4] mt-6">
            <div className="block sm:hidden mt-2 ml-3">
            <SheetSide/>
            </div>
            

            {/* Desktop and Tablet View */}
            <div className="hidden sm:flex w-[70%] px-4 md:px-10">
                {/* Left side */}
                <div className="flex items-center md:w-[750px]">
                    <FaSliders />
                    <span className="ml-2 text-sm">Filter</span>
                    <CiGrid41 className="ml-5" />
                    <AiOutlinePicCenter className="ml-5" />
                    <div className="flex w-[1px] h-8 bg-gray-600 mx-10"></div> {/* Vertical Line */}
                    <span className="text-xs">Showing 1–16 of 32 results</span>
                </div>

                {/* Right side */}
               
            </div>
            <div className="hidden sm:flex  items-center w-[300px]">
                    <span className="text-xs">Show</span>
                    <div className="flex justify-center items-center bg-[#FFFFFF] rounded-md mx-3">
                           
                        <select className="text-xs bg-[#FFFFFF] py-1 rounded-md">
                            <option value="1">16</option>
                            <option value="2">32</option>
                            <option value="2">48</option>
                           
                        </select>
                        {/* <span className="text-[#9F9F9F] text-xs">16</span> */}
                    </div>
                    <span className="text-xs">Sort by</span>
                    <div className="relative ml-2">
                   
                   
                        <select className="text-xs bg-[#FFFFFF] py-1 px-3 rounded-md">
                            <option value="1">Default</option>
                            <option value="2">Price: Low to High</option>
                            <option value="3">Price: High to Low</option>
                            <option value="4">Newest First</option>
                        </select>
                    </div>
                </div>
        </main>
        </>
    );
}

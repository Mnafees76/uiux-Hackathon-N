import { Button } from "@/components/ui/button"
import { FaSliders } from "react-icons/fa6";
import { CiGrid41, CiHeart, CiSearch } from "react-icons/ci";
import { AiOutlinePicCenter } from "react-icons/ai";
import { LuSquareMenu } from "react-icons/lu";


import {
  Sheet,

  SheetContent,
 
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { IoCartSharp } from "react-icons/io5";
import { BsPersonExclamation } from "react-icons/bs";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button><LuSquareMenu /></Button>
      </SheetTrigger>
      <SheetContent>                          
                  
                      {/* Icons  */}
      <div className=" flex-col justify-center items-center space-x-4 w-full ">
        
      
         
      <Link href="/myaccount" aria-label="User Profile">
        
        <  BsPersonExclamation size={40} className="text-gray-600 hover:text-gray-800" /> User
        <br />
         </Link>
    
        <Link href="/" aria-label="Search">
          <CiSearch size={40} className="text-gray-600 hover:text-gray-800" />Search
          <br />
        </Link>
        <Link href="/" aria-label="Favorites">
          <CiHeart size={40} className="text-gray-600 hover:text-gray-800" />Favorites
          <br />
        </Link>
        <Link href="/cart" aria-label="Cart">
          <IoCartSharp size={40} className="text-gray-600 hover:text-gray-800" />Cart
        </Link>
       
      </div>
        {/* </span>
                      </div> */}
       
          
      
      </SheetContent>
    </Sheet>
  )
}

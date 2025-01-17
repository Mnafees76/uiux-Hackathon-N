"use client"
            //   navebar ki file ye ha
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImMenu } from "react-icons/im";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaSliders } from "react-icons/fa6";
import { CiGrid41 } from "react-icons/ci";
import { AiOutlinePicCenter } from "react-icons/ai";

const SHEET_SIDES = ["top",  ] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button>
            <ImMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
              
              </SheetDescription>
            </SheetHeader>
            <div className="flex-col sm:flex w-full justify-between px-4 md:px-10">
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
                <div className="flex justify-center items-center w-[290px]">
                    <span className="text-xs">Show</span>
                    <div className="flex justify-center items-center w-[35px] sm:w-[30px] h-[30px] mx-2 bg-slate-300 sm:bg-[#FFFFFF] rounded-md">
                        <span className="text-[#9F9F9F] text-xs">16</span>
                    </div>
                    <span className="text-xs">Sort by</span>
                    <div className="relative ml-2">
                        <select className=" text-xs bg-[#FFFFFF] py-1 px-3 rounded-md">
                        <option value="1">Default</option>
                            <option value="2">Price: Low to High</option>
                            <option value="3">Price: High to Low</option>
                            <option value="4">Newest First</option>
                        </select>
                    </div>
                </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
             
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}

"use client"
import Link from "next/link";
import { BsPersonExclamation } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import { SheetDemo } from "./ui/sheet2";
import { useEffect, useState } from "react";
import { Sub } from "@radix-ui/react-dropdown-menu";
import { useAppSelector } from "@/app/store/hooks";


// import { SheetDemo } from "@/components/sheet";

export default function Header() {
  const cart = useAppSelector((state)=>state.cart);
  return (
    <header className="flex justify-evenly items-center w-[100%] h-auto p-4 bg-white max-w-screen-2xl mx-auto">
      {/* Links */}
      <div className="flex justify-center items-center w-full sm:w-auto mb-2 sm:mb-0">
           
        <ul className="flex flex-wrap justify-center items-center space-x-4 text-sm sm:text-base md:text-lg lg:text-xl sm:ml-48">
          <li>
            <Link href="/#" className="hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Shop" className="hover:text-gray-700">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-700">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-700">
              Contact
            </Link>
          </li>
        </ul>
      </div>
        {/* Icons */}
<div className="hidden sm:grid grid-cols-4 space-x-5 -mr-28">
  <div className="flex justify-center items-center">
    <Link href="/myaccount" aria-label="User Profile">
      <  BsPersonExclamation size={24} className="text-gray-600 hover:text-gray-800" />
    </Link>
  </div>
  <div>
    <Link href="/" aria-label="Search">
      <CiSearch size={24} className="text-gray-600 hover:text-gray-800" />
    </Link>
  </div>
  <div>
    <Link href="/" aria-label="Favorites">
      <CiHeart size={24} className="text-gray-600 hover:text-gray-800" />
    </Link>
  </div>
   <Link href="/cart"aria-label="cart">
  <div className="relative inline-block">
      <IoCartSharp size={24} className="text-gray-600 hover:text-gray-800" />
      {cart.length>0 &&  <span
        className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center"
      >
      {cart.length}
      </span>}
     
    </div>
    </Link>

</div>



     
      
       
 
      <div className="flex sm:hidden" >
             <SheetDemo/> 
           </div> 
      
    </header>
  );
}

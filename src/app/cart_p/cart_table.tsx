"use client";

import { AiFillDelete } from "react-icons/ai";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { delItem } from "../store/features/cart";
import Link from "next/link";

export default function Carttable() {
  
  const cartArray = useAppSelector((state) => state.cart);
  const total = cartArray.reduce((total, arr) => {
    return total + arr.price * arr.qty;
  }, 0);

  const dispatch = useAppDispatch();

  function getCart( title: string, size: string, qty: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main className="flex flex-col md:flex-row justify-center items-start w-full min-h-screen p-4 gap-8 md:mt-20  max-w-screen-2xl mx-auto">
      {/* Left Side */}
      <div className="w-full md:w-2/3">
        <div className="hidden sm:flex w-full bg-[#FFF9E5] text-xs font-semibold p-2">
          <span className="w-1/4">Product</span>
          <span className="w-2/4 pl-40">Price</span>
          <span className="w-1/4">Quantity</span>
          <span className="w-1/4">Subtotal</span>
        </div>

        {cartArray.length >= 1 ? (
          cartArray.map((item, id) => (
            <div
              key={id}
              className="flex flex-wrap md:flex-nowrap items-center bg-white border-b py-4 -ml-0 sm:-ml-16"
            >
              {/* Product Image */}
              <div className="w-full md:w-1/4 flex justify-center">
                <Image
                  src={item.image}
                  width={90}
                  height={90}
                  alt={item.title}
                  className="object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-3/4 mt-4 md:mt-0 space-y-2 md:space-y-0 text-xs text-[#9F9F9F]">
                <span className="w-full md:w-1/4 text-center md:-ml-10">
                  {item.title}
                </span>
                <span className="w-full md:w-1/4 text-center">Rs:{item.price}</span>
                <div className="flex justify-center items-center w-12 h-8 border border-gray-300 text-[#000000]">
                  {item.qty}
                </div>
                <span className="w-full md:w-1/4 text-center text-[#000000]">
                 Rs: {item.price * item.qty}
                </span>
                <div className="text-[#FBEBB5]">
                  <AiFillDelete
                    onClick={() => dispatch(delItem(item.uuid))}
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-10">
            Your cart is empty.
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[250px] bg-[#FFF9E5] p-6 rounded-lg">
        <h1 className="text-xl font-bold text-center mb-4">Cart Totals</h1>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="text-[#9F9F9F]">{total}</span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span className="text-[#B88E2F]">{total}</span>
          </div>
        </div>
        <Link href="/checkout">
        <button  onClick={() => getCart(item.title, item.size, item.qty)} className="w-full mt-6 outline outline-1 outline-offset-1 outline-black text-[#000000] py-2 rounded active:bg-yellow-600 active:text-white">
          Check Out
        </button>
        </Link>
      </div>
    </main>
  );
}

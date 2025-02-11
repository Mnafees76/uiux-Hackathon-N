import { MdOutlineWatchLater } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import Image from "next/image";

export default function OurBlogs() {
  return (
    <main className="flex flex-col w-full max-w-5xl mx-auto bg-white p-4 sm:p-6 lg:p-8 ">
      {/* Header */}
      <h1 className="text-center font-semibold text-xl md:text-2xl">Our Blogs</h1>
      <p className="text-center text-sm md:text-base mt-2 text-gray-600">
        Find a bright idea to suit your taste with our great selection
      </p>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Product 1 */}
        <div className="text-center">
          <Image
            src="/images/p8.jpeg"
            width={300}
            height={300}
            alt="Trenton Modular Sofa"
            className="rounded-md object-cover mx-auto"
          />
          <p className="text-xs mt-2 text-gray-700">Going all-in with millennial design</p>
          <h1 className="text-sm font-semibold text-gray-800 underline underline-offset-8">Read More</h1>
          <div className=" flex justify-center pt-3 gap-2">
            <MdOutlineWatchLater className="" /> <span className="text-xs">5 min</span>
            <LuCalendar /> <span className="text-xs">12th Oct 2022</span>
            </div>
        </div>

        {/* Product 2 */}
        <div className="text-center">
          <Image
            src="/images/p9.jpeg"
            width={300}
            height={300}
            alt="Granite Dining Table"
            className="rounded-md object-cover mx-auto"
          />
          <p className="text-sm mt-2 text-gray-700">
          Going all-in with millennial design
          </p>
          <h1 className="text-sm font-semibold text-gray-800 underline underline-offset-8">Read More</h1>
            <div className="flex justify-center pt-3 gap-2">
            <MdOutlineWatchLater className="" /> <span className="text-xs">5 min</span>
            <LuCalendar /> <span className="text-xs">12th Oct 2022</span>
            </div>
        </div>
        

        {/* Product 3 */}
        <div className="text-center">
          <Image
            src="/images/p10.jpeg"
            width={300}
            height={300}
            alt="Outdoor Bar Table"
            className="rounded-md object-cover mx-auto"
          />
          <p className="text-sm mt-2 text-gray-700">
          Going all-in with millennial design
          </p>
          <h1 className="text-sm font-semibold text-gray-800 underline underline-offset-8">Read More</h1>
          <div className="flex justify-center pt-3 gap-2">
            <MdOutlineWatchLater className="" /> <span className="text-xs">5 min</span>
            <LuCalendar /> <span className="text-xs">12th Oct 2022</span>
            </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center items-center mt-8">
        <button className="text-sm text-blue-600 hover:text-blue-800 underline underline-offset-4 transition duration-200">
          View More
        </button>
      </div>
    </main>
  );
}

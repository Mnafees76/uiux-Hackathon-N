import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

export default function Detail() {
  return (
    <main className="flex flex-col justify-center w-full mt-10 max-w-screen-2xl mx-auto px-4">
      <div className="text-center">
        <h1>Get In Touch With Us</h1>
        <p className="text-[#9F9F9F] text-xs w-full sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto mt-3">
          For More Information About Our Product & Services. Please Feel Free
          To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start w-full mt-7 gap-5 px-4 sm:px-0">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 space-y-3">
          <div className="flex items-center">
            <FaLocationDot className="mr-2" />
            <h1 className="font-semibold">Address</h1>
          </div>
          <p className="text-xs ml-4 w-40">236 5th SE Avenue, New York NY10000, United States</p>

          <div className="flex items-center">
            <FaPhoneAlt className="mr-2" />
            <h1 className="font-semibold">Phone</h1>
          </div>
          <p className="text-xs ml-4">
            Mobile: +(84) 546-6789 <br />
            Hotline: +(84) 456-6789
          </p>

          <div className="flex items-center">
            <IoTime className="mr-2" />
            <h1 className="font-semibold">Working Time</h1>
          </div>
          <p className="text-xs ml-4">
            Monday-Friday: 9:00 - 22:00 <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 space-y-3">
          <h1>Your Name</h1>
          <input
            type="text"
            placeholder="ABC"
            className="h-7 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-xs outline outline-1 rounded"
          />

          <h1>Email address</h1>
          <input
            type="text"
            placeholder="Abc@def.com"
            className="h-7 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-xs outline outline-1 rounded"
          />

          <h1>Subject</h1>
          <input
            type="text"
            placeholder="This is optional"
            className="h-7 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-xs outline outline-1 rounded"
          />

          <h1>Message</h1>
          <input
            type="text"
            placeholder="Hi! I’d like to ask about"
            className="h-12 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-xs outline outline-1 rounded"
          /> <br />
       

          <button className="px-7 outline outline-1 rounded mb-3 text-xs">
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}

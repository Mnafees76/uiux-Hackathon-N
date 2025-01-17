import Image from "next/image";

export default function OurInstagram() {
  return (
    <main className="relative flex justify-center items-center w-full h-[500px] max-w-screen-2xl mx-auto ">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/imags/bg.jpeg')",
          opacity: 0.3,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          Our Instagram
        </h1>
        <p className="text-sm md:text-base mt-2">
          Follow our store on Instagram
        </p>
        <button className="mt-4 text-sm md:text-base bg-[#FAF4F4] px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
          Follow Us
        </button>
      </div>
    </main>
  );
}

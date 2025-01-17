import Image from "next/image"

export default function About_us() {
  return (
    <main className=" max-w-screen-2xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mt-5">About Us</h1>
        <p className="mt-2">Get to know us, our mission, and the principles that guide and inspire us.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full mt-10">
        <div className="w-full md:w-[30%]">
          <Image
            src="/imags/p10.jpeg"
            width={300}
            height={300}
            alt="Outdoor Bar Table"
            className="rounded-md object-cover mx-auto w-full md:w-[500px] md:h-[300px]"
          />
        </div>
        <div className="w-full md:w-[50%] md:ml-20 mt-6 md:mt-0 px-2 sm:px-0">
          <h1 className="text-xl font-bold">Our Story</h1>
          <p className="md:w-96">
            We are a committed team focused on providing outstanding services
            and products to our customers. Our goal is to add value and
            positively impact people's lives by offering creative solutions that
            motivate and empower. With extensive experience, we have earned a
            reputation for quality and reliability. We are dedicated to building
            lasting relationships with our customers, partners, and the
            community.
          </p>
        </div>
      </div>
    </main>
  )
}

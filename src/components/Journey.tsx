import Link from "next/link";

export default function Journey() {
  return (
    <main className="flex justify-center items-center w-full px-4  max-w-screen-2xl mx-auto">
      <div className="w-full sm:w-[90%] md:w-[80%] bg-[#9F9F9F] mt-5 p-6 rounded-lg">
        <h1 className="text-center font-extrabold text-2xl sm:text-3xl mt-3">Join Our Journey</h1>
        <p className="text-center mt-2 text-sm sm:text-base">
          Be a part of our mission to make a difference. Let’s grow together and create something extraordinary.
        </p>
        <div className="flex justify-center items-center mt-4">
          <Link href="/contact">
            <button className="font-semibold outline outline-2 outline-offset-2 px-4 py-2 rounded hover:bg-slate-300 hover:outline-gray-400">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

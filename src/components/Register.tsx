import { CheckboxDemo } from "./chekbox";

export default function Register() {
  return (
    <main className="flex flex-col sm:flex-row justify-evenly w-full px-5 sm:px-10 md:px-16 lg:px-20 pt-14 h-auto sm:h-[500px]  max-w-screen-2xl mx-auto">
      {/* Left side */}
      <div className="w-full sm:w-1/2">
        <h1 className="text-2xl font-bold">Log In</h1>
        <p className="text-xs mt-8">Username or email address</p>
        <input
          type="text"
          className="h-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-xs outline outline-1 rounded mt-2"
        />
        <p className="pt-7 text-xs">Password</p>
        <input
          type="text"
          className="h-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-xs outline outline-1 rounded mt-2"
        />
        <div className="mt-8">
          <CheckboxDemo />
        </div>
        <div className="mt-10">
          <button className="px-5 outline outline-1 outline-offset-1 py-1 rounded hover:bg-blue-200 hover:text-white">
            Log In
          </button>
          <span className="text-xs ml-3">Lost Your Password?</span>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full sm:w-1/2 mt-10 sm:mt-0">
        <h1 className="text-2xl font-bold">Register</h1>
        <p className="text-xs mt-7">Email address</p>
        <input
          type="text"
          className="h-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-xs outline outline-1 rounded mt-2"
        />
        <p className="text-xs mt-7 w-80">
          A link to set a new password will be sent to your email address.
        </p>
        <p className="text-xs mt-5 w-[330px]">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
          <span className="font-semibold">privacy policy.</span>
        </p>
        <button className="px-5 outline outline-1 outline-offset-1 py-1 rounded hover:bg-blue-200 hover:text-white mb-3 sm:mb-0 mt-5  sm:mt-10">
          Register
        </button>
      </div>
    </main>
  );
}

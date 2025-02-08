"use client";
import { useState } from "react";

export default function CheckoutForm() {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Pakistan",
    address: "",
    city: "",
    province: "",
    zip: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main className="w-full h-full flex flex-col lg:flex-row justify-center lg:space-x-5 mt-10 px-4 lg:px-0  max-w-screen-2xl mx-auto">
      {/* Left Side */}
      <div className="w-full lg:w-[40%] h-full p-4">
        <h1 className="text-2xl">Billing Details</h1>
        <div className="flex flex-col lg:flex-row lg:space-x-5 mt-5">
          <div className="w-full lg:w-auto">
            <label htmlFor="firstName" className="text-xs">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="outline outline-1 w-full lg:w-40 rounded p-1"
            />
          </div>
          <div className="w-full lg:w-auto mt-3 lg:mt-0">
            <label htmlFor="lastName" className="text-xs">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="outline outline-1 w-full lg:w-40 rounded p-1"
            />
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="companyName" className="block text-xs">Company Name (Optional)</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="outline outline-1 w-full lg:w-52 rounded p-1"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="country" className="block text-xs">Country / Region</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="outline outline-1 w-full lg:w-52 rounded p-1"
          >
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="Sri Lanka">Sri Lanka</option>
          </select>
        </div>
        <div className="mt-5">
          <label htmlFor="address" className="block text-xs">Street Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="outline outline-1 w-full lg:w-52 rounded p-1"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="city" className="block text-xs">Town / City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="outline outline-1 w-full lg:w-52 rounded p-1"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="province" className="block text-xs">Province</label>
          <select
            id="province"
            name="province"
            value={formData.province}
            onChange={handleChange}
            className="outline outline-1 w-full lg:w-52 rounded p-1"
          >
            <option value="Western Province">Western Province</option>
            <option value="Central Province">Central Province</option>
            <option value="Southern Province">Southern Province</option>
          </select>
        </div>
        <div className="mt-5">
          <label htmlFor="zip" className="block text-xs">ZIP Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="outline outline-1 w-full lg:w-52 rounded p-1"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="phone" className="block text-xs">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="outline outline-1 w-full lg:w-52 rounded p-1"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="block text-xs">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="outline outline-1 w-full lg:w-52 rounded p-1"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="additionalInfo" className="block text-xs"></label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            placeholder="Additional Information"
            onChange={handleChange}
            className="outline outline-1 w-full lg:w-52 rounded p-1"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-[40%] p-4">
        <div className="space-y-5">
          <h1>Product</h1>
          <div className="text-xs text-[#9F9F9F] space-y-2">
            <div className="flex space-x-2">
              <span>Asgaard Sofa</span>
              <span className="text-black">x 1</span>
            </div>
            <div className="flex justify-between">
              <h2 className="text-black">Subtotal</h2>
              <span className="text-black">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between">
              <h2 className="text-[#B88E2F] font-semibold">Total</h2>
              <span className="text-[#B88E2F] font-semibold">Rs. 250,000.00</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <input
            type="radio"
            id="bankTransfer1"
            name="paymentMethod"
            value="bankTransfer1"
            className="appearance-none w-3 h-3 border border-gray-400 rounded-full checked:bg-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          <label
            htmlFor="bankTransfer1"
            className="ml-2 cursor-pointer"
          >
            Direct Bank Transfer
          </label>
        </div>
        <p className="text-xs text-[#9F9F9F] mt-2">
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        <div className="mt-5">
          <input
            type="radio"
            id="bankTransfer1"
            name="paymentMethod"
            value="bankTransfer1"
            className="appearance-none w-3 h-3 border border-gray-400 rounded-full checked:bg-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          <label
            htmlFor="bankTransfer1"
            className="ml-2 cursor-pointer"
          >
            Direct Bank Transfer
          </label>
        </div>
        <div className="mt-5">
          <input
            type="radio"
            id="bankTransfer1"
            name="paymentMethod"
            value="bankTransfer1"
            className="appearance-none w-3 h-3 border border-gray-400 rounded-full checked:bg-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          <label
            htmlFor="bankTransfer1"
            className="ml-2 cursor-pointer"
          >
            Direct Bank Transfer
          </label>
        </div>
          
        <p className="text-xs mt-8">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="text-sm font-bold">privacy policy.</span>
        </p>
        <div className="flex justify-center items-center">
          <button className="mt-10 outline outline-1 outline-offset-1 rounded py-1 px-8">Place order</button>
        </div>
      </div>
    </main>
  );
}

"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../components/styles.css";
import { FooterComponent } from "../components/Footer";
import Card from "../components/Card";
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';

export default function StepOne() {
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#2c3e50]">
      <div className="bg-[#425262]   p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-[#ffdead]">Trader Eligibility Form</h1>
        <form  className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
            Full Name :
            </label>
            <input
              type="email"
              id="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              // required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
            Email Address:
            </label>
            <input
              type="password"
              id="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              // required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">
            Trading experience (in years):
            </label>
            <input
              type="number"
              id="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              // required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Link href="/account-size">
          <button
            type="submit"
            // disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-xl font-medium text-black no-underline bg-[#ffdead] hover:bg-[#ffe302]"
          >
            Next Step
          </button>
          </Link>
        </form>
        {/* {error && (
          <div className="mt-4 text-center text-red-600" role="alert">
            {error}
          </div>
        )} */}
      </div>
    </div>
      <FooterComponent />
    </div>
  );
}

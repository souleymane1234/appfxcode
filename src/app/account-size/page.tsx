"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../components/styles.css";
import { FooterComponent } from "../components/Footer";
import Card from "../components/Card";
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';

export default function AccountSize() {
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);
  return (
    <div className="bg-[#2c3e50]">
      <Navbar />
      <div className="account-size-container">
  <h2>Choose Account Size</h2>
  {/* Card container */}
  <div className="size-card-container">
    {/* Card 1: $5000 */}
    <div
      className="account-size-card"
      data-value={5000}
    //   onclick="selectAccount(this)"
    >
      <h3>Compte $5,000</h3>
      <p>Price: $20</p>
    </div>
    {/* Card 2: $10000 */}
    <div
      className="account-size-card"
      data-value={10000}
    //   onclick="selectAccount(this)"
    >
      <h3>Compte $10,000</h3>
      <p>Price: $48</p>
    </div>
    {/* Card 3: $25000 */}
    <div
      className="account-size-card"
      data-value={25000}
    //   onclick="selectAccount(this)"
    >
      <h3>Compte $25,000</h3>
      <p>Price: $100</p>
    </div>
  </div>
  {/* Buttons */}
  <div className="button-container">
    <button className="back-btn" id="back-btn">
      Back
    </button>
    <Link href="/payement">
    <button className="account-size-btn" id="final-step-btn">
      Final Step
    </button>
    </Link>
  </div>
</div>

      <FooterComponent />
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../components/styles.css";
import { FooterComponent } from "../components/Footer";
import Card from "../components/Card";
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';

export default function Payement() {
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);
  return (
    <div className="bg-[#2c3e50]">
      <Navbar />
      <div className="paymentcontainer">
  <h2>Choose Your Payment Method</h2>
  <div className="payment-container">
    {/* Credit Card */}
    <div
      className="payment-box"
      data-payment="credit_card"
      // onclick="selectPayment(this)"
    >
      <h3>Credit Card</h3>
      <p>Secure payment with your bank card.</p>
    </div>
    {/* Mobile Money */}
    <div
      className="payment-box popular-box"
      data-payment="mobile_money"
      // onclick="selectPayment(this)"
    >
      <div style={{display: "flex", flexDirection: "row"}}>
        <h3>Mobile Money</h3>
      </div>
      
      <span className="badge popular">Popular</span>
      <p>Fast payment with Orange, MTN and Wave.</p>
    </div>
    {/* Crypto (BTC, USDT, USDC) */}
    <div
      className="payment-box popular-box"
      data-payment="crypto"
      // onclick="selectPayment(this)"
    >
      <h3>Cryptomonnaie</h3>
      <p>Payment with BTC, USDT, USDC and XRP.</p>
      <span className="badge popular">Popular</span>
    </div>
    {/* Astropay */}
    <div
      className="payment-box popular-box"
      data-payment="astropay"
      // onclick="selectPayment(this)"
    >
      <h3>Astropay</h3>
      <span className="badge popular">Popular</span>
      <p>Fast payment with Astropay.</p>
    </div>
    {/* Paypal */}
    <div
      className="payment-box"
      data-payment="paypal"
      // onclick="selectPayment(this)"
    >
      <h3>Paypal</h3>
      <p>Secure payment via Paypal.</p>
    </div>
    {/* Perfect Money */}
    <div
      className="payment-box"
      data-payment="perfect_money"
      // onclick="selectPayment(this)"
    >
      <h3>Perfect Money</h3>
      <p>Fast payment by Perfect Money.</p>
    </div>
  </div>
  <div className="button-container">
    <button className="back-btn" id="back-btn">
      Back
    </button>
    <button className="payment-btn" id="proceed-btn">
      Proceed
    </button>
  </div>
</div>


      <FooterComponent />
    </div>
  );
}

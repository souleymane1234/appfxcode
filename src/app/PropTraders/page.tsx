"use client";
import React from "react";
import Navbar from "../components/Navbar";
import "../components/styles.css";
import { FooterComponent } from "../components/Footer";
import CarousellRfip from "../components/CarousellRfip";
import FormationCours from "../components/FormationCours";
import FormationPrevue from "../components/FormationsPrevue";
import Link from "next/link";

export default function PropTraders() {
  return (
    <div>
      <Navbar />
      <div className="webapp_container">
  <div className="container-wrapper">
    <div className="sidebar-left" />
    <div className="webapp_content">
      <section className="section-hero">
        <div className="hero-container">
          <h1 className="title">
            Modular DeFi in <span>the Trading Metaverse</span>
          </h1>
          <p className="description">
            The ecosystem made by traders for traders that rewards you for
            network growth via new economic mechanisms. Built and supported by
            the best.
          </p>
          <div className="buttons">
            <button className="font-serif ml-4 px-6 py-2 bg-[#c1ff00] font-bold text-black rounded-md hover:bg-[#fff] hover:text-red-500 transition duration-300">
              Join The Univer
            </button>
            <Link
            href="/Step-One"
          >
          <button
              className="font-serif ml-4 px-6 py-2 bg-[#c1ff00] font-bold text-black rounded-md hover:bg-[#fff] hover:text-red-500 transition duration-300"
              id="eligible-btn"
            >
              Prop Traders
            </button>
          </Link>
          </div>
          <div className="background-pattern" />
        </div>
      </section>
      <section className="section-stats">
        <div className="logo-grid">
          <div className="partner-logo">
            <a target="_blank">
              <img src="https://lionson.com/rs/emdserono.png" />
            </a>
          </div>
          <div className="partner-logo">
            <a target="_blank">
              <img src="https://lionson.com/rs/janssen.png" />
            </a>
          </div>
          <div className="partner-logo">
            <a target="_blank">
              <img src="https://lionson.com/rs/mellon.png" />
            </a>
          </div>
          <div className="partner-logo">
            <a target="_blank">
              <img src="https://lionson.com/rs/moore.png" />
            </a>
          </div>
        </div>
      </section>
    </div>
    <div className="sidebar-right" />
  </div>
</div>

      <FooterComponent />
    </div>
  );
}

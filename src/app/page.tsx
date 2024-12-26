"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Carousell from "./components/Carousell";
import CarousellProduct from "./components/carousellProduct";
import "./components/styles.css";
import { FooterComponent } from "./components/Footer";
import Product from "./components/Product";
import Partenaire from "./components/Partenaire";
import "bootstrap/dist/css/bootstrap.min.css";
import Homecard from "./components/HomeCard";
import Homecard2 from "./components/homeCard2";
import AboutMe from "./components/About";
import "swiper/css";
import "swiper/css/autoplay";

export default function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="bg-[#2c3e50]">
      <Navbar />
      {/* <Carousell /> */}
      <section style={{ marginTop: "-10%", zIndex: 1, position: "relative" }}>
        {/* <Homecard /> */}
      </section>
      <section className="mb-24">
        {/* <CarousellProduct /> */}
      </section>
      <section style={{ marginTop: 80 }}>
        {/* <Homecard2 /> */}
      </section>
      <section style={{ marginTop: 50, backgroundColor: "#e5e7eb" }}>
        {/* <AboutMe /> */}
      </section>
      <section>
        {/* <h2 className="text-3xl font-bold text-center mb-16 mt-8 font-serif text-green-500">
          Les Produits du Mois
        </h2> */}
        {/* <Product /> */}
      </section>
      <section className="p-4 annuaire">
        {/* <h2 className="text-3xl font-bold text-center mb-16 mt-8 font-serif text-green-500">
          Nos partenaires
        </h2> */}
        {/* <Partenaire /> */}
      </section>
      <FooterComponent />
    </div>
  );
}

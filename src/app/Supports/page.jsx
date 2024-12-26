"use client";
import React from "react";
import Navbar from "../components/Navbar";
import "../components/styles.css";
import { DragCards } from "../components/AnimateFormationCard";
import { FooterComponent } from "../components/Footer";
import CarousellRfip from "../components/CarousellRfip";
import VideoFormation from "../components/VideoFormation";
import ValeurAjouter from "../components/ValeurAjouter";

export default function Supports() {
  return (
    <div>
      <Navbar />
      <div className="webapp_container">
  <div className="container-wrapper">
    <aside className="sidebar-left"></aside>
    <article className="webapp_content">
      <section className="sectionfirst">
        <div className="other-top-part">
          <div className="top-part" align="center">
            <h2 className="welcome-text">
              Welcome to the support desk. Found here FAQs.
            </h2>
            <div className="ticket-holder">
              <div className="ticket-subject">
                <a href="">Management Account Payment Issues</a>
              </div>
              <div className="ticket-subject">
                <a href="">How to become a verified supplier?</a>
              </div>
              <div className="ticket-subject">
                <a href="">I can't take part in competitions</a>
              </div>
              <div className="ticket-subject">
                <a href="">I can't take my rewards</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-ticket">
          <div className="ticket-contact"></div>
        </div>
      </section>
    </article>
    <aside className="sidebar-right"></aside>
  </div>
</div>

      <FooterComponent />
    </div>
  );
}

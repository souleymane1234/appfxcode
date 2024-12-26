"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTwitter, FaTelegram, FaYoutube   } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import "./styles.css";

export function FooterComponent() {
  return (
    <Footer container className="bg-[#2c3e50]">
<div className="footerContainer">
  <div className="socialIcons">
    <a href="https://x.com/fxcodesnetwork" target="_blank">
      {/* <i className="fa-brands fa-twitter" /> */}
      <FaTwitter style={{color: "#2c3e50", width: 40, height: 40}}/>
    </a>
    <a href="https://t.me/fxcodesofficial" target="_blank">
      {/* <i className="fa-brands fa-telegram" /> */}
      <FaTelegram style={{color: "#2c3e50", width: 40, height: 40}} />
    </a>
    <a href="https://discord.com/fxcodesnetwork" target="_blank">
      {/* <i className="fa-brands fa-discord" /> */}
      <FaDiscord  style={{color: "#2c3e50", width: 40, height: 40}} />
    </a>
    <a href="https://youtube.com/fxcodesnetwork" target="_blank">
      {/* <i className="fa-brands fa-youtube" /> */}
      <FaYoutube style={{color: "#2c3e50", width: 40, height: 40}} />
    </a>
  </div>
  <div className="footerNav">
    <ul>
      <li>
        <a href="products.html">Products</a>
      </li>
      <li>
        <a href="ecosystem.html">Ecosystem</a>
      </li>
      <li>
        <a href="ressources.html">Resources</a>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
      <li>
        <a href="supports.html">Supports</a>
      </li>
    </ul>
  </div>
  <div className="footerBottom">
    <p>
      Copyright ©2024 <span className="designer">FxCodes</span>. All Rights
      Reserved.
    </p>
  </div>
</div>

    </Footer>
  );
}

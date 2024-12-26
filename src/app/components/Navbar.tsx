"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const Navbar = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="sticky top-0 left-0 bg-[#2c3e50] p-0 text-white "
      style={{ position: "relative" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="p-4" style={{fontSize: 30, cursor: "pointer", fontWeight: "bold"}}>FXCODES</div>
        {/* <img className="w-56 h-20 object-cover" src="./images/logo.png" /> */}

        {/* Hamburger icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-[#2d9838]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 items-center">
          <Link
            href="/"
            className={currentPath === "/" ? "active" : "no-active"}
          >
            Discover
          </Link>
          <Link
            href="/PropTraders"
            className={currentPath === "/PropTraders" ? "active" : "no-active"}
          >
            PropTraders
          </Link>
          <Link
            href="/Supports"
            className={currentPath === "/Supports" ? "active" : "no-active"}
          >
            Supports
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4 items-center">
        <Link href="/login">
            <button className="font-serif ml-4 px-6 py-2 bg-white text-black rounded-md hover:bg-green-500 hover:text-white transition duration-300">
              Connect
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 space-y-2 px-4">
          <Link
            href="/"
            onClick={toggleMenu}
            className={currentPath === "/" ? "active" : "no-active"}
          >
            Discover
          </Link>
          <Link
            href="/PropTraders"
            onClick={toggleMenu}
            className={currentPath === "/PropTraders" ? "active" : "no-active"}
          >
            PropTraders
          </Link>
          <Link
            href="/Supports"
            onClick={toggleMenu}
            className={currentPath === "/Supports" ? "active" : "no-active"}
          >
            Supports
          </Link>
          <Link href="/login" onClick={toggleMenu} className="block">
            <button className="font-serif w-full px-4 py-2 mt-2 bg-white text-[#2d9838] rounded-md hover:bg-green-600 hover:text-white transition duration-300">
              Connect
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

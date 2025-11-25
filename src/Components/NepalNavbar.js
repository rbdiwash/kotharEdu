import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/images/new_logo.png";

const NepalNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setNavbarOpen(false);
  };

  return (
    <nav
      className={`px-2 py-4 bg-white border-gray-200 z-[100] sticky top-0 left-0 right-0 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img
            loading="lazy"
            src={logo}
            className="mr-3 h-14 sm:h-15"
            alt="Kothar Education Logo"
          />
        </Link>

        <GiHamburgerMenu
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="cursor-pointer text-2xl inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <div
          className={`w-full md:block md:w-auto ${navbarOpen ? "" : " hidden"}`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col p-4 pr-0 mt-4 shadow-lg md:shadow-none md:flex-row md:space-x-8 md:mt-0 md:text-sm font-semibold md:font-medium md:bg-white text-md items-center">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="block py-2 pr-4 pl-3 font-semibold rounded hover:text-blue md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="block py-2 pr-4 pl-3 font-semibold rounded hover:text-blue md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("team")}
                className="block py-2 pr-4 pl-3 font-semibold rounded hover:text-blue md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Team
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="block py-2 pr-4 pl-3 font-semibold rounded hover:text-blue md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Contact
              </button>
            </li>
            <li className="mt-4 md:mt-0">
              <button
                onClick={() => scrollToSection("book")}
                className="btn font-bold"
              >
                Book Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NepalNavbar;

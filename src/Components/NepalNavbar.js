import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/new_logo.png";
import { FiChevronDown } from "react-icons/fi";

const NepalNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
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
  const [isOffices, setIsOffices] = useState(false);

  const handleClose = () => {
    setIsOffices(false);
    setNavbarOpen(false);
  };
  let activeClassName = { color: "#00A1CF" };

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
            </li>{" "}
            <li className="relative mt-4 md:mt-0">
              <button
                type="button"
                className="px-2 py-0.25 font-semibold  md:hover:text-blue-700 flex items-center gap-1 rounded-md border border-black"
                onClick={() => {
                  setIsOffices(!isOffices);
                }}
                style={
                  location?.pathname?.includes("/nepal")
                    ? activeClassName
                    : undefined
                }
              >
                <span className="text-2xl">🇳🇵</span> Nepal
                <FiChevronDown
                  className={`transform transition-transform duration-200 ${
                    isOffices ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOffices && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="flex flex-col" role="none">
                    <NavLink
                      to="/nepal"
                      className="text-[#102930] block px-4 py-2.5 text-sm hover:bg-primary2 hover:text-white capitalize"
                      role="menuitem"
                      onClick={() => handleClose()}
                    >
                      🇳🇵 Nepal
                    </NavLink>
                    <NavLink
                      to="/"
                      className="text-[#102930] block px-4 py-2.5 text-sm hover:bg-primary2 hover:text-white capitalize"
                      role="menuitem"
                      onClick={() => handleClose()}
                    >
                      🇦🇺 Australia
                    </NavLink>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NepalNavbar;

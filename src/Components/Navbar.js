import React, { useEffect, useState } from "react";
import logo from "../assets/images/new_logo.png";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaSearch } from "react-icons/fa";
import { FiMail, FiChevronDown } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import useKothar from "../context/useKothar";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillTwitterCircle } from "react-icons/ai";

const Navbar = () => {
  const [explore, setExplore] = useState(false);
  const [states, setStates] = useState(false);
  const [isService, setIsService] = useState(false);
  const [{ destinations, services }, {}] = useKothar();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showTaxHeader, setShowTaxHeader] = useState(false);

  const checkTaxBannerStatus = () => {
    // Check if tax banner was closed and show header
    const taxBannerClosed = localStorage.getItem("taxBannerClosed");
    console.log("Navbar: taxBannerClosed", taxBannerClosed);
    if (taxBannerClosed) {
      setShowTaxHeader(true);
    } else {
      setShowTaxHeader(false);
    }
  };

  useEffect(() => {
    // Check initial status
    checkTaxBannerStatus();

    // Listen for storage changes
    const handleStorageChange = (e) => {
      if (e.key === "taxBannerClosed") {
        console.log("Navbar: Storage changed, checking tax banner status");
        checkTaxBannerStatus();
      }
    };

    // Listen for custom event when banner is closed
    const handleBannerClosed = () => {
      console.log("Navbar: Banner closed event received");
      checkTaxBannerStatus();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("taxBannerClosed", handleBannerClosed);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("taxBannerClosed", handleBannerClosed);
    };
  }, []);

  const handleClose = () => {
    setExplore(false);
    setStates(false);
    setIsService(false);
    setNavbarOpen(false);
  };

  const handleCloseNavbar = () => {
    setNavbarOpen(false);
    setExplore(false);
    setStates(false);
    setIsService(false);
  };

  const handleTaxHeaderClick = () => {
    window.open("https://kothar.oneon.au/", "_blank");
  };

  let activeClassName = { color: "#00A1CF" };

  const location = useLocation();

  return (
    <React.Fragment>
      {/* Tax Services Header - only show when banner is closed */}
      {showTaxHeader && (
        <nav className="px-2 bg-gradient-to-r from-primary to-primary2 py-2 z-[200]">
          <div className="container flex flex-wrap justify-between items-center mx-auto text-white">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-second text-3xl font-bold">💰</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">
                  Tax Services Available
                </h3>
                <p className="text-white text-xl opacity-90">
                  Click to explore our tax services
                </p>
              </div>
            </div>
            <button
              onClick={handleTaxHeaderClick}
              className="bg-white text-primary font-semibold px-3 py-1 rounded-lg hover:bg-gray-100 transition-all duration-200 text-xs"
            >
              Learn More
            </button>
          </div>
        </nav>
      )}

      {/* <nav className="px-2 bg-primary py-1">
        <div className="container flex flex-wrap justify-between items-center mx-auto text-white">
          <div className="flex">
            <a href="tel:0480322403">
              <span className="flex items-center gap-4 mr-6">
                <FaPhoneAlt />
                0480322403
              </span>
            </a>
            <a href="tel:0478733944">
              <span className="flex items-center gap-4 mr-2">
                <FaPhoneAlt />
                0405372084
              </span>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/kothareducation">
              <FaFacebook className="text-xl text-white" />
            </a>
            <a href="mailto:info@kotharedu.com">
              <FiMail className="text-xl text-white" />
            </a>
            <FaInstagram className="text-xl text-white" />
          </div>
        </div>
      </nav> */}
      <nav className="px-2 py-4 bg-white border-gray-200 z-[100] sticky top-0 left-0 right-0">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-14 sm:h-15" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </NavLink>

          <GiHamburgerMenu
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="cursor-pointer text-2xl inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 "
          />

          <div
            className={
              "w-full md:block md:w-auto" + (navbarOpen ? "" : " hidden")
            }
            id="navbar-multi-level"
          >
            <ul className="flex flex-col p-4 pr-0 mt-4  shadow-lg md:shadow-none  md:flex-row md:space-x-8 md:mt-0 md:text-sm font-semibold md:font-medium  md:bg-white text-md font-bold">
              <li className="relative">
                <button
                  type="button"
                  className="block py-2 pr-4 pl-3 font-semibold rounded hover:text-blue md:border-0 md:hover:text-blue-700 md:p-0 flex items-center gap-1"
                  onClick={() => {
                    setExplore(!explore);
                    setStates(false);
                    setIsService(false);
                  }}
                  style={
                    location?.pathname?.includes("/explore")
                      ? activeClassName
                      : undefined
                  }
                >
                  Explore
                  <FiChevronDown
                    className={`transform transition-transform duration-200 ${
                      explore ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {explore && (
                  <div
                    className="absolute left-0 z-10 mt-2 w-56 origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="flex flex-col" role="none">
                      <NavLink
                        to="/explore/events"
                        className=" block px-4 py-2 text-sm hover:bg-primary2 hover:text-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                        onClick={() => handleClose()}
                      >
                        Events
                      </NavLink>
                      <NavLink
                        to="/explore/news"
                        className=" block px-4 py-2 text-sm hover:bg-primary2 hover:text-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                        onClick={() => handleClose()}
                      >
                        News and Updates
                      </NavLink>{" "}
                      <NavLink
                        to="/explore/checklists"
                        className=" block px-4 py-2 text-sm hover:bg-primary2 hover:text-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                        onClick={() => handleClose()}
                      >
                        Checklists
                      </NavLink>
                      <NavLink
                        to="/explore/client-details-form"
                        className=" block px-4 py-2 text-sm hover:bg-primary2 hover:text-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                        onClick={() => handleClose()}
                      >
                        Client Details Form
                      </NavLink>
                    </div>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  type="button"
                  className="block py-2 pr-4 pl-3 font-semibold rounded hover:text-blue md:border-0 md:hover:text-blue-700 md:p-0 flex items-center gap-1"
                  onClick={() => {
                    setStates(!states);
                    setExplore(false);
                    setIsService(false);
                  }}
                  style={
                    location?.pathname?.includes("/states")
                      ? activeClassName
                      : undefined
                  }
                >
                  Destinations
                  <FiChevronDown
                    className={`transform transition-transform duration-200 ${
                      states ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {states && (
                  <div
                    className="absolute left-0 z-10 mt-2 w-56 origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="flex flex-col" role="none">
                      {destinations?.map((arg, i) => (
                        <NavLink
                          to={`/states/${arg?.destination}`}
                          className="text-[#102930] block px-4 py-2.5 text-sm hover:bg-primary2 hover:text-white capitalize"
                          role="menuitem"
                          onClick={() => handleClose()}
                          key={i}
                          state={{ data: arg }}
                        >
                          {arg?.destination}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  type="button"
                  className="block py-2 pr-4 pl-3 font-semibold rounded hover:text-blue md:border-0 md:hover:text-blue-700 md:p-0 flex items-center gap-1"
                  onClick={() => {
                    setIsService(!isService);
                    setExplore(false);
                    setStates(false);
                  }}
                  style={
                    location?.pathname?.includes("/services")
                      ? activeClassName
                      : undefined
                  }
                >
                  Our Services
                  <FiChevronDown
                    className={`transform transition-transform duration-200 ${
                      isService ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isService && (
                  <div
                    className="absolute left-0 z-10 mt-2 w-56 origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="flex flex-col" role="none">
                      <NavLink
                        to={`/tax-service`}
                        className="text-[#102930] px-4 py-2.5 text-sm hover:bg-primary2 hover:text-white capitalize flex items-center gap-2 justify-between group"
                        role="menuitem"
                        onClick={() => handleClose()}
                      >
                        Tax Services
                        <span className="bg-primary rounded-full px-2 py-1 text-xs text-white group-hover:text-white">
                          ⚡ New
                        </span>
                      </NavLink>{" "}
                      <NavLink
                        to={`/starter-kit`}
                        className="text-[#102930] px-4 py-2.5 text-sm hover:bg-primary2 hover:text-white capitalize flex items-center gap-2 justify-between group"
                        role="menuitem"
                        onClick={() => handleClose()}
                      >
                        Starter Kit
                        <span className="bg-primary rounded-full px-2 py-1 text-xs text-white group-hover:text-white">
                          ⚡ New
                        </span>
                      </NavLink>
                      {services?.services?.map((arg, i) => (
                        <NavLink
                          to={`/services/${arg?.id}`}
                          className="text-[#102930] block px-4 py-2.5 text-sm hover:bg-primary2 hover:text-white capitalize"
                          role="menuitem"
                          onClick={() => handleClose()}
                          key={i}
                          state={{ data: arg }}
                        >
                          {arg?.serviceName}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li>
                <NavLink
                  to="/explore/checklists"
                  className="block py-2 pr-4 pl-3 font-semibold
                  rounded  md:p-0 "
                  onClick={handleCloseNavbar}
                  style={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Checklists
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/important-links"
                  className="block py-2 pr-4 pl-3 font-semibold  rounded
                  hover:text-blue  md:border-0
                  md:hover:text-blue-700 md:p-0"
                  onClick={handleCloseNavbar}
                  style={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Links
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 pr-4 pl-3 font-semibold  rounded
                  hover:text-blue  md:border-0
                  md:hover:text-blue-700 md:p-0"
                  onClick={handleCloseNavbar}
                  style={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 pr-4 pl-3 font-semibold  rounded hover:text-blue  md:border-0 md:hover:text-blue-700 md:p-0"
                  onClick={handleCloseNavbar}
                  style={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="mt-4 md:mt-0">
                <NavLink
                  to="/book"
                  onClick={handleCloseNavbar}
                  className={({ isActive }) =>
                    isActive ? "btn-alt text-white" : "btn"
                  }
                >
                  Book Now
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

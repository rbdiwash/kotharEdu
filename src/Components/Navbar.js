import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import useKothar from "../context/useKothar";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [explore, setExplore] = useState(false);
  const [states, setStates] = useState(false);
  const [isService, setIsService] = useState(false);
  const [{ destinations, services }, {}] = useKothar();
  const [navbarOpen, setNavbarOpen] = useState(false);

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

  let activeClassName = { color: "#00A1CF" };

  const location = useLocation();

  return (
    <React.Fragment>
      <nav className="px-2 bg-primary py-1">
        <div className="container flex flex-wrap justify-between items-center mx-auto text-white">
          <div className="flex">
            <a href="tel:9840000000">
              <span className="flex items-center gap-4 mr-6">
                <FaPhoneAlt />
                9840000000
              </span>
            </a>
            <a href="mailto:kothareducation@gmail.com">
              <span className="flex items-center gap-4 mr-4">
                <FiMail />
                <p>kothareducation@gmail.com</p>
              </span>
            </a>
          </div>
          <div>
            <FaSearch />
          </div>
        </div>
      </nav>
      <nav className="px-2 py-4 bg-white border-gray-200 z-[100] sticky top-0 left-0 right-0">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-10 sm:h-15" alt="Flowbite Logo" />
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
            <ul className="flex flex-col p-4 pr-0 mt-4  shadow-lg md:shadow-none rounded-lg border border-altBlack md:flex-row md:space-x-8 md:mt-0 md:text-sm font-semibold md:font-medium md:border-0 md:bg-white text-lg">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 text-lg
                  rounded  md:p-0 "
                  onClick={handleCloseNavbar}
                  style={
                    location?.pathname === "/" ? activeClassName : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="relative">
                <button
                  type="button"
                  className="block py-2 pr-4 pl-3  rounded
                  hover:text-blue  md:border-0
                  md:hover:text-blue-700 md:p-0 text-lg"
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
                        className=" block px-4 py-2 text-sm hover:bg-primary2 text-lg"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                        onClick={() => handleClose()}
                      >
                        Events
                      </NavLink>
                      <NavLink
                        to="/explore/news"
                        className=" block px-4 py-2 text-sm hover:bg-primary2 text-lg"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                        onClick={() => handleClose()}
                      >
                        News and Updates
                      </NavLink>
                    </div>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  type="button"
                  className="block py-2 pr-4 pl-3  rounded
                  hover:text-blue  md:border-0
                  md:hover:text-blue-700 md:p-0 text-lg"
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
                  States
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
                          className="text-[#102930] block px-4 py-2.5 text-sm hover:bg-primary2  capitalize text-lg"
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
                  className="block py-2 pr-4 pl-3  rounded
                  hover:text-blue  md:border-0
                  md:hover:text-blue-700 md:p-0 text-lg"
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
                      {services?.services?.map((arg, i) => (
                        <NavLink
                          to={`/services/${arg?.id}`}
                          className="text-[#102930] block px-4 py-2.5 text-sm hover:bg-primary2 capitalize text-lg"
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
                  to="/about"
                  className="block py-2 pr-4 pl-3  rounded
                  hover:text-blue  md:border-0
                  md:hover:text-blue-700 md:p-0 text-lg"
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
                  className="text-lg block py-2 pr-4 pl-3  rounded hover:text-blue  md:border-0 md:hover:text-blue-700 md:p-0"
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
                    isActive ? "btn-alt text-lg text-white" : "btn text-lg"
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

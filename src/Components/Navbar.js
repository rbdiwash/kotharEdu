import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import axios from "../Utils/axios";
import useKothar from "../context/useKothar";

const Navbar = () => {
  const [explore, setExplore] = useState(false);
  const [states, setStates] = useState(false);
  const [isService, setIsService] = useState(false);
  const [{ destinations, services }, {}] = useKothar();

  const handleClose = () => {
    setExplore(false);
    setStates(false);
    setIsService(false);
  };

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
            <img src={logo} className="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </NavLink>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300   "
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col p-4 pr-0 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md: ">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 text-white
                  bg-blue-700 rounded md:bg-transparent md:text-blue md:p-0 "
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="relative">
                <button
                  type="button"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded
                  hover:bg-gray-100 md:hover:bg-transparent md:border-0
                  md:hover:text-blue-700 md:p-0 md: "
                  onClick={() => {
                    setExplore(!explore);
                    setStates(false);
                    setIsService(false);
                  }}
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
                        to="/events"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-primary2"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                        onClick={() => handleClose()}
                      >
                        Events
                      </NavLink>
                      <NavLink
                        to="/news"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-primary2"
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
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded
                  hover:bg-gray-100 md:hover:bg-transparent md:border-0
                  md:hover:text-blue-700 md:p-0 md: "
                  onClick={() => {
                    setStates(!states);
                    setExplore(false);
                    setIsService(false);
                  }}
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
                          className="text-[#102930] block px-4 py-2.5 text-sm hover:bg-primary2  capitalize"
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
                <NavLink
                  to="/services"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded
                  hover:bg-gray-100 md:hover:bg-transparent md:border-0
                  md:hover:text-blue-700 md:p-0"
                ></NavLink>
                <button
                  type="button"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded
                  hover:bg-gray-100 md:hover:bg-transparent md:border-0
                  md:hover:text-blue-700 md:p-0 md: "
                  onClick={() => {
                    setIsService(!isService);
                    setExplore(false);
                    setStates(false);
                  }}
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
                          className="text-[#102930] block px-4 py-2.5 text-sm hover:bg-primary2 capitalize"
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
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded
                  hover:bg-gray-100 md:hover:bg-transparent md:border-0
                  md:hover:text-blue-700 md:p-0"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/book" className="btn">
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

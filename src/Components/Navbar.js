import React from "react";
import logo from "../assets/images/logo.png";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="px-2 bg-primary py-1">
        <div className="container flex flex-wrap justify-between items-center mx-auto text-white">
          <div className="flex">
            <span className="flex items-center gap-4 mr-6">
              <FaPhoneAlt />
              9840000000
            </span>
            <span className="flex items-center gap-4 mr-4">
              <FiMail />
              <p>E-mail</p>
            </span>
          </div>
          <div>
            <FaSearch />
          </div>
        </div>
      </nav>
      <nav className="px-2 py-4 bg-white border-gray-200  ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
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
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col p-4 pr-0 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md: ">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                >
                  Explore
                  <svg
                    className="ml-1 w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 "
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                        Dashboard
                      </a>
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button
                        id="doubleDropdownButton"
                        data-dropdown-toggle="doubleDropdown"
                        data-dropdown-placement="right-start"
                        type="button"
                        className="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100"
                      >
                        Dropdown
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="doubleDropdown"
                        className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                        style={{
                          position: "absolute",
                          inset: "0px auto auto 0px",
                          margin: "0px",
                          transform: "translate(10px, 9000px)",
                        }}
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="right-start"
                      >
                        <ul
                          className="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="doubleDropdownButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 "
                            >
                              Overview
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 "
                            >
                              My downloads
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 "
                            >
                              Billing
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 "
                            >
                              Rewards
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:   "
                >
                  States
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  About Us
                </a>
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
                <a href="#" className="btn">
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

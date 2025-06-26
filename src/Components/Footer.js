import React from "react";
import logo from "../assets/images/new_logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaShieldAlt,
  FaBookOpen,
  FaGraduationCap,
  FaCalendarAlt,
  FaNewspaper,
  FaLink,
  FaRss,
  FaCheckCircle,
} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const options = [
  { label: "About Us", url: "about", id: "1", icon: FaBookOpen },
  { label: "Scholarships", url: "", id: "2", icon: FaGraduationCap },
  { label: "Universities", url: "", id: "3", icon: FaGlobe },
  { label: "Events", url: "explore/events", id: "4", icon: FaCalendarAlt },
  { label: "News & Updates", url: "explore/news", id: "5", icon: FaNewspaper },
  { label: "Important Links", url: "important-links", id: "6", icon: FaLink },
];

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-altBlack px-4">
        <div className="container pt-6 mx-auto">
          <div className="py-12">
            <div className="flex justify-start md:justify-center mb-12">
              <img
                src={logo}
                className="mr-3 h-16 md:h-28"
                alt="Flowbite Logo"
              />
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-1 items-start  gap-16">
              <div className="mb-6 md:col-span-2">
                <h1 className="uppercase text-2xl font-bold mb-2.5 border-b-2 border-primary pb-2 w-max flex items-center gap-3">
                  <FaMapMarkerAlt className="text-primary text-2xl" />
                  Head office
                </h1>

                <ul className="list-none mb-0 md:pr-16">
                  <li className="py-2 flex items-center gap-3 hover:text-primary transition-colors duration-300">
                    <FaMapMarkerAlt className="text-primary text-xl flex-shrink-0" />
                    <a
                      href="#!"
                      className="text-white text-xl hover:text-primary transition-colors duration-300"
                    >
                      Address: Suite272A/398 Pitt Street, Haymarket, Sydney
                    </a>
                  </li>
                  <li className="py-2 flex items-center gap-3 hover:text-primary transition-colors duration-300">
                    <FaEnvelope className="text-primary text-xl flex-shrink-0" />
                    <a
                      href="mailto:info@kotharedu.com"
                      className="text-white text-xl hover:text-primary transition-colors duration-300"
                    >
                      Email: info@kotharedu.com
                    </a>
                  </li>
                  <li className="py-2 flex items-center gap-3 hover:text-primary transition-colors duration-300">
                    <FaPhone className="text-primary text-xl flex-shrink-0" />
                    <a
                      href="tel:0480322403"
                      className="text-white text-xl hover:text-primary transition-colors duration-300"
                    >
                      Call us: 0480322403
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h1 className="uppercase text-2xl font-bold mb-2.5 border-b-2 border-primary pb-2 w-max flex items-center gap-3">
                  <FaLink className="text-primary text-2xl" />
                  Quick Links
                </h1>

                <ul className="list-none mb-0">
                  {options?.map((arg) => {
                    const IconComponent = arg.icon;
                    return (
                      <li
                        key={arg?.id}
                        className="py-2 border-b border-altWhite"
                      >
                        <Link
                          to={`/${arg.url}`}
                          className="text-white text-xl flex items-center gap-3 hover:text-primary transition-colors duration-300 group"
                        >
                          <IconComponent className="text-primary text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          {arg?.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mb-6 md:mb-0 md:col-span-2 h-full">
                <h1 className="uppercase text-2xl font-bold mb-2.5 border-b-2 border-primary pb-2 w-max flex items-center gap-3">
                  <FaRss className="text-primary text-2xl" />
                  For Newsletter
                </h1>
                <div className="flex flex-col justify-between py-2 h-full">
                  <div className="md:mb-6">
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                      <input
                        type="text"
                        className="
                  form-control
                  block
                  w-2/3
                  pl-12
                  pr-3
                  py-3
                  text-base
                  font-normal 
                  text-black
                  bg-altWhite bg-clip-padding
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                        id="exampleFormControlInput1"
                        placeholder="Enter you Email here"
                      />
                    </div>

                    <div className="md:mr-auto mt-6">
                      <button
                        type="submit"
                        className="btn-alt flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                      >
                        <FaCheckCircle className="text-lg" />
                        Book Now
                      </button>
                    </div>
                  </div>

                  <ul className="list-none md:mb-16 border-t-2 border-primary md:w-2/3">
                    <li className="py-2 flex items-center gap-3">
                      <FaShieldAlt className="text-primary text-xl flex-shrink-0" />
                      <a
                        href="#!"
                        className="text-white text-xl hover:text-primary transition-colors duration-300"
                      >
                        APPROVED FROM MINISTRY OF EDUCATION, NEPAL GOVERNMENT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="text-altWhite" />
          <div className="flex items-center justify-between py-6">
            <div className="text-center p-4 text-altWhite text-xl">
              © Copyright 2021. Kothar Educational Services. All Rights Reserved
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/kothareducation"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaFacebook className="text-3xl text-primary hover:text-white transition-colors duration-300" />
              </a>
              <FaInstagram className="text-3xl text-primary hover:text-white transition-colors duration-300 cursor-pointer hover:scale-110 transition-transform duration-300" />
              <a
                href="mailto:info@kotharedu.com"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FiMail className="text-3xl text-primary hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import logo from "../assets/images/new_logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaBookOpen,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import Nepal from "../assets/images/nepal.png";

const NepalFooter = () => {
  // Minimal links for Nepal footer
  const minimalLinks = [
    {
      label: "Checklists",
      url: "explore/checklists",
      id: "1",
      icon: FaCheckCircle,
    },
    {
      label: "Client Details Form",
      url: "explore/client-details-form",
      id: "2",
      icon: FaBookOpen,
    },
  ];

  return (
    <>
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Main Footer Content */}
          <div className="py-8">
            {/* Footer Grid */}
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Company Info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      loading="lazy"
                      src={logo}
                      className="h-24 filter drop-shadow-lg"
                      alt="Kothar Education Logo"
                    />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Empowering Nepali students to achieve their study abroad
                    dreams with expert guidance and personalized support from
                    our Nepal office.
                  </p>
                </div>
              </div>

              {/* Contact Info - Nepal Office */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <img src={Nepal} alt="Nepal" className="w-4 h-4" /> Nepal
                    Office
                  </h3>

                  {/* Nepal Office Details */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">
                        <img src={Nepal} alt="Nepal" className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-2">
                          Kothar Educational Services - Nepal
                        </h4>
                        <a
                          target="_blank"
                          href="https://maps.app.goo.gl/esawNKGi4zv8ven17"
                          className="text-gray-300 text-sm leading-relaxed"
                        >
                          MaijuBahal, Kathmandu
                          <br />
                          Kathmandu, Nepal
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <FaEnvelope className="text-primary text-sm" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Email</p>
                        <a
                          href="mailto:info@kotharedu.com"
                          className="text-white hover:text-primary transition-colors duration-300 text-sm"
                        >
                          info@kotharedunepal.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <FaPhone className="text-primary text-sm" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Phone</p>
                        <a
                          href="tel:+9779815596571"
                          className="text-white hover:text-primary transition-colors duration-300 text-sm"
                        >
                          01-14500571, +977 9741688965
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links - Minimal */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Quick Links</h3>
                  <div className="space-y-1">
                    {minimalLinks?.map((arg) => {
                      const IconComponent = arg.icon;
                      return (
                        <Link
                          key={arg?.id}
                          to={`/${arg.url}`}
                          className="flex items-center gap-3 text-gray-300 hover:text-primary transition-all duration-300 group py-2 px-3 rounded-lg hover:bg-white/5"
                        >
                          <IconComponent className="text-primary text-sm group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                            {arg?.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-xs">
                  © Copyright {new Date().getFullYear()}. Kothar Educational
                  Services - Nepal Office. All Rights Reserved
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/kothareducation"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-lg text-white" />
                </a>
                <a
                  href="https://www.instagram.com/kothareducation/"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg text-white" />
                </a>
                <a
                  href="mailto:info@kotharedu.com"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <FiMail className="text-lg text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NepalFooter;

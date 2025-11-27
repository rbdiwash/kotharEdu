import React from "react";
import {
  FaBookOpen,
  FaCalculator,
  FaCheckCircle,
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLink,
  FaMapMarkerAlt,
  FaNewspaper,
  FaPhone,
  FaUserTie,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import Australia from "../assets/images/au.svg";
import Nepal from "../assets/images/nepal.png";
import logo from "../assets/images/new_logo.png";

const options = [
  // { label: "FAQ", url: "faq", id: "1", icon: FaQuestionCircle },
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
    icon: FaUserTie,
  },
  {
    label: "Starter Kit",
    url: "starter-kit",
    id: "3",
    icon: FaBookOpen,
  },
  {
    label: "Tax Calculator",
    url: "tax-calculator",
    id: "2",
    icon: FaCalculator,
  },
  {
    label: "PR Points Calculator",
    url: "pr-calculator",
    id: "2",
    icon: FaUserTie,
  },
  {
    label: "Partner Institutions",
    url: "partner-institutions",
    id: "3",
    icon: FaGlobe,
  },
  { label: "News & Updates", url: "explore/news", id: "5", icon: FaNewspaper },
  { label: "Important Links", url: "important-links", id: "6", icon: FaLink },
];

const importantLinks = [
  {
    label: "CRICOS Course Search",
    url: "https://cricos.education.gov.au/Course/CourseSearch.aspx",
    id: "1",
  },
  {
    label: "Visa Processing Time",
    url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/global-visa-processing-times",
    id: "1",
  },
  {
    label: "Visa Fee Calculator",
    url: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    id: "1",
  },
  {
    label: "Skilled Occupation List",
    url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list",
    id: "1",
  },
  {
    label: "Code of Conduct",
    url: "https://www.mara.gov.au/tools-for-registered-agents/code-of-conduct",
    id: "1",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-altSecond rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Main Footer Content */}
          <div className="py-4">
            {/* Logo and Description */}

            {/* Footer Grid */}
            <div className="grid lg:grid-cols-4 gap-12 mt-8">
              {/* Company Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      loading="lazy"
                      src={logo}
                      className="h-30 filter drop-shadow-lg"
                      alt="Kothar Education Logo"
                    />
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Empowering students worldwide to achieve their study abroad
                    dreams with expert guidance and personalized support.
                  </p>{" "}
                  {/* Contact Details */}
                  <div className="space-y-4 pt-6 border-t border-white/10">
                    <h4 className="text-white font-semibold text-lg mb-4">
                      Get in Touch
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <FaEnvelope className="text-primary text-lg" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Email</p>
                          <a
                            href="mailto:info@kotharedu.com"
                            className="text-white hover:text-primary transition-colors duration-300 font-medium"
                          >
                            info@kotharedu.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <FaPhone className="text-primary text-lg" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Phone</p>
                          <a
                            href="tel:0480322403"
                            className="text-white hover:text-primary transition-colors duration-300 font-medium"
                          >
                            +61 480 322 403
                          </a>{" "}
                          <br />
                          <a
                            href="tel:+9779741688965"
                            className="text-white hover:text-primary transition-colors duration-300 font-medium"
                          >
                            +977 9741688965
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                    Our Offices
                  </h3>

                  {/* Offices */}
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">
                          <img
                            src={Australia}
                            alt="Australia"
                            className="w-4 h-4"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-lg mb-2">
                            Australia Office
                          </h4>
                          <a
                            target="_blank"
                            href="https://maps.app.goo.gl/aN7VpQ5JMT7ZKnjd6"
                            className="text-gray-300 text-sm leading-relaxed"
                          >
                            Suite 273, Level 2, 398/408 Pitt St
                            <br />
                            Haymarket NSW 2000
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">
                          <img src={Nepal} alt="Nepal" className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-lg mb-2">
                            Nepal Office
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
                  </div>
                </div>
              </div>
              {/* Quick Links */}
              <div className="space-y-2">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <FaLink className="text-primary text-xl" />
                    Quick Links
                  </h3>
                  <div className="space-y-1">
                    {options?.map((arg) => {
                      const IconComponent = arg.icon;
                      return (
                        <Link
                          key={arg?.id}
                          to={`/${arg.url}`}
                          className="flex items-center gap-4 text-gray-300 hover:text-primary transition-all duration-300 group py-2 px-4 rounded-lg hover:bg-white/5"
                        >
                          <IconComponent className="text-primary text-lg group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                            {arg?.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>{" "}
              {/* Quick Links */}
              <div className="space-y-2">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <FaLink className="text-primary text-xl" />
                    Important Links
                  </h3>
                  <div className="space-y-1">
                    {importantLinks?.map((arg) => {
                      const IconComponent = arg?.icon;
                      return (
                        <Link
                          key={arg?.id}
                          to={`/${arg?.url}`}
                          className="flex items-center gap-4 text-gray-300 hover:text-primary transition-all duration-300 group py-2 px-4 rounded-lg hover:bg-white/5"
                        >
                          {IconComponent && (
                            <IconComponent className="text-primary text-lg group-hover:scale-110 transition-transform duration-300" />
                          )}
                          <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
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
          <div className="border-t border-white/20 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © Copyright {new Date().getFullYear()}. Kothar Educational
                  Services. All Rights Reserved
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                <a
                  href="https://www.facebook.com/kothareducation"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl text-white" />
                </a>
                <a
                  href="https://www.instagram.com/kothareducation/"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl text-white" />
                </a>
                <a
                  href="mailto:info@kotharedu.com"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <FiMail className="text-xl text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

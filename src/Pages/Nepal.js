import React from "react";
import { BiChevronRight, BiMailSend, BiPhone } from "react-icons/bi";
import { FiMapPin, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import NepalBanner from "../Components/NepalBanner";
import NepalFooter from "../Components/NepalFooter";
import NepalNavbar from "../Components/NepalNavbar";
import OptimizedImage from "../Components/OptimizedImage";
import noImage from "../assets/images/australia.png";
import Anjana from "../assets/images/nepalTeam/anjana.jpeg";
import Kiran from "../assets/images/nepalTeam/kiran.jpeg";
import Prashanna from "../assets/images/nepalTeam/pras.jpeg";
import Shreya from "../assets/images/nepalTeam/shreya.JPG";
import useKothar from "../context/useKothar";
import Classes from "./Homepage/Classes";
import bannerImage from "../assets/images/nepal_banner.jpeg";

const Nepal = () => {
  document.title = "Nepal Office - Kothar Education";
  
  const [{ services }] = useKothar();

  // Nepal team members
  const nepalTeam = [
    {
      name: "Kiran Simkhada",
      role: "Branch Manager",
      gmail: "kiran@kotharedunepal.com",
      image: Kiran,
    },
    {
      name: "Prashanna Kafle",
      role: "Business Development Manager",
      gmail: "p.kafle@kotharedunepal.com",
      image: Prashanna,
    },

    {
      name: "Anjana Sapkota",
      role: "Marketing Officer",
      gmail: "info@kotharedunepal.com",
      image: Anjana,
    },
    {
      name: "Shreya Bhujel",
      role: "Receptionist",
      gmail: "info@kotharedunepal.com",
      image: Shreya,
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <NepalNavbar />
      <NepalBanner />
      {/* Hero Section */}
      <section
        id="homepage"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      >
        {/* Animated Background Grid */}

        {/* Subtle Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Centered Content */}
            <div className="text-center space-y-12">
              {/* Logo and Badge */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-6 py-2 text-sm font-semibold shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  <span>Kothar Education - Nepal Office</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Your Gateway to
                  <span className="block text-primary">Global Education</span>
                </h1>
                <p className="text-base lg:text-lg text-white max-w-2xl mx-auto leading-relaxed">
                  Empowering Nepali students to achieve their study abroad
                  dreams with expert guidance and comprehensive support.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-0">
                <button
                  onClick={() => scrollToSection("services")}
                  className="group bg-primary text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  <span className="relative z-10">Explore Our Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-second to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-full font-semibold text-base hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get In Touch
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Students Placed
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-second transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-second mb-2">4+</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-altSecond transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-altSecond mb-2">
                    98%
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Success Rate
                  </div>
                </div>
              </div>

              {/* Study Destinations */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Study Destinations
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    {
                      name: "Australia",
                      flag: "au",
                      cities: "Sydney • Melbourne",
                    },
                    {
                      name: "Canada",
                      flag: "ca",
                      cities: "Toronto • Vancouver",
                    },
                    {
                      name: "United Kingdom",
                      flag: "gb",
                      cities: "London • Manchester",
                    },
                    {
                      name: "United States",
                      flag: "us",
                      cities: "New York • California",
                    },
                  ].map((country, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <div className="text-center space-y-2">
                        <div className="w-16 h-12 mx-auto">
                          <img
                            loading="lazy"
                            src={`https://flagcdn.com/w80/${country.flag}.png`}
                            alt={`${country.name} Flag`}
                            className="w-full h-full object-cover rounded shadow-sm"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        </div>
                        <h4 className="text-base font-semibold text-gray-800">
                          {country.name}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {country.cities}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-second/5 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary rounded-full px-6 py-3 text-sm font-medium border border-primary/20 mb-6">
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600"></span>
              </div>
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Comprehensive Educational Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of services to support your study abroad
              journey, from test preparation to visa assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.services?.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden h-48">
                  <OptimizedImage
                    src={service?.image || noImage}
                    alt={service?.serviceName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {index + 1}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                    {service?.serviceName}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {service?.descripttion?.slice(0, 150)}
                    {service?.descripttion?.length > 150 && "..."}
                  </p>
                  <Link
                    to="/book"
                    className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <BiChevronRight className="text-xl" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* IELTS/PTE Classes Promotional Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-6 py-2 text-sm font-semibold shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>Special Offer</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Join IELTS & PTE Classes
                <span className="block text-primary mt-2">
                  For Just Rs 3,999
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                Prepare for your English proficiency tests with our expert
                instructors. Get comprehensive training, practice materials, and
                personalized guidance to achieve your target score.
              </p>

              {/* Key Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">
                    Expert Instructors
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">
                    Comprehensive Study Materials
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">
                    Mock Tests & Practice Sessions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">
                    Flexible Schedule Options
                  </span>
                </div>
              </div>

              {/* Price Highlight */}
              <div className="bg-primary/10 rounded-xl p-6 border-2 border-primary/20">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    Rs 3,999
                  </span>
                  <span className="text-gray-500 line-through text-xl">
                    Rs 8,000
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Limited time offer - Save Rs 4,001!
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc738QJKTGcXEA7QdKMgRdMPYD4e9j6S8LK-z5TgRMILy1aUQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>Enroll Now</span>
                <BiChevronRight className="text-2xl group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={bannerImage}
                  alt="IELTS PTE Classes - Study Abroad Preparation"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Classes />

      {/* Team Section */}
      <section
        id="team"
        className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-second/10 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <FiUsers className="text-primary text-xl" />
              <span className="text-gray-600 font-medium">Our Team</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Meet Our Nepal Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to making your educational
              dreams a reality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nepalTeam?.map((member, index) => (
              <TeamCard
                key={index}
                name={member?.name}
                role={member.role}
                number={member.number}
                gmail={member.gmail}
                image={member.image}
                contact={member?.contact}
                location={member.location}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-6 gap-8">
            <ContactForm nepal={true} />
          </div>
        </div>
      </section>
      <NepalFooter />
    </>
  );
};

export default Nepal;

// Team Card Component
const TeamCard = ({ name, role, number, gmail, image, contact, location }) => {
  return (
    <div className="group">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/20">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            loading="lazy"
            src={image}
            alt={name || "Team Member"}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {number && (
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
              QEAC: {number}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="space-y-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                {name}
              </h3>
              <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                {role}
              </p>
            </div>

            {location && (
              <div className="flex items-center gap-3 p-1 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <FiMapPin className="text-primary text-lg" />
                </div>
                <span className="text-gray-700 font-medium">{location}</span>
              </div>
            )}

            <div className="space-y-3">
              {gmail && (
                <div className="flex items-center gap-3 p-1 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <BiMailSend className="text-primary text-lg" />
                  </div>
                  <a
                    href={`mailto:${gmail}`}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-sm"
                  >
                    {gmail}
                  </a>
                </div>
              )}
              {contact && (
                <div className="flex items-center gap-3 p-1 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <BiPhone className="text-primary text-lg" />
                  </div>
                  <a
                    href={`tel:${contact}`}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {contact}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

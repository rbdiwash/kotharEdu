import axios from "../../Utils/Axios";
import React, { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";
import ContactForm from "../../Components/ContactForm";
import TakePartEvent from "../../Components/TakePartEvent";
import useKothar from "../../context/useKothar";
import cover from "../../assets/images/kothar.png";
const Services = () => {
  const sidebars = [
    { serviceName: "IELTS", id: "ielts" },
    { serviceName: "PTE CLASS", id: "pte" },
    { serviceName: "Scholarship Guidance", id: "scholarship" },
    { serviceName: "University / Colleges Presentation", id: "uni" },
    { serviceName: "Pre-departure Session", id: "predaparture" },
    { serviceName: "Work Placement", id: "placement" },
    { serviceName: "Skill Assessment ", id: "skill" },
    { serviceName: "Accomodation / Airport Pickup  ", id: "accomodation" },
    { serviceName: "College Enrollment", id: "enrollment" },
  ];

  const location = useLocation();
  const { data } = location?.state;
  const [{ services }, {}] = useKothar();
  return (
    <>
      <section
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%), url(${
            data?.image ?? cover
          }) no-repeat center/cover`,
        }}
        className="relative min-h-[60vh] flex items-center"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 text-white/80">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer font-medium">
                Home
              </span>
              <BiChevronRight className="text-xl" />
              <span className="text-white/70">Services</span>
              <BiChevronRight className="text-xl" />
              <span className="text-primary font-semibold">
                {data?.serviceName}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white text-sm font-medium border border-white/20">
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="w-2 h-2 bg-second rounded-full animate-pulse delay-300"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-600"></span>
                </div>
                <span>Our Services</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  {data?.serviceName}
                </h1>

                <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                  Academic opportunities recognised all over the world. Discover
                  world-class education and comprehensive support for your study
                  abroad journey.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-8">
                <NavLink to="/book" target="_blank">
                  <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Book Now
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  About {data?.serviceName}
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {data?.descripttion}
                </p>
              </div>

              {/* Service Features */}
              <div className="grid md:grid-cols-2 gap-6">
                {(() => {
                  const features = [
                    {
                      icon: "🎯",
                      title: "Expert Guidance",
                      description:
                        "Professional support from experienced consultants with proven track records.",
                      gradient: "from-primary/10 to-second/10",
                      border: "border-primary/20",
                      bgColor: "bg-primary",
                    },
                    {
                      icon: "⚡",
                      title: "Quick Results",
                      description:
                        "Efficient processes designed to get you results faster and more effectively.",
                      gradient: "from-second/10 to-altSecond/10",
                      border: "border-second/20",
                      bgColor: "bg-second",
                    },
                    {
                      icon: "🤝",
                      title: "Personalized Support",
                      description:
                        "Tailored assistance based on your specific needs and goals.",
                      gradient: "from-altSecond/10 to-primary/10",
                      border: "border-altSecond/20",
                      bgColor: "bg-altSecond",
                    },
                    {
                      icon: "📈",
                      title: "Proven Success",
                      description:
                        "High success rates with thousands of satisfied students worldwide.",
                      gradient: "from-primary/10 to-altSecond/10",
                      border: "border-primary/20",
                      bgColor: "bg-primary",
                    },
                    {
                      icon: "🌍",
                      title: "Global Network",
                      description:
                        "Access to international universities and educational institutions.",
                      gradient: "from-second/10 to-primary/10",
                      border: "border-second/20",
                      bgColor: "bg-second",
                    },
                    {
                      icon: "💼",
                      title: "Career Guidance",
                      description:
                        "Comprehensive career counseling and job placement assistance.",
                      gradient: "from-altSecond/10 to-second/10",
                      border: "border-altSecond/20",
                      bgColor: "bg-altSecond",
                    },
                    {
                      icon: "📚",
                      title: "Study Resources",
                      description:
                        "Access to comprehensive study materials and preparation tools.",
                      gradient: "from-primary/10 to-altSecond/10",
                      border: "border-primary/20",
                      bgColor: "bg-primary",
                    },
                    {
                      icon: "🎓",
                      title: "Academic Excellence",
                      description:
                        "Focus on achieving academic excellence and personal growth.",
                      gradient: "from-second/10 to-primary/10",
                      border: "border-second/20",
                      bgColor: "bg-second",
                    },
                  ];

                  // Shuffle array and take first 2
                  const shuffled = features.sort(() => 0.5 - Math.random());
                  const selectedFeatures = shuffled.slice(0, 2);

                  return selectedFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 border ${feature.border}`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center`}
                        >
                          <span className="text-white text-xl">
                            {feature.icon}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ));
                })()}
              </div>

              <div className="flex gap-4">
                <NavLink to="/book">
                  <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Book Now
                  </button>
                </NavLink>
              </div>
            </div>

            {/* Services Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary to-second rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Other Services
                </h3>
                <div className="space-y-4 max-h-[500px] overflow-x-hidden overflow-y-auto">
                  {services?.services?.map((arg, i) => (
                    <NavLink
                      to={`/services/${arg?.id}`}
                      key={i}
                      state={{ data: arg }}
                      className="block"
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold">
                              {i + 1}
                            </div>
                            <span className="text-white font-semibold text-lg capitalize">
                              {arg?.serviceName}
                            </span>
                          </div>
                          <BiChevronRight className="text-white text-xl group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          {data?.more?.title && (
            <div className="mt-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-primary/10 text-primary rounded-full px-6 py-3 text-sm font-medium border border-primary/20 mb-6">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></span>
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600"></span>
                  </div>
                  <span>Additional Information</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {data?.more?.title}
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
              </div>

              {data?.more?.infos?.length > 0 && (
                <div className="grid md:grid-cols-3 gap-8">
                  {data?.more?.infos?.map((item, id) => (
                    <div key={id} className="group">
                      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>

                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                            {item?.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item?.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <TakePartEvent />
    </>
  );
};

export default Services;

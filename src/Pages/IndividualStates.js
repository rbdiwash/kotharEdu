import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import TakePartEvent from "../Components/TakePartEvent";
import AssociatedUni from "./Homepage/AssociatedUni";
import australia from "../assets/images/australia.png";

const IndividualStates = () => {
  const sidebars = [
    { title: "Universities and Courses available", value: "uni" },
    { title: "Fees, Scholarships and cost of living", value: "fees" },
    { title: "Admission Process", value: "admission" },
    { title: "Visa Procedure", value: "visa" },
  ];

  const location = useLocation();
  const { data } = location?.state;
  const navigate = useNavigate();
  
  document.title = data?.destination
    ? `${data?.destination} - Study Destinations - Kothar Education`
    : "Study Destinations - Kothar Education";

  return (
    <>
      <section
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%), url(${
            data?.image || australia
          }) no-repeat center/cover`,
        }}
        className="relative min-h-screen flex items-center"
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
              <span className="text-white/70">Explore</span>
              <BiChevronRight className="text-xl" />
              <span className="text-primary font-semibold">
                Study in {data?.destination || "Australia"}
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
                <span>Study Destination</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Study in
                  <span className="block text-primary">
                    {data?.destination || "Australia"}
                  </span>
                </h1>

                <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                  Academic opportunities recognised all over the world. Discover
                  world-class education, diverse cultures, and endless
                  possibilities for your future.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-white/70 text-sm">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    20+
                  </div>
                  <div className="text-white/70 text-sm">
                    Partner Universities
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    98%
                  </div>
                  <div className="text-white/70 text-sm">Success Rate</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-8">
                <Link
                  to="/partner-institutions"
                  target="_blank"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Universities
                </Link>
                <button
                  onClick={() => navigate("/book")}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  About {data?.destination || "Australia"}
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {data?.destinationDesc}
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/10 to-second/10 rounded-2xl p-6 border border-primary/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🎓</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      World-Class Education
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Access to internationally recognized universities and
                    cutting-edge research facilities.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-second/10 to-altSecond/10 rounded-2xl p-6 border border-second/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-second rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🌏</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Cultural Diversity
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Experience multicultural environments and build global
                    networks for your future.
                  </p>
                </div>
              </div>

              {/* <div className="flex gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Learn More
                </button>
                <button className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  Download Guide
                </button>
              </div> */}
            </div>

            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary to-second rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Our Services
                </h3>
                <div className="space-y-4">
                  {sidebars.map((arg, index) => (
                    <div key={arg?.value} className="group">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <span className="text-white font-semibold text-lg">
                              {arg?.title}
                            </span>
                          </div>
                          <BiChevronRight className="text-white text-xl group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary rounded-full px-6 py-3 text-sm font-medium border border-primary/20 mb-6">
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600"></span>
              </div>
              <span>Why Choose {data?.destination || "Australia"}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {data?.whyDestination?.title || "Why Study in Australia?"}
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data?.whyDestination?.ans?.map((item, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-second rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl">
                        {i === 0 ? "🎓" : i === 1 ? "💼" : "🌏"}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {item?.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item?.desc}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <AssociatedUni
        title={"Universities Available"}
        subtitle="Know about the Uni and the course of your interest in Sydney"
        destinationId={data?.id}
      /> */}
      <TakePartEvent />
    </>
  );
};

export default IndividualStates;

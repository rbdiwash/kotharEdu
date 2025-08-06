import React, { useState, useEffect } from "react";
import study from "../../assets/images/study.png";
import student from "../../assets/images/student.png";
import uni from "../../assets/images/select.png";
import apply from "../../assets/images/apply.png";
import admission from "../../assets/images/admission.png";
import user from "../../assets/images/user.png";
import vector from "../../assets/images/Vector.png";
import visa from "../../assets/images/visa.png";
import noImage from "../../assets/images/australia.png";
import AssociatedUni from "./AssociatedUni";
import Slider from "react-slick";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Classes from "./Classes";
import News from "./News";
import Events from "./Events";
import Cities from "./Cities";
import ContactForm from "../../Components/ContactForm";
import Testimonials from "./Testimonials";
import { Link, NavLink } from "react-router-dom";
import useKothar from "../../context/useKothar";
import award from "../../assets/images/award.png";
import australia from "../../assets/images/australia.jpg";
import canada from "../../assets/images/canada.jpg";
import uk from "../../assets/images/uk.jpg";
import usa from "../../assets/images/usa.jpg";
import nepal from "../../assets/images/nepal.jpg";

const options = [
  { title: "Study Abroad Decision", img: study },
  { title: "Student Counseling", img: student },
  { title: "Select University", img: uni },
  { title: "Apply to Universities", img: apply },
  { title: "Get Admission", img: admission },
];
const options2 = [
  {
    title: "Awards",
    img: award,
    count: "2025",
    description: "Local Business Awards Finalist",
  },
  {
    title: "Students",
    img: user,
    count: "10K",
    description: "Successful student placements worldwide",
  },
  {
    title: "Institutes",
    img: vector,
    count: "50",
    description: "Partner universities and colleges",
  },
  {
    title: "Visa Success",
    img: visa,
    count: "1000",
    description: "Successful visa applications",
  },
];

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images array
  const backgroundImages = [
    {
      url: australia,
      alt: "Australia",
    },
    {
      url: canada,
      alt: "Canada",
    },
    {
      url: uk,
      alt: "UK",
    },
    {
      url: usa,
      alt: "USA",
    },
    {
      url: nepal,
      alt: "Nepal",
    },
  ];

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  var settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    nextArrow: <BiChevronRight />,
    prevArrow: <BiChevronLeft />,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  };
  const [{ services }, {}] = useKothar();
  return (
    <>
      <section
        id="homepage"
        className="md:max-h-[100vh] relative overflow-hidden"
      >
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url('${image.url}')`,
                transform: "translateZ(0)",
              }}
            />
          ))}
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/100"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className="space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-second/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="w-2 h-2 bg-second rounded-full animate-pulse delay-300"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-600"></span>
                </div>
                <span className="text-white text-sm font-medium">
                  Kothar Educational Services
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Empowering your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-primary">
                    Educational Journey
                  </span>
                </h1>

                <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                  Transform your dreams into reality with expert guidance for
                  studying abroad in Australia, Canada, UK, and USA.
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    500+
                  </div>
                  <div className="text-white/70 text-sm font-medium">
                    Students Placed
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    4+
                  </div>
                  <div className="text-white/70 text-sm font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    98%
                  </div>
                  <div className="text-white/70 text-sm font-medium">
                    Success Rate
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <a
                  href="#services"
                  className="group bg-primary text-white px-10 py-5 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden"
                >
                  <span className="relative z-10">Explore Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-second to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <Link
                  to="/contact"
                  className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right Visual Section - Modern Cards */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 overflow-hidden">
                <div className="text-center mb-8">
                  <h3 className="text-white font-bold text-2xl mb-3">
                    Study Destinations
                  </h3>
                  <p className="text-white/70 text-base">
                    Explore our global education opportunities
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Australia */}
                  <div className="group bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <div className="w-16 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://flagcdn.com/w80/au.png"
                          alt="Australia Flag"
                          className="w-full h-full object-cover rounded-sm shadow-sm"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "block";
                          }}
                        />
                        <div
                          className="w-full h-full bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-xs"
                          style={{ display: "none" }}
                        >
                          AU
                        </div>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2">
                        Australia
                      </h4>
                      <p className="text-white/70 text-sm">
                        Sydney • Melbourne
                      </p>
                    </div>
                  </div>

                  {/* Canada */}
                  <div className="group bg-gradient-to-br from-red-500/20 to-white/20 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <div className="w-16 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://flagcdn.com/w80/ca.png"
                          alt="Canada Flag"
                          className="w-full h-full object-cover rounded-sm shadow-sm"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "block";
                          }}
                        />
                        <div
                          className="w-full h-full bg-red-600 rounded-sm flex items-center justify-center text-white font-bold text-xs"
                          style={{ display: "none" }}
                        >
                          CA
                        </div>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2">
                        Canada
                      </h4>
                      <p className="text-white/70 text-sm">
                        Toronto • Vancouver
                      </p>
                    </div>
                  </div>

                  {/* UK */}
                  <div className="group bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <div className="w-16 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://flagcdn.com/w80/gb.png"
                          alt="UK Flag"
                          className="w-full h-full object-cover rounded-sm shadow-sm"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "block";
                          }}
                        />
                        <div
                          className="w-full h-full bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-xs"
                          style={{ display: "none" }}
                        >
                          UK
                        </div>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2">
                        United Kingdom
                      </h4>
                      <p className="text-white/70 text-sm">
                        London • Manchester
                      </p>
                    </div>
                  </div>

                  {/* USA */}
                  <div className="group bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <div className="w-16 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://flagcdn.com/w80/us.png"
                          alt="USA Flag"
                          className="w-full h-full object-cover rounded-sm shadow-sm"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "block";
                          }}
                        />
                        <div
                          className="w-full h-full bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-xs"
                          style={{ display: "none" }}
                        >
                          US
                        </div>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2">
                        United States
                      </h4>
                      <p className="text-white/70 text-sm">
                        New York • California
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary to-second rounded-full w-12 h-12 animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 bg-white/30 rounded-full w-8 h-8 animate-pulse shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="homepage2"
        className="py-24 bg-gradient-to-b from-white to-lightBlue"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-second mb-6">
              One of the leading educational consultancy in Nepal
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Proper abroad study guidance provided for academic growth. The
              best test preparation classes in the whole town. Definite
              information about highly renowned colleges/universities throughout
              the globe. Guidance for getting wide range of
              scholarship/fellowship. Service oriented staffs to provide
              information all the time. Located at heart of main cities of the
              country.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {options2?.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-second/10 p-4 rounded-full mb-6">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-5xl font-bold text-second mb-2">
                    {item.count}
                    {item.title !== "Awards" && (
                      <span className="text-3xl">+</span>
                    )}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cities />
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-lightBlue to-white"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {services?.serviceMotto ||
                "Provide awesome customer service with our experienced teachers"}
            </p>
          </div>

          <Slider {...settings}>
            {services?.services?.map((item, i) => (
              <div className="px-4" key={i * 123}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-[550px] flex flex-col my-4">
                  <div className="relative overflow-hidden rounded-t-2xl h-[300px]">
                    <img
                      src={item?.image || noImage}
                      alt={item?.serviceName}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-second mb-4 capitalize line-clamp-1">
                      {item?.serviceName}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                      {item?.descripttion?.slice(0, 200)}
                      {item?.descripttion?.length > 200 && "..."}
                    </p>
                    <NavLink
                      to={`/services/${item?.id}`}
                      state={{ data: item }}
                      className="inline-flex items-center text-second font-semibold hover:text-primary transition-colors duration-300 group mt-auto"
                    >
                      <span>Learn More</span>
                      <BiChevronRight className="text-2xl transform group-hover:translate-x-1 transition-transform duration-300" />
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <Events />
      <Classes />
      <AssociatedUni />
      <News />
      <Testimonials />
      <section id="contact" className="h-max">
        <div className="container mx-auto">
          <div className="row">
            <div className="grid md:grid-cols-6 px-6 py-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;

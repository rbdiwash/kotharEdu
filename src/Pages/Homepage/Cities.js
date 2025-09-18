import React from "react";
import australia from "../../assets/images/australia.png";
import Slider from "react-slick";
import { BiChevronRight, BiChevronLeft, BiMap } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import useKothar from "../../context/useKothar";

const Cities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <BiChevronRight />,
    prevArrow: <BiChevronLeft />,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const [{ destinations }] = useKothar();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-second rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-altSecond rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <BiMap className="text-primary text-xl" />
            <span className="text-gray-600 font-medium">
              Study Destinations
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Where do you want to study?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We recommend the best colleges in the most promising destinations to
            build your career.
          </p>
        </div>

        {/* Destinations Slider */}
        <div className="relative my-4">
          <Slider {...settings} className="destinations-slider">
            {destinations?.length > 0 &&
              destinations?.map((item) => (
                <div key={item?.id} className="px-3">
                  <NavLink
                    to={`/states/${item?.destination}`}
                    state={{ data: item }}
                    className="block group"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      {/* Image Container */}
                      <div className="relative h-80 overflow-hidden">
                        <img
                          loading="lazy"
                          src={item?.image || australia}
                          alt={item?.destination || "Study Destination"}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <div className="text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                              {item?.destination || "Sydney"}
                            </h3>
                            <p className="text-white/90 text-sm mb-4">
                              Explore study opportunities
                            </p>

                            {/* CTA Button */}
                            <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors duration-300">
                              <span className="text-sm font-medium">
                                Learn More
                              </span>
                              <BiChevronRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect Border */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-colors duration-300"></div>
                    </div>
                  </NavLink>
                </div>
              ))}
          </Slider>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <span className="text-gray-700 font-medium">
              Ready to explore your options?
            </span>
            <NavLink
              to="/contact"
              className="bg-gradient-to-r from-primary to-second text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-second hover:to-primary transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;

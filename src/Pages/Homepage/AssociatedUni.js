import React from "react";
import Slider from "react-slick";
import australia from "../../assets/images/australia.png";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FiExternalLink, FiMapPin, FiChevronRight } from "react-icons/fi";
import useKothar from "../../context/useKothar";
import { FaGraduationCap } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AssociatedUni = ({ title, subtitle, destinationId }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    nextArrow: (
      <BiChevronRight className="text-2xl text-primary hover:text-second transition-colors duration-300" />
    ),
    prevArrow: (
      <BiChevronLeft className="text-2xl text-primary hover:text-second transition-colors duration-300" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const [{ uniList }, {}] = useKothar();
  const navigate = useNavigate();
  const getFilteredList = () => {
    if (!destinationId) return uniList;
    else {
      let filteredList =
        uniList.filter((arg) => arg?.destId === destinationId) || uniList;
      return filteredList;
    }
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-altSecond rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <FaGraduationCap className="text-primary text-xl" />
              <span className="text-gray-600 font-medium">
                Partner Institutions
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {title || "Our Valued Partners"}
            </h2>

            {subtitle && (
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}

            {!subtitle && (
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover our network of prestigious partner institutions that
                offer world-class education and exceptional opportunities for
                international students.
              </p>
            )}
          </div>

          {/* Universities Slider */}
          {getFilteredList()?.length > 0 ? (
            <div className="relative">
              <Slider {...settings} className="universities-slider">
                {getFilteredList()?.map((item) => (
                  <div key={item?.id} className="px-3">
                    <UniversityCard item={item} />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-white/20 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaGraduationCap className="text-gray-400 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Universities Available
                </h3>
                <p className="text-gray-600">
                  Check back soon for our partner institutions.
                </p>
              </div>
            </div>
          )}

          {/* View All Button */}
          {getFilteredList()?.length > 0 && (
            <div className="text-center mt-12">
              <button
                onClick={() => navigate("/partner-institutions")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-second text-white px-8 py-4 rounded-lg font-semibold hover:from-second hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>View All Partners</span>
                <FiExternalLink className="text-lg" />
              </button>
            </div>
          )}
        </div>

        {/* Custom CSS for Slider */}
        <style jsx>{`
          .universities-slider .slick-dots {
            bottom: -40px;
          }
          .universities-slider .slick-dots li button:before {
            color: #3b82f6;
            font-size: 12px;
          }
          .universities-slider .slick-dots li.slick-active button:before {
            color: #1e40af;
          }
          .universities-slider .slick-prev,
          .universities-slider .slick-next {
            z-index: 10;
          }
        `}</style>
      </section>
    </>
  );
};

// University Card Component
const UniversityCard = ({ item }) => {
  return (
    <div className="group">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/20">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            loading="lazy"
            src={item?.image || australia}
            alt={item?.name || "University"}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* External Link Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiExternalLink className="text-primary text-sm" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {item?.name}
          </h3>

          {item?.location && (
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <FiMapPin className="text-primary text-sm" />
              <span className="text-sm font-medium">{item?.location}</span>
            </div>
          )}

          {/* Action Button */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <a
              href={item?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-second transition-colors duration-300 group/link"
            >
              <span>Visit Website</span>
              <FiExternalLink className="text-sm group-hover/link:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociatedUni;

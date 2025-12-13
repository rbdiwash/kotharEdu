import React from "react";
import { format } from "date-fns";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import useKothar from "../../context/useKothar";

const Events = () => {
  const [{ events }] = useKothar();

  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    infinite: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
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
            <FiCalendar className="text-primary text-xl" />
            <span className="text-gray-600 font-medium">Upcoming Events</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Join Our Events
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover exciting opportunities to connect, learn, and grow with our
            community. From workshops to seminars, find events that match your
            interests and goals.
          </p>
        </div>

        {/* Events Slider */}
        {events?.length > 0 ? (
          <div className="relative py-4">
            <Slider {...settings} className="events-slider">
              {events?.map((item, i) => (
                <div key={item?.id} className="px-3">
                  <EventCard item={item} />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-white/20 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCalendar className="text-gray-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No Events Available
              </h3>
              <p className="text-gray-600 mb-6">
                Check back soon for upcoming events and opportunities.
              </p>
              <Link
                to={"/explore/events"}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                <span>View All Events</span>
                <FiChevronRight className="text-sm" />
              </Link>
            </div>
          </div>
        )}

        {/* View All Events Button */}
        {events?.length > 0 && (
          <div className="text-center mt-12">
            <Link to="/explore/events">
              <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span>View All Events</span>
                <FiChevronRight className="text-lg" />
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Custom CSS for Slider */}
      <style jsx>{`
        .events-slider .slick-dots {
          bottom: -40px;
        }
        .events-slider .slick-dots li button:before {
          color: #3b82f6;
          font-size: 12px;
        }
        .events-slider .slick-dots li.slick-active button:before {
          color: #1e40af;
        }
        .events-slider .slick-prev,
        .events-slider .slick-next {
          z-index: 10;
        }
      `}</style>
    </section>
  );
};

// Event Card Component
const EventCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="group">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/20 h-full flex flex-col">
        {/* Date Badge */}
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <FiCalendar className="text-primary text-lg" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">
                  Event Date
                </div>
                <div className="text-lg font-semibold text-gray-800">
                  {format(new Date(item?.date || null), "MMM do, yyyy")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-0 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {item?.topic}
          </h3>

          <div className="space-y-3 mb-6 flex-grow">
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <FiClock className="text-primary text-sm" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">
                  Event Time
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {item?.startTime} - {item?.endTime}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-8 h-8 bg-second/20 rounded-full flex items-center justify-center">
                <FiMapPin className="text-second text-sm" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">
                  Location
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {item?.location}
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <button
              onClick={() => navigate(`/explore/events/${item?.id}`)}
              className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

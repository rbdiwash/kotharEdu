import React from "react";
import { BiChevronRight, BiCalendar, BiTime, BiMap } from "react-icons/bi";
import { FiClock, FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";
import exportImg from "../assets/images/events.png";
import ContactForm from "../Components/ContactForm";
import useKothar from "../context/useKothar";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const [{ events }] = useKothar();
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-altSecond rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <span className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Home
              </span>
              <BiChevronRight className="text-xl" />
              <span className="text-primary font-semibold">Events</span>
            </div>
          </div>

          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <FiCalendar className="text-primary text-xl" />
              <span className="text-gray-600 font-medium">Upcoming Events</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Join Our Events
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover exciting opportunities to connect, learn, and grow with
              our community. From workshops to seminars, find events that match
              your interests and goals.
            </p>
          </div>

          {/* Events Grid */}
          {events?.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {events?.map((item, i) => (
                <EventCard key={i} item={item} />
              ))}
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
                <p className="text-gray-600">
                  Check back soon for upcoming events and opportunities.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br bg-second relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <FiUsers className="text-white text-xl" />
                <span className="text-white font-medium">Get Involved</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Take Part in Events
              </h2>

              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Enroll your Preparation Class with Kothar Education and join our
                vibrant community. Connect with like-minded individuals and take
                your educational journey to the next level.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FiCalendar className="text-white text-sm" />
                  </div>
                  <span>Regular workshops and seminars</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FiUsers className="text-white text-sm" />
                  </div>
                  <span>Network with industry professionals</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FiMapPin className="text-white text-sm" />
                  </div>
                  <span>Both online and in-person events</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Event Card Component
const EventCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="group">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/20">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            loading="lazy"
            src={exportImg}
            alt={item?.topic || "Event"}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Date Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex flex-col items-center">
            <span className="text-2xl font-bold text-primary">
              {format(new Date(item?.date), "do")}
            </span>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              {format(new Date(item?.date), "MMM")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {item?.topic}
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <FiClock className="text-primary text-sm" />
              </div>
              <span className="text-sm font-medium">
                {item?.startTime} - {item?.endTime}
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-8 h-8 bg-second/20 rounded-full flex items-center justify-center">
                <FiMapPin className="text-second text-sm" />
              </div>
              <span className="text-sm font-medium">{item?.location}</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={() => navigate(`/explore/events/${item?.id}`)}
              className="w-full bg-gradient-to-r from-primary to-second text-white py-3 px-6 rounded-lg font-semibold hover:from-second hover:to-primary transition-all duration-300 transform hover:scale-105"
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

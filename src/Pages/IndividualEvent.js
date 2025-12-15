import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { FiCalendar, FiClock, FiMapPin, FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import useKothar from "../context/useKothar";
import { FaRegFileAlt } from "react-icons/fa";

const IndividualEvent = () => {
  const { id } = useParams();
  const [{ events }] = useKothar();
  const event = events?.find((event) => event?.id === id);
  const navigate = useNavigate();

  document.title = event?.title
    ? `${event?.title} - Events - Kothar Educational Services`
    : "Events - Kothar Educational Services";
  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Event Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The event you're looking for doesn't exist.
          </p>
          <Link
            to="/explore/events"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
          >
            <FiArrowLeft className="text-lg" />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

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
              <Link
                to="/"
                className="hover:text-primary transition-colors duration-300"
              >
                Home
              </Link>
              <BiChevronRight className="text-xl" />
              <Link
                to="/explore/events"
                className="hover:text-primary transition-colors duration-300"
              >
                Events
              </Link>
              <BiChevronRight className="text-xl" />
              <span className="text-primary font-semibold">Event Details</span>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Event Info */}
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <FiCalendar className="text-primary text-sm" />
                  <span className="text-sm font-medium text-primary">
                    {format(
                      new Date(event?.date || null),
                      "EEEE, MMMM do, yyyy"
                    )}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  {event?.topic}
                </h1>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <FiClock className="text-primary text-lg" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">
                        Event Time
                      </div>
                      <div className="text-lg font-semibold text-gray-800">
                        {event?.startTime} - {event?.endTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-second/20 rounded-full flex items-center justify-center">
                      <FiMapPin className="text-second text-lg" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">
                        Location
                      </div>
                      <div className="text-lg font-semibold text-gray-800">
                        {event?.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Description */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-altSecond/20 rounded-full flex items-center justify-center">
                      <FaRegFileAlt className="text-altSecond text-lg" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">
                        Event Description
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {event?.description ||
                        "No description available for this event."}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => navigate("/contact")}
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
                  >
                    Register Now
                  </button>
                  <Link to="/explore/events">
                    <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                      Back to Events
                    </button>
                  </Link>
                </div>
              </div>

              {/* Event Calendar */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Event Calendar
                  </h3>
                  <p className="text-sm text-gray-600">
                    Highlighted date shows the event
                  </p>
                </div>

                <Calendar eventDate={event?.date} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Calendar Component
const Calendar = ({ eventDate }) => {
  const today = new Date();
  const eventDateObj = new Date(eventDate);
  const currentMonth = eventDateObj.getMonth();
  const currentYear = eventDateObj.getFullYear();

  // Get the first day of the month
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);

  // Get the day of week for the first day (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfWeek = firstDay.getDay();

  // Get the number of days in the month
  const daysInMonth = lastDay.getDate();

  // Create array of days
  const days = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }

  // Add all days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Check if a date is the event date
  const isEventDate = (day) => {
    if (!day || !eventDate) return false;
    const dateToCheck = new Date(currentYear, currentMonth, day);
    const eventDateToCheck = new Date(eventDate);
    return (
      dateToCheck.getDate() === eventDateToCheck.getDate() &&
      dateToCheck.getMonth() === eventDateToCheck.getMonth() &&
      dateToCheck.getFullYear() === eventDateToCheck.getFullYear()
    );
  };

  // Check if a date is today
  const isToday = (day) => {
    if (!day) return false;
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  return (
    <div className="calendar-container">
      {/* Month and Year Header */}
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-gray-800">
          {monthNames[currentMonth]} {currentYear}
        </h4>
      </div>

      {/* Day Names Header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="text-center py-2">
            <span className="text-xs font-medium text-gray-500">{day}</span>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div key={index} className="aspect-square">
            {day ? (
              <div
                className={`w-full h-full flex items-center justify-center text-sm font-medium rounded-lg transition-all duration-200 ${
                  isEventDate(day)
                    ? "bg-primary text-white shadow-lg transform scale-110"
                    : isToday(day)
                    ? "bg-second/20 text-second border-2 border-second"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {day}
              </div>
            ) : (
              <div className="w-full h-full"></div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-gray-600">Event Date</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-second/20 border-2 border-second rounded-full"></div>
            <span className="text-gray-600">Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualEvent;

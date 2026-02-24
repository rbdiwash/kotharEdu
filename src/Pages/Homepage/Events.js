import React from "react";
import { format } from "date-fns";
import { FiChevronRight, FiClock, FiCalendar, FiMapPin } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import useKothar from "../../context/useKothar";

const Events = () => {
  const [{ events }] = useKothar();
  const list = events?.length > 0 ? events : [];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-altSecond rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-0 md:px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-14">
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

        {list.length > 0 ? (
          <>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-second/30 to-transparent hidden sm:block" />
              <ul className="space-y-0">
                {list.map((item, index) => (
                  <li key={item?.id}>
                    <EventRow item={item} index={index} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center mt-12">
              <Link
                to="/explore/events"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View all events
                <FiChevronRight className="text-lg" />
              </Link>
            </div>
          </>
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
                to="/explore/events"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                <span>View All Events</span>
                <FiChevronRight className="text-sm" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const EventRow = ({ item, index }) => {
  const navigate = useNavigate();
  const date = item?.date ? new Date(item.date) : null;
  const day = date ? format(date, "d") : "—";
  const month = date ? format(date, "MMM") : "—";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/explore/events/${item?.id}`)}
      onKeyDown={(e) =>
        e.key === "Enter" && navigate(`/explore/events/${item?.id}`)
      }
      className="group flex gap-6 sm:gap-8 py-6 sm:py-8 border-b border-gray-200/80 last:border-0 hover:bg-white/60 transition-colors duration-300 rounded-xl px-4 -mx-4 sm:px-6 sm:-mx-6 cursor-pointer"
    >
      {/* Date block */}
      <div className="relative z-10 shrink-0 flex flex-col items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-primary to-second text-white shadow-lg">
        <span className="text-lg sm:text-xl font-bold leading-none">{day}</span>
        <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider opacity-90">
          {month}
        </span>
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 pt-0.5">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">
          {item?.topic}
        </h3>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-gray-600">
          <span className="inline-flex items-center gap-1.5">
            <FiClock className="text-primary shrink-0" />
            {item?.startTime && item?.endTime
              ? `${item.startTime} – ${item.endTime}`
              : "Time TBA"}
          </span>
          {item?.location && (
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin className="text-second shrink-0" />
              {item.location}
            </span>
          )}
        </div>
        <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          View details
          <FiChevronRight className="text-sm" />
        </span>
      </div>
    </div>
  );
};

export default Events;

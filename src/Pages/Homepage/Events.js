import React from "react";
import { format } from "date-fns";
import { FiChevronLeft, FiChevronRight, FiClock } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import Slider from "react-slick";
import useKothar from "../../context/useKothar";

const Events = () => {
  const [{ events }] = useKothar();

  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    // className: "slider variable-width",
    // variableWidth: true,
    nextArrow: (
      <FiChevronRight className="text-4xl text-second hover:text-primary transition-colors duration-300" />
    ),
    prevArrow: (
      <FiChevronLeft className="text-4xl text-second hover:text-primary transition-colors duration-300" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="events"
      className="py-24 bg-gradient-to-b from-white to-lightBlue"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-second mb-4">Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for our upcoming events and workshops designed to help you
            achieve your educational goals
          </p>
        </div>

        <div className="flex items-center justify-center text-center mb-12">
          <button className="p-2 hover:text-primary transition-colors duration-300">
            <FiChevronLeft className="text-4xl text-second" />
          </button>
          <h3 className="text-3xl font-bold text-second mx-6">
            {format(new Date(), "MMMM yyyy")}
          </h3>
          <button className="p-2 hover:text-primary transition-colors duration-300">
            <FiChevronRight className="text-4xl text-second" />
          </button>
        </div>

        <Slider {...settings}>
          {events?.length > 0 ? (
            events?.map((item, i) => (
              <div className="px-2 my-4 w-max" key={i}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-[400px] flex flex-col">
                  <div className="p-8 flex-grow">
                    <div className="flex items-center justify-between mb-8">
                      <div className="bg-second/10 rounded-lg p-4">
                        <p className="text-3xl font-bold text-second">
                          {format(new Date(item?.date || null), "do")}
                        </p>
                        <p className="text-lg text-second font-semibold">
                          {format(new Date(item?.date || null), "MMM")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Event Time</p>
                        <p className="text-lg font-semibold text-second">
                          {item?.startTime} - {item?.endTime}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-6 line-clamp-2">
                      {item?.topic}
                    </h3>

                    <div className="space-y-4 mt-auto">
                      <div className="flex items-center text-gray-600">
                        <FiClock className="text-xl mr-3 text-second" />
                        <span className="text-lg">
                          {item?.startTime} - {item?.endTime}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <TfiLocationPin className="text-xl mr-3 text-second" />
                        <span className="text-lg">{item?.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-600">
                No upcoming events at the moment
              </h3>
              <p className="text-gray-500 mt-2">
                Please check back later for new events
              </p>
            </div>
          )}
        </Slider>
      </div>
    </section>
  );
};

export default Events;

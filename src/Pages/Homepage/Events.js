import React, { useState, useEffect } from "react";
// import axios from "../Utils/Axios";
import axios from "axios";
import { BiChevronRight, BiChevronLeft, BiMap } from "react-icons/bi";
import { FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", color: "gray" }}
      onClick={onClick}
    >
      <BiChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <BiChevronRight />
    </div>
  );
}
const Events = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("https://kothar-consultancy.vercel.app/kothar/events")
      .then((res) => {
        console.log(res);
        setEvents(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section id="events" className="h-max-content ">
      <div className="container mx-auto my-auto h-full  py-12 md:py-24">
        <div className="row items-center  h-full my-auto">
          <p className="section-heading">Events</p>
          <div className="flex items-center justify-center text-center py-10 space-x-4">
            <FiChevronLeft className="text-5xl text-altWhite cursor-pointer" />
            <p className="text-2xl  text-altWhitee font-semibold text-center md:text-4xl">
              January
            </p>
            <FiChevronRight className="text-5xl text-altWhite cursor-pointer" />
          </div>
          <Slider {...settings}>
            <div className="bg-lightBlue px-4 py-6 rounded-md ">
              <div className="flex flex-col text-left">
                <p className="text-4xl text-primary text-left font-bold">1st</p>
                <p className="text-4xl text-primary font-normal text-left">
                  Jan
                </p>
                <p className="text-2xl  text-black leading-tight font-bold tracking-wide py-6">
                  UK Information Session 2021
                </p>
                <div className="text-md flex items-center text-blue space-x-3">
                  <FiClock /> <span> 12:00 am - 11:59pm</span>
                </div>
                <p className="text-md flex items-center text-blue space-x-3">
                  <BiMap /> <span>Kothar Education</span>
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Events;

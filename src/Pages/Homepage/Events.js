import React, { useState, useEffect } from "react";
import axios from "../../Utils/axios";

import { BiChevronRight, BiChevronLeft, BiMap } from "react-icons/bi";
import { FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import Slider from "react-slick";
import { format } from "date-fns";
import useKothar from "../../context/useKothar";
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
    slidesToShow: 3,
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
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  const [{ events }, {}] = useKothar();
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
            {events?.map((item, i) => (
              <div className="bg-lightBlue px-4 py-6 rounded-md " key={i}>
                <div className="flex flex-col text-left">
                  <p className="text-4xl text-primary text-left font-bold">
                    {format(new Date(item?.date), "do")}
                  </p>
                  <p className="text-4xl text-primary font-normal text-left">
                    {format(new Date(item?.date), "MMM")}
                  </p>
                  <p className="text-2xl  text-black leading-tight font-bold tracking-wide py-6">
                    {item?.topic}
                  </p>
                  <div className="text-md flex items-center text-blue space-x-3">
                    <FiClock />
                    <span>
                      {format(new Date(item?.startTime), "p")} -
                      {format(new Date(item?.endtTime), "p")}
                    </span>
                  </div>
                  <p className="text-md flex items-center text-blue space-x-3">
                    <TfiLocationPin /> <span>{item?.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Events;
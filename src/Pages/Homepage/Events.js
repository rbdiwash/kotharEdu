import React, { useState, useEffect } from "react";
import axios from "../../Utils/Axios";

import {
  BiChevronRight,
  BiChevronLeft,
  BiMap,
  BiChevronsLeft,
} from "react-icons/bi";
import { FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import Slider from "react-slick";
import { format } from "date-fns";
import useKothar from "../../context/useKothar";

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
    arrows: false,
    nextArrow: <BiChevronRight />,
    prevArrow: <BiChevronsLeft />,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
              <div
                className="w-full bg-lightBlue px-4 py-6 rounded-md "
                key={i}
              >
                <div className="flex flex-col text-left">
                  <p className="text-4xl text-primary text-left font-bold">
                    {format(new Date(item?.date || null), "do")}
                  </p>
                  <p className="text-4xl text-primary font-normal text-left">
                    {format(new Date(item?.date || null), "MMM")}
                  </p>
                  <p className="text-2xl  text-black leading-tight font-bold tracking-wide py-6">
                    {item?.topic}
                  </p>
                  <div className="text-md flex items-center text-blue space-x-3">
                    <FiClock />
                    <span>
                      {item?.startTime} - {item?.endTime}
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

import React, { useState, useEffect } from "react";
import axios from "../Utils/Axios";
import { BiChevronRight } from "react-icons/bi";
import { FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import Slider from "react-slick";
import exportImg from "../assets/images/events.png";
import ContactForm from "../Components/ContactForm";
import useKothar from "../context/useKothar";
import { format } from "date-fns";

const Events = () => {
  const [{ events }] = useKothar();

  return (
    <>
      <section id="events" className="h-max-content ">
        <div className="container mx-auto my-auto h-full  pt-12 md:py-24">
          <div className="row items-center  h-full my-auto">
            <p className="section-heading text-left">All Events</p>
            {/* <div className="flex items-center justify-center text-center py-10 space-x-4">
              <FiChevronLeft className="text-4xl text-altWhite cursor-pointer" />
              <p className="text-2xl  text-altWhitee font-semibold text-center md:text-3xl">
                January
              </p>
              <FiChevronRight className="text-4xl text-altWhite cursor-pointer" />
            </div> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 py-12 justify-center items-center gap-8">
              {events?.map((item, i) => (
                <div
                  className="col-span-1 bg-lightBlue  pb-6 rounded-md "
                  key={i}
                >
                  <img src={exportImg} alt="" className="w-full" />
                  <div className="flex text-left space-x-4 mt-4 px-4">
                    <div>
                      <p className="text-4xl text-primary text-left font-bold">
                        {format(new Date(item?.date), "do")}
                      </p>
                      <p className="text-4xl text-primary font-normal text-left">
                        {format(new Date(item?.date), "MMM")}
                      </p>
                    </div>
                    <div>
                      <p className="text-xl  text-black leading-tight font-bold tracking-wide pb-4">
                        {item?.topic}
                      </p>
                      <div className="text-md flex items-center text-blue space-x-3">
                        <FiClock />
                        <span>
                          {item?.startTime} -{item?.endTime}
                        </span>
                      </div>
                      <p className="text-md flex items-center text-blue space-x-3">
                        <TfiLocationPin /> <span>{item?.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container mx-auto mb-12">
          <div className="row">
            <div className="grid md:grid-cols-6  md:items-center">
              <div className="lg:col-span-2 col-span-6">
                <p className="section-heading text-primary text-left">
                  Take part in events
                </p>
                <p className="text-xl my-4 text-left">
                  Enroll your Preparation Class with <br /> Kothar Education
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;

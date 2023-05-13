import { format } from "date-fns/esm";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import TakePartEvent from "../Components/TakePartEvent";

const IndividualNews = () => {
  const location = useLocation();
  const { data } = location?.state;
  return (
    <>
      <section id="bookCover">
        <div className="container mx-auto md:py-48 py-24 ">
          <div className="flex items-center space-x-3 text-white mb-6">
            <h1 className="font-semibold  text-white "> Home</h1>
            <BiChevronRight className="text-3xl" />
            <span>Explore</span> <BiChevronRight className="text-3xl" />
            <span className="text-primary">News and Updates</span>
          </div>

          <p className="text-2xl text-white md:mt-12 mt-4 leading-9 tracking-wide uppercase">
            Jan 15, 2022
          </p>
          <p className="text-2xl font-bold text-white mt-2 leading-9 tracking-wide">
            {data?.topic}
          </p>
        </div>
      </section>
      <section id="detailNews" className="bg-lightBlue">
        <div className="container mx-auto  py-16">
          <div className="row">
            <p className="text-blue upperecase font-semibold text-xl">
              {format(new Date(data?.date), "PP")}
            </p>
            <div className="grid grid-cols-6 md:gap-x-12 gap-x-0 gap-y-4">
              <div className="md:col-span-2 col-span-6">
                <p className="text-2xl font-bold text-black mt-2 leading-9 tracking-wide">
                  {data?.topic}
                </p>
              </div>
              <div className="md:col-span-4 col-span-6">
                <p className="text-black font-medium text-justify">
                  {data?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TakePartEvent />
    </>
  );
};

export default IndividualNews;

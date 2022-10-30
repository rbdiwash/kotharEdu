import React, { useState, useEffect } from "react";
import australia from "../assets/images/australia.png";
import { FiChevronRight } from "react-icons/fi";
import ContactForm from "../Components/ContactForm";
import useKothar from "../context/useKothar";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const News = () => {
  const [{ news }] = useKothar();

  return (
    <>
      <section id="newsa" className="h-max-content pb-8 bg-lightBlue">
        <div className="container mx-auto my-auto h-full  pt-12 md:pt-24">
          <div className="row items-center   h-full my-auto">
            <p className="section-heading pb-10 text-left">News and Updates</p>

            <div className="grid lg:grid-cols-4 md:grid-cols-3  grid-cols-1 py-12 justify-center items-center md:gap-8 gap-y-8 md:gap-y-0">
              {news?.length > 0 &&
                news?.map((item, i) => (
                  <div className="col-span-1">
                    <div className="mx-auto relative text-left">
                      <img
                        src={item?.image || australia}
                        alt=""
                        className="rounded-lg shadow-lg"
                      />
                      <p className="text-blue py-2 font-semibold">
                        {format(new Date(item?.date), "PPPP")}
                      </p>
                      <p className="text-2xl  text-black leading-tight font-bold tracking-wide pb-3 ">
                        {item?.topic}
                      </p>
                      <p className="pb-2 text-lg">
                        {item?.description?.slice(0, 300)}{" "}
                        {item?.description?.length > 300 && "..."}
                      </p>
                      <Link to={`news/${item?.id}`} state={{ data: item }}>
                        <div className="flex text-blue items-center text-xl space-x-1">
                          <h1 className="">More</h1>
                          <FiChevronRight className="text-2xl cursor-pointer" />
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="contact">
        <div className="container mx-auto mb-12">
          <div className="row">
            <div className="grid grid-cols-6 px-6 py-12 justify-center items-center">
              <div className="md:col-span-2 col-span-6 ">
                <p className="section-heading text-primary text-left">
                  Take part in events
                </p>
                <p className="section-subHeading text-left">
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

export default News;

import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import TakePartEvent from "../Components/TakePartEvent";
import AssociatedUni from "./Homepage/AssociatedUni";
const IndividualStates = () => {
  const sidebars = [
    { title: "Universities and Courses available", value: "uni" },
    { title: "Fees, Scholarships and cost of living", value: "fees" },
    { title: "Admission Process", value: "admission" },
    { title: "Visa Procedure", value: "visa" },
  ];

  const location = useLocation();
  const { data } = location?.state;
  console.log("🚀 ~ data", data);
  const cover = data?.image;

  return (
    <>
      <section
        style={{
          background: `linear-gradient(to top, #00001a70,#00001a70), url(${data?.image}) no-repeat center`,
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto md:py-48 py-24">
          <div className="flex items-center space-x-3 text-white mb-6">
            <h1 className="font-semibold  text-white "> Home</h1>
            <BiChevronRight className="text-3xl" />
            <span>Explore</span> <BiChevronRight className="text-3xl" />
            <span className="text-primary">Study in Sydney</span>
          </div>

          <p className="md:text-5xl text-2xl uppercase text-white font-bold md:mt-16">
            Study in {data?.destination || "Australia"}
          </p>
          <p className="text-2xl text-lg text-white mt-4 leading-9 tracking-wide">
            Academic opportunities recognised all over the world
          </p>
        </div>
      </section>
      <section id="detailNews" className="">
        <div className="container mx-auto">
          <div className="row">
            <div className="grid grid-cols-6 md:gap-x-20 gap-x-0 gap-y-4 items-center justify-between">
              <div className="md:col-span-4 col-span-6 mt-6 md:mt-0">
                <p className="text-black font-semibold text-lg">
                  {data?.destinationDesc}
                </p>
                <div className="btn w-max mt-8">Learn More</div>
              </div>
              <div className="md:col-span-2 col-span-6 ">
                <div className="flex flex-col bg-blue">
                  {sidebars.map((arg) => (
                    <div
                      className="md:py-8 md:px-8 p-4 text-white border-b-2 border-[#86C6D9] font-semibold md:text-2xl text-xl cursor-pointer"
                      key={arg?.value}
                    >
                      {arg?.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="questions">
        <div className="container mx-auto md:my-24 my-12">
          <div className="row">
            <div className="section-heading text-black text-left">
              {data?.whyDestination?.title}
            </div>
            <div className="grid md:grid-cols-3 md:gap-16 gap-4 justify-center items-center md:mt-12 mt-4">
              {data?.whyDestination?.ans?.map((item, i) => (
                <div className="col-span-1" key={i}>
                  <div className="card ">
                    <div className="text-2xl  mb-4 text-primary font-bold text-left">
                      {item?.title}
                    </div>
                    <p className="font-semibold">{item?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AssociatedUni
        title={"Universities Available"}
        subtitle="Know about the Uni and the course of your interest in Sydney"
      />
      <TakePartEvent />
    </>
  );
};

export default IndividualStates;

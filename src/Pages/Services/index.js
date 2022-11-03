import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";
import ContactForm from "../../Components/ContactForm";
import TakePartEvent from "../../Components/TakePartEvent";
import useKothar from "../../context/useKothar";
const Services = () => {
  const sidebars = [
    { serviceName: "IELTS", id: "ielts" },
    { serviceName: "PTE CLASS", id: "pte" },
    { serviceName: "Scholarship Guidance", id: "scholarship" },
    { serviceName: "University / Colleges Presentation", id: "uni" },
    { serviceName: "Pre-departure Session", id: "predaparture" },
    { serviceName: "Work Placement", id: "placement" },
    { serviceName: "Skill Assessment ", id: "skill" },
    { serviceName: "Accomodation / Airport Pickup  ", id: "accomodation" },
    { serviceName: "College Enrollment", id: "enrollment" },
  ];

  const location = useLocation();
  const { data } = location?.state;
  const [{ services }, {}] = useKothar();
  return (
    <>
      <section
        id="bookCover"
        style={{
          background: `linear-gradient(to top, #00001a70,#00001a70), url(${data?.image}) no-repeat center`,
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto md:py-36 py-20 ">
          <div className="flex items-center space-x-3 text-white mb-6">
            <h1 className="font-semibold  text-white "> Home</h1>
            <BiChevronRight className="text-3xl" />
            <span>Services</span> <BiChevronRight className="text-3xl" />
            <span className="text-primary">{data?.serviceName}</span>
          </div>

          <p className="md:text-5xl text-2xl uppercase text-white font-bold md:mt-16">
            {data?.serviceName}
          </p>
          <p className="text-lg text-white mt-4 leading-9 tracking-wide">
            Academic opportunities recognised all over the world
          </p>
        </div>
      </section>
      <section id="detailNews" className="">
        <div className="container mx-auto">
          <div className="row">
            <div className="grid grid-cols-6 md:gap-x-20 gap-x-0 gap-y-4 items-start justify-between mb-12">
              <div className="md:col-span-4 col-span-6 mt-16">
                <p className="text-black font-semibold text-lg">
                  {data?.descripttion}
                </p>
                <NavLink to="/book">
                  <button className="btn w-max mt-8"> Book Now</button>
                </NavLink>
              </div>
              <div className="md:col-span-2 col-span-6 md:ml-auto max-h-[400px] overflow-y-auto min-w-[350px]">
                <div className="flex flex-col bg-blue overflow-y-auto">
                  {services?.services?.map((arg, i) => (
                    <NavLink
                      to={`/services/${arg?.id}`}
                      key={i}
                      state={{ data: arg }}
                      s
                    >
                      <div
                        className="md:py-8 md:px-8 p-4 text-white capitalize border-b-2 border-[#86C6D9] font-semibold md:text-2xl text-xl cursor-pointer"
                        key={arg?.id}
                      >
                        {arg?.serviceName}
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            {data?.more?.title && (
              <p className="section-subHeading text-left font-semibold">
                {data?.more?.title}
              </p>
            )}
            {data?.more?.infos?.length > 0 && (
              <div className="grid grid-cols-3 md:gap-20 gap-10 items-center justify-between md:mb-20 md:mt-15 my-10">
                {data?.more?.infos?.map((item, id) => (
                  <div className="col-span-3 md:col-span-1">
                    <p className="text-2xl text-primary font-semibold">
                      {item?.title}
                    </p>
                    <p className="text-lg text-black font-semibold mt-4">
                      {item?.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <TakePartEvent />
    </>
  );
};

export default Services;

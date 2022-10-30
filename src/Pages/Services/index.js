import React from "react";
import { BiChevronRight } from "react-icons/bi";
import ContactForm from "../../Components/ContactForm";
const Services = () => {
  const sidebars = [
    { title: "IELTS", value: "ielts" },
    { title: "PTE CLASS", value: "pte" },
    { title: "Scholarship Guidance", value: "scholarship" },
    { title: "University / Colleges Presentation", value: "uni" },
    { title: "Pre-departure Session", value: "predaparture" },
    { title: "Work Placement", value: "placement" },
    { title: "Skill Assessment ", value: "skill" },
    { title: "Accomodation / Airport Pickup  ", value: "accomodation" },
    { title: "College Enrollment", value: "enrollment" },
  ];

  return (
    <>
      <section id="bookCover">
        <div className="container mx-auto md:py-36 py-20 ">
          <div className="flex items-center space-x-3 text-white mb-6">
            <h1 className="font-semibold  text-white "> Home</h1>
            <BiChevronRight className="text-3xl" />
            <span>Explore</span> <BiChevronRight className="text-3xl" />
            <span className="text-primary">Study in Sydney</span>
          </div>

          <p className="md:text-5xl text-2xl uppercase text-white font-bold md:mt-16">
            Study in Sydney
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
                  Sydney, for study its perfect destination. Sydney is
                  Australia’s first city, both as the landing spot of the First
                  Fleet (1788) and the first incorporated City Council (1842).
                  This history is deeply reflected in Sydney’s strikingly iconic
                  landmarks - the world-famous Sydney Opera House and Sydney
                  Harbour Bridge - both must-see destination during your time
                  here.
                </p>
                <div className="btn w-max mt-8">Learn More</div>
              </div>
              <div className="md:col-span-2 col-span-6 ml-auto h-[500px] overflow-y-auto">
                <div className="flex flex-col bg-blue overflow-y-auto">
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
      <section className="contact">
        <div className="container mx-auto md:my-24 my-12">
          <div className="row">
            <div className="grid md:grid-cols-6 px-6 py-12 justify-center items-center">
              <div className="col-span-2 ">
                <p className="section-heading text-primary text-left">
                  Take part in events
                </p>
                <p className="text-xl mt-4 text-left">
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

export default Services;

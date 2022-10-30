import React from "react";
import { BiChevronRight } from "react-icons/bi";
import logo from "../assets/images/logo.png";

const About = () => {
  return (
    <section id="contactPage">
      {" "}
      <div className="container mx-auto py-12 md:py-24">
        <div className="row">
          <div className="flex items-center space-x-3 mb-6">
            <h1 className="font-semibold flex items-center">Home</h1>
            <BiChevronRight className="text-3xl" />{" "}
            <span className="text-primary font-semibold">About Us</span>
          </div>
          <p className="section-heading text-black text-left mt-8">
            KOTHAR EDUCATION
          </p>
          <div className="grid md:grid-cols-6 grid-cols-1 items-center gap-12 mt-8 justify-between">
            <div className="md:col-span-3 col-span-6">
              <p className="text-xl">
                Kothar Educational services was founded with a vision to provide
                quality services to all the students. Kothar Educational
                services specialise in providing a wide range of services to
                students who wants to study in Australia. Our experienced team
                who had been already assessed more than 1000’s clients to
                achieve their dream are keen to provide quality of counselling
                to each individual clients and assist them on their future
                dream. We help on step-by-step process to all the clients from
                the beginning till the end of the processing.
              </p>
            </div>
            <div className="md:col-span-1"></div>
            <div className="md:col-span-2 col-span-6">
              <img src={logo} alt="" className="w-full" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 items-center md:gap-12 mt-8 justify-between mt-16">
            <div className="md:col-span-1 col-span-2">
              <div className="p-6">
                <p className="section-heading text-left text-primary">
                  Mission
                </p>
                <p className="mt-6 text-lg">
                  Our mission is to guide students to explore and help secure
                  their career prospects through suitable education and
                  pathways.
                </p>
              </div>
            </div>
            <div className="md:col-span-1 col-span-2">
              <div className="p-6">
                <p className="section-heading text-left text-primary">Vision</p>
                <p className="mt-6 text-lg">
                  Our vision is to be the best education service provider across
                  continents and help aspiring students achieve their dream.
                </p>
              </div>
            </div>
            <div className="md:col-span-1 col-span-2">
              <div className="p-6">
                <p className="section-heading text-left text-primary">Values</p>
                <p className="mt-6 text-lg">
                  Our values lie in providing honest counseling, ensuring
                  responsibility to identify our clients’ needs, and excellent
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

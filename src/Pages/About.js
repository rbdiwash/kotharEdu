import React from "react";
import { BiChevronRight } from "react-icons/bi";
import logo from "../assets/images/logo.png";
import document from "../assets/images/pier.jpg";
import Anand from "../assets/images/team/Anand Simkhada.JPG";
import Muskan from "../assets/images/team/Muskan Pandey.jpeg";
import Rudra from "../assets/images/team/Rudra Acharya.JPG";

const About = () => {
  const members = [
    {
      name: "Muskan Pandey",
      role: "Director/Senior Educational Consultant",
      number: "T088",
      gmail: "muskan@kotharedu.com",
      image: Muskan,
    },
    {
      name: "Anand Simkhada",
      role: "Director/ Educational Consultant",
      number: "T290",
      gmail: "anand@kotharedu.com",
      image: Anand,
    },
    {
      name: "Rudra Acharya",
      role: "Director",
      number: "-",
      gmail: "rundra@kotharedu.com",
      image: Rudra,
    },
  ];

  return (
    <>
      <section id="contactPage">
        <div className="container mx-auto py-12 md:py-24">
          <div className="row">
            <div className="flex items-center space-x-3 mb-6">
              <h1 className="font-semibold flex items-center">Home</h1>
              <BiChevronRight className="text-3xl" />
              <span className="text-primary font-semibold">About Us</span>
            </div>
            <p className="section-heading text-black text-left mt-8">
              KOTHAR EDUCATION
            </p>
            <div className="grid md:grid-cols-6 grid-cols-1 items-center gap-12 mt-8 justify-between">
              <div className="md:col-span-3 col-span-6">
                <p className="text-xl">
                  Kothar Educational services was founded with a vision to
                  provide quality services to all the students. Kothar
                  Educational services specialise in providing a wide range of
                  services to students who wants to study in Australia. Our
                  experienced team who had been already assessed more than
                  1000’s clients to achieve their dream are keen to provide
                  quality of counselling to each individual clients and assist
                  them on their future dream. We help on step-by-step process to
                  all the clients from the beginning till the end of the
                  processing.
                </p>
              </div>
              <div className="md:col-span-1"></div>
              <div className="md:col-span-2 col-span-6">
                <img src={logo} alt="" className="w-full" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 items-start md:gap-16 justify-between mt-16 text-justify">
              <div className="md:col-span-1 col-span-2">
                <div>
                  <p className="section-heading text-left text-primary">
                    Mission
                  </p>
                  <p className="mt-6 text-lg">
                    The mission of our Education Consultancy is to provide
                    personalized guidance and support to students and
                    professionals at all stages of their educational journey.
                    Our aim is to help individuals achieve their academic and
                    career goals, while also fostering a love of learning that
                    will last a lifetime. At our Educational Consultancy, we
                    will prioritize offering individualized attention and
                    assistance to all our clients, understanding that each
                    person has distinct requirements and ambitions. Our
                    consultants will collaborate closely with clients to
                    comprehend their objectives, interests, and strengths,
                    creating tailored strategies to facilitate their success.
                  </p>
                </div>
              </div>
              <div className="md:col-span-1 col-span-2">
                <div>
                  <p className="section-heading text-left text-primary">
                    Vision
                  </p>
                  <p className="mt-6 text-lg">
                    we are committed to making Kothar Educational Services the
                    topmost educational consultancy in the country, providing
                    clients with the best guidance and support to help them
                    achieve their education and career goals. We believe that by
                    doing everything in our power to provide the best services,
                    we will become the preferred choice for students and
                    professionals seeking to advance their education and
                    careers.
                  </p>
                </div>
              </div>
              <div className="md:col-span-1 col-span-2">
                <div>
                  <p className="section-heading text-left text-primary">
                    Values
                  </p>
                  <p className="mt-6 text-lg">
                    At Kothar Educational Services, we believe that our values
                    form the foundation of our consultancy, and they are
                    integral to everything we do. Our core values are honesty,
                    responsibility, and excellent service. our values of
                    honesty, responsibility, and excellent service form the core
                    of our consultancy. We are committed to providing our
                    clients with the best guidance and support possible,
                    recognizing that each person has unique needs and
                    aspirations. By adhering to our values, we aim to become the
                    preferred choice for students and professionals seeking to
                    advance their education and careers.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full d-flex">
              <p className="section-heading text-primary text-left mt-16">
                CERTIFICATIONS
              </p>
              <img src={document} alt="document.jpg" className="mx-auto mt-8" />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-12">
        <div className="container mx-auto my-10 md:my-20">
          <p className="section-heading text-left text-primary">
            Management Team
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 items-center">
            {members?.map((item, index) => (
              <TeamCard
                key={index}
                name={item?.name}
                role={item.role}
                number={item.number}
                gmail={item.gmail}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

export const TeamCard = ({ name, role, number, gmail, image }) => {
  return (
    <div className="col-span 1 shadow-lg hover:shadow-2xl border border-dashed  rounded-xl cursor-pointer transition">
      <img
        src={image}
        alt={name}
        className="rounded-t-xl h-[400px] object-cover"
      />
      <div className="px-4 py-5">
        <div className="text-xl font-semibold tracking-wide text-gray-700">
          {name}
        </div>
        <div className="font-bold text-base uppercase">{role}</div>
        <div>QEAC Number : {number}</div>
        <div>Gmail: {gmail}</div>
      </div>
    </div>
  );
};

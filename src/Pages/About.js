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
      gmail: "info@kotharedu.com",
      image: Muskan,
    },
    {
      name: "Anand Simkhada",
      role: "Director/ Educational Consultant",
      number: "T290",
      gmail: "info@kotharedu.com",
      image: Anand,
    },
    {
      name: "Rudra Acharya",
      role: "Director",
      number: "11564",
      gmail: "info@kotharedu.com",
      image: Rudra,
    },
  ];

  const whyChooseUs = [
    {
      title: "Expertise",
      desc: "With years of experience in the field, our consultants possess the knowledge and insights needed to guide you through every step of your educational journey.",
      icon: "",
    },
    {
      title: "Personalized Approach",
      desc: "We understand that each student is unique. That's why we take the time to understand your individual goals and tailor our services to meet your specific needs.",
      icon: "",
    },
    {
      title: "Comprehensive Support",
      desc: "From initial consultation to post-arrival assistance, we're committed to providing you with comprehensive support at every stage of your academic pursuit",
      icon: "",
    },
    {
      title: "Global Network",
      desc: "Our extensive network of partner institutions and industry contacts spans across the globe, giving you access to a world of opportunities.",
      icon: "",
    },
    {
      title: "Success Stories",
      desc: "Our track record speaks for itself. Countless students have entrusted us with their educational aspirations and have gone on to achieve remarkable success in their chosen fields",
      icon: "",
    },
    {
      title: "Transparent Communication",
      desc: "We believe in open and transparent communication, keeping you informed at every step of the process and addressing any concerns or queries promptly.",
      icon: "",
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
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-12 mt-8 justify-between">
              <div className="md:col-span-7 col-span-6">
                <p className="text-xl text-justify">
                  Embark on a journey with Kothar Educational Services, where
                  quality meets opportunity! Founded with a vision to provide
                  top-notch services to students worldwide, we specialize in
                  guiding aspiring scholars towards their educational dreams,
                  particularly those aiming to study in Australia. Our seasoned
                  team, having successfully assisted thousands of clients, is
                  dedicated to delivering personalized counselling to every
                  individual, ensuring their aspirations are realized. From
                  initial consultation to application completion, we provide
                  unwavering support, ensuring a seamless and enriching
                  experience at every turn. At Kothar, excellence is our
                  hallmark, and we're committed to empowering students to thrive
                  in their educational pursuits. Join us as we pave the way for
                  global educational excellence, fostering cross-cultural
                  exchange and nurturing future leaders. Your journey to success
                  begins here, where every student's potential is nurtured and
                  celebrated!
                </p>
              </div>
              <div className="md:col-span-1"></div>
              <div className="md:col-span-4  col-span-6">
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
                    We are committed to making Kothar Educational Services the
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
            {/* <div className="w-full d-flex">
              <p className="section-heading text-primary text-left mt-16">
                CERTIFICATIONS
              </p>
              <img src={document} alt="document.jpg" className="mx-auto mt-8" />
            </div> */}
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
      <div class="bg-white">
        <section
          id="features"
          class="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30"
        >
          <div class="relative mx-auto max-w-5xl text-center">
            <span class="text-gray-800 my-3 flex items-center justify-center uppercase tracking-wider text-4xl font-bold">
              Why choose us
            </span>

            <p class="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-600 text-lg">
              Choose us for your study abroad journey. With personalized
              guidance, expert insights, and unwavering support, we'll ensure a
              seamless transition to your chosen destination. Trust us to be
              your reliable partner in achieving your academic dreams abroad.
            </p>
          </div>

          <div class="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs?.map((item, i) => (
              <div class="relative h-full ml-0 mr-0 sm:mr-10">
                <span
                  class={
                    "absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg " +
                    (i % 2 === 0 ? "bg-indigo-500" : "bg-primary")
                  }
                ></span>
                <div
                  class={
                    "relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg " +
                    (i % 2 === 0 ? "border-indigo-400" : "border-primary")
                  }
                >
                  <div class="flex items-center -mt-1">
                    <h3 class="my-2 text-xl font-bold text-gray-800">
                      {item?.title}
                    </h3>
                  </div>
                  <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                    ------------
                  </p>
                  <p class="mb-2 text-gray-600 text-lgs">{item?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
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

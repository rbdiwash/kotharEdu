import React from "react";
import study from "../../assets/images/study.png";
import student from "../../assets/images/student.png";
import uni from "../../assets/images/select.png";
import apply from "../../assets/images/apply.png";
import admission from "../../assets/images/admission.png";
import user from "../../assets/images/user.png";
import vector from "../../assets/images/Vector.png";
import visa from "../../assets/images/visa.png";
import AssociatedUni from "./AssociatedUni";
import Slider from "react-slick";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Classes from "./Classes";
import News from "./News";
import Events from "./Events";
import Cities from "./Cities";
import ContactForm from "../../Components/ContactForm";
import Testimonials from "./Testimonials";
import { Link, NavLink } from "react-router-dom";
import useKothar from "../../context/useKothar";
const options = [
  { title: "Study Abroad Decision", img: study },
  { title: "Student Counseling", img: student },
  { title: "Select University", img: uni },
  { title: "Apply to Universities", img: apply },
  { title: "Get Admission", img: admission },
];
const options2 = [
  {
    title: "Students",
    img: user,
    count: "10K",
  },
  { title: "Intitutes and Colleges", img: vector, count: "50" },
  { title: "Visa Lodged", img: visa, count: "1000" },
];

const Homepage = () => {
  var settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: false,
    nextArrow: <BiChevronRight />,
    prevArrow: <BiChevronLeft />,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  };
  const [{ services }, {}] = useKothar();
  return (
    <>
      <section id="homepage" className="h-max">
        <div className="container mx-auto md:pb-[200px]">
          <div className="row">
            <div className="py-12 md:pt-20 w-full md:w-3/4">
              <h1 className="md:text-6xl text-4xl uppercase text-white font-semibold leading-relaxed">
                Welcome to kothar <br /> educational services
              </h1>
              <p className="text-white md:text-[24px]  text-xl leading-10	font-normal	 pt-8">
                We are thrilled to have you here and look forward to helping you
                achieve your academic goals.
              </p>
              <p className="text-white md:text-[24px]  text-xl leading-10	font-normal	 py-8">
                Our consultancy provides you with personalized guidance and
                support throughout your educational journey. Whether you're a
                student seeking guidance on choosing the right college, a
                working professional looking to advance your career through
                education, or an international student looking to study in a new
                country, we are here to help.
              </p>
              <Link to="/about" className="btn ">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto md:mt-[-100px] z-50">
        <div className="bg-second  grid md:grid-cols-5  gap-8 py-10 px-6 rounded-md shadow-md items-center justify-center">
          {options.map((arg) => (
            <div className="col-span-1" key={arg?.title}>
              <div className="card flex flex-col items-center justify-center text-center">
                <img src={arg?.img} alt="" />
                <p className="text-2xl text-white font-medium mt-8">
                  {arg?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section id="homepage2" className="h-max">
        <div className="container mx-auto text-center py-12 md:py-24">
          <div className="row ">
            <p className="section-heading md:w-[80%] mx-auto">
              One of the leading educational consultancy in Nepal guiding
              students to meet their dreams
            </p>
            <p className="section-subHeading">
              Proper abroad study guidance provided for academic growth. The
              best test preparation classes in the whole town. Definite
              information about highly renowned colleges/universities throughout
              the globe. Guidance for getting wide range of
              scholarship/fellowship. Service oriented staffs to provide
              information all the time. Located at heart of main cities of the
              country.
            </p>
            <div className="grid grid-cols-3 md:gap-16 py-10  rounded-md md:px-16 my-16">
              {options2?.map((arg) => (
                <div className="col-span-1" key={arg?.title}>
                  <div className="card flex flex-col items-center justify-center text-center">
                    <img src={arg?.img} alt="" />
                    <h1 className="md:text-6xl text-4xl font-bold text-[#585655] my-6">
                      {arg?.count}
                      <sup>+</sup>
                    </h1>
                    <p className="md:text-2xl text-xl text-[#585655] font-semibold">
                      {arg?.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Cities />

      <section id="services" className="h-max-content bg-lightBlue">
        <div className="container mx-auto my-auto h-full  py-12 md:py-24">
          <div className="row items-center  h-full my-auto">
            <p className="section-heading">Our Services</p>
            <p className="section-subHeading pb-20">
              {services?.serviceMotto ||
                "Provide awesome customer service with our experienced teachers"}
            </p>
            <Slider {...settings}>
              {services?.services?.map((item, i) => (
                <div className="w-content" key={i * 123}>
                  <div className="mx-auto relative text-left">
                    {/*  w-[80%] */}
                    <img
                      src={item?.image}
                      alt=""
                      className="rounded h-[300px]"
                    />
                    <p className="text-3xl  text-black leading-tight capitalize font-bold tracking-wide py-6">
                      {item?.serviceName?.slice(0, 20)}
                      {item?.serviceName?.length > 20 && "..."}
                    </p>
                    <p className="pb-4 text-xl text-justify">
                      {item?.descripttion?.slice(0, 200)}{" "}
                      {item?.descripttion?.length > 200 && "..."}
                    </p>
                    <NavLink
                      to={`/services/`}
                      className="flex text-blue items-center text-xl cursor-pointer"
                    >
                      <h1 className="">More</h1>
                      <BiChevronRight className="text-xl cursor-pointer" />
                    </NavLink>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <Events />
      <Classes />
      <News />
      <AssociatedUni />
      <Testimonials />
      <section id="contact" className="h-max">
        <div className="container mx-auto">
          <div className="row">
            <div className="grid md:grid-cols-6 px-6 py-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;

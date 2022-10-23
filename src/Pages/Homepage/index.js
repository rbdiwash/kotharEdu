import React, { useState, useEffect } from "react";
import study from "../../assets/images/study.png";
import student from "../../assets/images/student.png";
import uni from "../../assets/images/select.png";
import apply from "../../assets/images/apply.png";
import admission from "../../assets/images/admission.png";
import user from "../../assets/images/user.png";
import vector from "../../assets/images/Vector.png";
import visa from "../../assets/images/visa.png";
import australia from "../../assets/images/australia.png";
import AssociatedUni from "./AssociatedUni";
import Slider from "react-slick";
// import axios from "../../Utils/Axios";
import axios from "axios";
import { BiChevronRight, BiChevronLeft, BiMap } from "react-icons/bi";
import { FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Classes from "./Classes";
import News from "./News";
import Events from "./Events";
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", color: "gray" }}
      onClick={onClick}
    >
      <BiChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <BiChevronRight />
    </div>
  );
}

const Homepage = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [events, setEvents] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [services, setServices] = useState([]);
  const [news, setNews] = useState([]);
  const [uniList, setUniList] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    axios
      .get("https://kothar-consultancy.vercel.app/kothar/events")
      .then((res) => {
        console.log(res);
        setEvents(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/testimonials")
      .then((res) => {
        console.log(res);
        setTestimonial(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/services")
      .then((res) => {
        console.log(res);
        setServices(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/news")
      .then((res) => {
        console.log(res);
        setNews(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/universities")
      .then((res) => {
        console.log(res);
        setUniList(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/destinations")
      .then((res) => {
        console.log(res);
        setDestinations(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section id="homepage" className="h-screen">
        <div className="container mx-auto">
          <div className="row">
            <div className="py-12 w-full md:w-3/4">
              <h1 className=" text-6xl uppercase text-white font-semibold leading-tight">
                Welcome to kothar educational services
              </h1>
              <p className="text-white text-2xl leading-relaxed py-8">
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
              <button className="btn font-semibold">Explore More</button>
            </div>
            <div className="bg-blueAlt  grid grid-cols-5 gap-4 py-10 px-6 rounded-md shadow-md">
              {options.map((arg) => (
                <div className="col-span-1" key={arg?.title}>
                  <div className="card flex flex-col items-center justify-center text-center">
                    <img src={arg?.img} alt="" />
                    <p className="text-2xl text-white font-semibold mt-8">
                      {arg?.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="homepage2" className="h-max-content">
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
            <div className="grid grid-cols-3 gap-16 py-10  rounded-md md:px-16 my-16">
              {options2?.map((arg) => (
                <div className="col-span-1" key={arg?.title}>
                  <div className="card flex flex-col items-center justify-center text-center">
                    <img src={arg?.img} alt="" />
                    <h1 className="md:text-6xl font-bold text-black my-6">
                      {arg?.count}
                      <sup>+</sup>
                    </h1>
                    <p className="md:text-2xl text-black font-semibold">
                      {arg?.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="h-max-content">
        <div className="container mx-auto text-center py-12 md:py-24">
          <div className="row ">
            <p className="section-heading">Where do you want to study?</p>
            <p className="section-subHeading">
              We recommend you the Best college in best <br /> destination to
              build your career.
            </p>

            <div className="my-16">
              <Slider {...settings}>
                <div className="col-span-1 slider">
                  <div className="text-center mx-auto relative">
                    <img
                      src={australia}
                      alt=""
                      className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                    />
                    <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                      Australia
                    </div>
                  </div>
                </div>
                <div className="col-span-1 slider">
                  <div className="text-center mx-auto relative">
                    <img
                      src={australia}
                      alt=""
                      className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                    />
                    <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                      Australia
                    </div>
                  </div>
                </div>
                <div className="col-span-1 slider">
                  <div className="text-center mx-auto relative">
                    <img
                      src={australia}
                      alt=""
                      className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                    />
                    <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                      Australia
                    </div>
                  </div>
                </div>
                <div className="col-span-1 slider">
                  <div className="text-center mx-auto relative">
                    <img
                      src={australia}
                      alt=""
                      className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                    />
                    <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                      Australia
                    </div>
                  </div>
                </div>
                <div className="col-span-1 slider">
                  <div className="text-center mx-auto relative">
                    <img
                      src={australia}
                      alt=""
                      className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                    />
                    <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                      Australia
                    </div>
                  </div>
                </div>
                <div className="col-span-1 slider">
                  <div className="text-center mx-auto relative">
                    <img
                      src={australia}
                      alt=""
                      className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                    />
                    <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                      Australia
                    </div>
                  </div>
                </div>
                <div className="col-span-1 slider">
                  <div className="text-center mx-auto relative">
                    <img
                      src={australia}
                      alt=""
                      className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                    />
                    <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                      Australia
                    </div>
                  </div>
                </div>
                <div className="col-span-1 slider">
                  <div className="text-center mx-auto relative">
                    <img
                      src={australia}
                      alt=""
                      className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                    />
                    <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                      Australia
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="h-max-content bg-lightBlue">
        <div className="container mx-auto my-auto h-full  py-12 md:py-24">
          <div className="row items-center  h-full my-auto">
            <p className="section-heading">Our Services</p>
            <p className="section-subHeading pb-20">
              Provide awesome customer service with our experienced teachers
            </p>
            <Slider {...settings}>
              <div className="">
                <div className="mx-auto relative text-left">
                  <img src={australia} alt="" className="rounded  h-[300px]" />
                  <p className="text-3xl  text-black leading-tight font-bold tracking-wide py-6">
                    Library
                  </p>
                  <p className="pb-4 text-xl">
                    For especial members only, we are providing a huge range of
                    standardized tests preparation materials.
                  </p>
                  <div className="flex text-blue items-center text-xl">
                    <h1 className="">More</h1>
                    <BiChevronRight className="text-xl cursor-pointer" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <Events />
      <Classes />
      <News />
      <AssociatedUni />
    </>
  );
};

export default Homepage;

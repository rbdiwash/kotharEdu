import React from "react";
import study from "../../assets/images/study.png";
import student from "../../assets/images/student.png";
import uni from "../../assets/images/select.png";
import apply from "../../assets/images/apply.png";
import admission from "../../assets/images/admission.png";
import user from "../../assets/images/user.png";
import vector from "../../assets/images/Vector.png";
import visa from "../../assets/images/visa.png";
import noImage from "../../assets/images/australia.png";
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
import award from "../../assets/images/award.png";
const options = [
  { title: "Study Abroad Decision", img: study },
  { title: "Student Counseling", img: student },
  { title: "Select University", img: uni },
  { title: "Apply to Universities", img: apply },
  { title: "Get Admission", img: admission },
];
const options2 = [
  {
    title: "Awards",
    img: award,
    count: "2025",
    description: "Local Business Awards Finalist",
  },
  {
    title: "Students",
    img: user,
    count: "10K",
    description: "Successful student placements worldwide",
  },
  {
    title: "Institutes",
    img: vector,
    count: "50",
    description: "Partner universities and colleges",
  },
  {
    title: "Visa Success",
    img: visa,
    count: "1000",
    description: "Successful visa applications",
  },
];

const Homepage = () => {
  var settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
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
      <section id="homepage" className="h-1/2 bg-gray-500 relative">
        <div
          className="absolute inset-0 bg-black opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))",
          }}
        />
        <div className="container mx-auto py-[150px] relative z-10">
          <div className="row">
            <div className="py-12 md:pt-20 w-full md:w-4/4">
              <h1 className="md:text-5xl text-4xl uppercase text-white font-semibold leading-relaxed">
                Welcome to kothar educational services
              </h1>
              <p className="text-white md:text-[24px]  text-xl leading-10	font-normal	 pt-8">
                Empowering Your Educational Journey!
              </p>
              <p className="text-white md:text-[24px]  text-xl leading-10	font-normal	 py-8">
                Kothar Education Services is your premier consultancy partner,
                we specialize in guiding students towards fulfilling their
                dreams of studying abroad in prestigious institutions across the
                globe. Nestled in the heart of Sydney, Australia and Kathmandu,
                Nepal, we serve as a guiding light for ambitious individuals
                seeking to embark on transformative educational journeys around
                the world, with a focus on destinations like Australia, Canada,
                the UK, the USA.
              </p>
              <Link to="/about" className="btn ">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-second z-100">
        <div className="container mx-auto   grid md:grid-cols-5  gap-8 py-10 px-6 items-center justify-center">
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
      <section
        id="homepage2"
        className="py-24 bg-gradient-to-b from-white to-lightBlue"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-second mb-6">
              One of the leading educational consultancy in Nepal
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Proper abroad study guidance provided for academic growth. The
              best test preparation classes in the whole town. Definite
              information about highly renowned colleges/universities throughout
              the globe. Guidance for getting wide range of
              scholarship/fellowship. Service oriented staffs to provide
              information all the time. Located at heart of main cities of the
              country.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {options2?.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-second/10 p-4 rounded-full mb-6">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-5xl font-bold text-second mb-2">
                    {item.count}
                    {item.title !== "Awards" && (
                      <span className="text-3xl">+</span>
                    )}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cities />

      <section
        id="services"
        className="py-24 bg-gradient-to-b from-lightBlue to-white"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-second mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {services?.serviceMotto ||
                "Provide awesome customer service with our experienced teachers"}
            </p>
          </div>

          <Slider {...settings}>
            {services?.services?.map((item, i) => (
              <div className="px-4" key={i * 123}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-[550px] flex flex-col my-4">
                  <div className="relative overflow-hidden rounded-t-2xl h-[300px]">
                    <img
                      src={item?.image || noImage}
                      alt={item?.serviceName}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-second mb-4 capitalize line-clamp-1">
                      {item?.serviceName}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                      {item?.descripttion?.slice(0, 200)}
                      {item?.descripttion?.length > 200 && "..."}
                    </p>
                    <NavLink
                      to={`/services/${item?.id}`}
                      state={{ data: item }}
                      className="inline-flex items-center text-second font-semibold hover:text-primary transition-colors duration-300 group mt-auto"
                    >
                      <span>Learn More</span>
                      <BiChevronRight className="text-2xl transform group-hover:translate-x-1 transition-transform duration-300" />
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
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

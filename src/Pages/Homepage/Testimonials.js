import React, { useState, useEffect } from "react";
import Slider from "react-slick";
// import axios from "../../Utils/Axios";
import axios from "axios";
import { BiChevronRight, BiChevronLeft, BiMap } from "react-icons/bi";
import australia from "../../assets/images/australia.png";

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

const Testimonials = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
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
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    axios
      .get("/testimonials")
      .then((res) => {
        console.log(res);
        setTestimonial(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section id="services" className="h-max-content bg-lightBlue">
      <div className="container mx-auto my-auto h-full  py-12 md:py-24">
        <div className="row items-center  h-full my-auto">
          <p className="section-heading">Testimonials</p>
          <p className="section-subHeading pb-20">
            What our students tell about us
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
            </div>{" "}
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
            </div>{" "}
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
            </div>{" "}
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
            </div>{" "}
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
  );
};

export default Testimonials;

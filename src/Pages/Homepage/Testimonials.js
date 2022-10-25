import React, { useState, useEffect } from "react";
import Slider from "react-slick";
// import axios from "../../Utils/Axios";
import axios from "axios";
import { BiChevronRight, BiChevronLeft, BiMap } from "react-icons/bi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoChevronDownOutline } from "react-icons/io5";
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
    infinite: true, // 若要置中模式開無限左不留空
    autoplay: false,
    centerMode: true,
    centerPadding: "30%",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerPadding: "30%",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: false,
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
      <div className="container mx-auto  py-12 md:py-24">
        <div className="row items-center  my-auto">
          <p className="section-heading">Testimonials</p>
          <p className="section-subHeading pb-20">
            What our students tell about us
          </p>

          <Slider {...settings}>
            <div className="relative">
              <div className="rounded-sm flex items-center flex-col  text-center bg-blue text-white pb-20">
                <RiDoubleQuotesL className="text-7xl text-[#42b9db]" />

                <p className="pb-4 text-xl">
                  The longest title of a book consists of 26,021 characters, and
                  was achieved by Vityala...
                </p>
                <IoChevronDownOutline className="text-4xl" />
              </div>
              <div className="flex items-center flex-col  text-center mt-[-60px]">
                <img
                  src={australia}
                  alt=""
                  className="rounded-full h-32 w-32 "
                />
                <h2 className="uppercase text-xl font-semibold mt-4">
                  Sophy Gurung
                </h2>
                <p>
                  <i>Student</i>
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import Slider from "react-slick";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoChevronDownOutline } from "react-icons/io5";
import australia from "../../assets/images/australia.png";
import useKothar from "../../context/useKothar";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Testimonials = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "30%",
    nextArrow: <BiChevronRight />,
    prevArrow: <BiChevronLeft />,
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

  const [{ testimonial }, {}] = useKothar();
  return (
    <section id="testimonials" className="h-max-content bg-lightBlue">
      <div className="container mx-auto  py-12 md:py-24">
        <div className="row items-center  my-auto">
          <p className="section-heading">Testimonials</p>
          <p className="section-subHeading pb-20">
            What our students tell about us.
          </p>

          <Slider {...settings}>
            {testimonial?.length > 0 ? (
              testimonial?.map((arg) => (
                <div className="relative" id={arg?.id}>
                  <div className="cont md:px-10 px-6 py-4 rounded-sm flex items-center flex-col  text-center bg-white text-white pb-20">
                    <RiDoubleQuotesL className="quote-icon text-7xl text-[#959595]" />

                    <p className="pb-4 text-xl text-black font-semibold">
                      {arg?.tetimonial}
                    </p>
                    <IoChevronDownOutline className="down-icon text-5xl text-[#959595]" />
                  </div>
                  <div className="flex items-center flex-col  text-center mt-[-60px]">
                    <img
                      src={arg?.image || australia}
                      alt=""
                      className="rounded-full ring h-32 w-32 object-cover"
                    />
                    <h2 className="uppercase text-xl font-semibold mt-4">
                      {arg?.name}
                    </h2>
                    <p>
                      <i>Student</i>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="mt-2 text-center text-2xl">
                Oops ! No Result !!!
              </h1>
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

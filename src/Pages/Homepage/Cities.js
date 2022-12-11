import React, { useEffect, useState } from "react";
import australia from "../../assets/images/australia.png";
import Slider from "react-slick";
import axios from "../../Utils/Axios";
//
import { BiChevronRight, BiChevronLeft, BiMap } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import useKothar from "../../context/useKothar";

const Cities = () => {
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
    nextArrow: <BiChevronRight />,
    prevArrow: <BiChevronLeft />,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const [{ destinations }, {}] = useKothar();
  return (
    <section id="cities" className="h-max-content">
      <div className="container mx-auto text-center py-12 md:py-24">
        <div className="row ">
          <p className="section-heading">Where do you want to study?</p>
          <p className="section-subHeading">
            We recommend you the Best college in best <br /> destination to
            build your career.
          </p>

          <div className="my-16">
            <Slider {...settings}>
              {destinations?.length > 0 &&
                destinations?.map((item) => (
                  <NavLink
                    className="cursor-pointer"
                    to={`/states/${item?.destination}`}
                    state={{ data: item }}
                    key={item?.id}
                  >
                    <div className="col-span-1 slider">
                      <div className="text-center mx-auto relative">
                        <img
                          src={item?.image || australia}
                          alt=""
                          className="w-full rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto min-h-[320px] object-cover"
                        />
                        <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                          {item?.destination || "Sydney"}
                        </div>
                      </div>
                    </div>
                  </NavLink>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import australia from "../../assets/images/Vector.png";
import { BiChevronRight } from "react-icons/bi";
import axios from "../../Utils/Axios";
import useKothar from "../../context/useKothar";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiChevronRight />
    </div>
  );
}
const AssociatedUni = ({ title, subtitle, destinationId }) => {
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
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const [{ uniList }, {}] = useKothar();

  const getFilteredList = () => {
    if (!destinationId) return uniList;
    else {
      let filteredList =
        uniList.filter((arg) => arg?.destId === destinationId) || uniList;
      return filteredList;
    }
  };

  return (
    <>
      <section id="associated" className="md:mb-20">
        <div className="container mx-auto py-12 md:py-24">
          <div className="row">
            <div className="section-heading text-capitalize">
              {title || "Associated Universities"}
            </div>
            {subtitle && (
              <div className="section-subHeading text-altBlack ">
                {subtitle}
              </div>
            )}
            <div className="pt-12 md:pt-24">
              <Slider {...settings}>
                {getFilteredList()?.length > 0 &&
                  getFilteredList()?.map((item) => (
                    <div className="col-span-1 slider" key={item?.id}>
                      <div className="text-center mx-auto relative">
                        <img
                          src={item?.image || australia}
                          alt=""
                          className="rounded"
                        />
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssociatedUni;

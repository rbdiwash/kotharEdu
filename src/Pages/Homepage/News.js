import React, { useState, useEffect } from "react";
// import axios from "../Utils/Axios";
import axios from "axios";
import { BiChevronRight } from "react-icons/bi";
import australia from "../../assets/images/australia.png";
import { FiChevronRight } from "react-icons/fi";

import Slider from "react-slick";
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
const News = () => {
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
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("https://kothar-consultancy.vercel.app/kothar/news")
      .then((res) => {
        console.log(res);
        setNews(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section id="news" className="h-max-content pb-8">
        <div className="container mx-auto my-auto h-full  pt-12 md:pt-24">
          <div className="row items-center text-center  h-full my-auto">
            <p className="section-heading pb-10">News and Updates</p>
            <Slider {...settings}>
              <div className="">
                <div className="mx-auto relative text-left">
                  <img src={australia} alt="" className="rounded  h-[300px]" />
                  <p className="text-blue py-2 font-semibold">JAN 15, 2022</p>
                  <p className="text-2xl  text-black leading-tight font-bold tracking-wide pb-3 ">
                    UK Information Session 2021
                  </p>
                  <p className="pb-2 text-lg">
                    For especial members only, we are providing a huge range of
                    standardized tests preparation materials.
                  </p>
                  <div className="flex text-blue items-center text-xl space-x-1">
                    <h1 className="">More</h1>
                    <FiChevronRight className="text-2xl cursor-pointer" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <div className="text-center">
        <button className="btn-alt text-center mx-auto mt-16">More News</button>
      </div>
    </>
  );
};

export default News;
